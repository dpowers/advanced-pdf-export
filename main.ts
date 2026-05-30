import {
  App, Component, ItemView, MarkdownRenderer, MarkdownView, Notice,
  Plugin, PluginSettingTab, Setting, TFile, WorkspaceLeaf, setIcon,
} from "obsidian";

// ─── Constants ────────────────────────────────────────────────────────────────

const VIEW_TYPE = "advanced-pdf-export";

const PAGE_SIZES: Record<string, { w: number; h: number }> = {
  A4:     { w: 794,  h: 1123 },
  A3:     { w: 1123, h: 1587 },
  Letter: { w: 816,  h: 1056 },
  Legal:  { w: 816,  h: 1344 },
  A5:     { w: 559,  h: 794  },
};

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface DocStyle {
  name: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  paragraphSpacing: number;
  headingScale: number;
  accentColor: string;
  bodyColor: string;
  headingColor: string;
  h1BorderBottom: boolean;
  h2BorderBottom: boolean;
  centerH1: boolean;
  blockquoteBg: string;
  blockquoteBorderColor: string;
  codeBackground: string;
  codeFontSize: number;
  tableHeaderBg: string;
  tableStriped: boolean;
  marginTop: number;    // mm
  marginBottom: number; // mm
  marginLeft: number;   // mm
  marginRight: number;  // mm
}

interface PDFExportSettings extends DocStyle {
  pageSize: string;
  orientation: "portrait" | "landscape";
  preset: string;
  headerText: string;
  footerText: string;
  showHeader: boolean;
  showFooter: boolean;
  showPageNumbers: boolean;
  pageNumberPosition: "center" | "left" | "right";
  autoBreakH1: boolean;
  autoBreakH2: boolean;
  previewScale: number;
}

// Typed cache for the last render — avoids JSON round-trips.
interface LayoutCache {
  layouts: PageLayout[];
  pw: number;
  ph: number;
  mTop: number;
  mBottom: number;
  mLeft: number;
  mRight: number;
  footerH: number;
  headerH: number;
  contentW: number;
  contentH: number;
  docCSS: string;
  fontFamily: string;
  accentColor: string;
}

interface PageLayout {
  pageNodes: HTMLElement[];
  pageNum: number;
  totalPages: number;
  headerText: string;
  footerLeft: string;
  footerRight: string;
  footerCenter: string;
}

// ─── Style Presets ────────────────────────────────────────────────────────────

const PRESETS: Record<string, DocStyle> = {
  default: {
    name: "Default",
    fontFamily: "Georgia, serif",
    fontSize: 13,
    lineHeight: 1.85,
    paragraphSpacing: 0.65,
    headingScale: 1.0,
    accentColor: "#7c6af7",
    bodyColor: "#1a1a2e",
    headingColor: "#0d0d1a",
    h1BorderBottom: false,
    h2BorderBottom: true,
    centerH1: false,
    blockquoteBg: "transparent",
    blockquoteBorderColor: "#7c6af7",
    codeBackground: "#f0f0f8",
    codeFontSize: 0.85,
    tableHeaderBg: "#f0f0f8",
    tableStriped: true,
    marginTop: 20, marginBottom: 20, marginLeft: 25, marginRight: 25,
  },
  minimal: {
    name: "Minimal",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontSize: 12,
    lineHeight: 1.6,
    paragraphSpacing: 0.45,
    headingScale: 0.88,
    accentColor: "#333",
    bodyColor: "#222",
    headingColor: "#111",
    h1BorderBottom: false,
    h2BorderBottom: false,
    centerH1: false,
    blockquoteBg: "#f8f8f8",
    blockquoteBorderColor: "#ccc",
    codeBackground: "#f4f4f4",
    codeFontSize: 0.82,
    tableHeaderBg: "#efefef",
    tableStriped: false,
    marginTop: 16, marginBottom: 16, marginLeft: 20, marginRight: 20,
  },
  academic: {
    name: "Academic",
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: 12,
    lineHeight: 2.0,
    paragraphSpacing: 0.0,
    headingScale: 0.95,
    accentColor: "#1a3a6b",
    bodyColor: "#000",
    headingColor: "#000",
    h1BorderBottom: true,
    h2BorderBottom: true,
    centerH1: true,
    blockquoteBg: "transparent",
    blockquoteBorderColor: "#999",
    codeBackground: "#f9f9f9",
    codeFontSize: 0.88,
    tableHeaderBg: "#e8e8e8",
    tableStriped: false,
    marginTop: 25, marginBottom: 25, marginLeft: 30, marginRight: 30,
  },
  colorful: {
    name: "Colorful",
    fontFamily: "Georgia, serif",
    fontSize: 13,
    lineHeight: 1.85,
    paragraphSpacing: 0.65,
    headingScale: 1.05,
    accentColor: "#e84393",
    bodyColor: "#1a1a2e",
    headingColor: "#2d0a4e",
    h1BorderBottom: false,
    h2BorderBottom: false,
    centerH1: false,
    blockquoteBg: "#fdf0f8",
    blockquoteBorderColor: "#e84393",
    codeBackground: "#f0eaff",
    codeFontSize: 0.85,
    tableHeaderBg: "#2d0a4e",
    tableStriped: true,
    marginTop: 20, marginBottom: 20, marginLeft: 25, marginRight: 25,
  },
  modern: {
    name: "Modern",
    fontFamily: "Arial, 'Helvetica Neue', sans-serif",
    fontSize: 13,
    lineHeight: 1.75,
    paragraphSpacing: 0.6,
    headingScale: 1.0,
    accentColor: "#0070f3",
    bodyColor: "#111",
    headingColor: "#000",
    h1BorderBottom: false,
    h2BorderBottom: false,
    centerH1: false,
    blockquoteBg: "#f0f7ff",
    blockquoteBorderColor: "#0070f3",
    codeBackground: "#f1f5f9",
    codeFontSize: 0.85,
    tableHeaderBg: "#0070f3",
    tableStriped: true,
    marginTop: 20, marginBottom: 20, marginLeft: 25, marginRight: 25,
  },
  newspaper: {
    name: "Newspaper",
    fontFamily: "Georgia, serif",
    fontSize: 12,
    lineHeight: 1.7,
    paragraphSpacing: 0.4,
    headingScale: 1.1,
    accentColor: "#111",
    bodyColor: "#111",
    headingColor: "#000",
    h1BorderBottom: true,
    h2BorderBottom: true,
    centerH1: true,
    blockquoteBg: "transparent",
    blockquoteBorderColor: "#111",
    codeBackground: "#f4f4f4",
    codeFontSize: 0.82,
    tableHeaderBg: "#111",
    tableStriped: false,
    marginTop: 18, marginBottom: 18, marginLeft: 20, marginRight: 20,
  },
};

const DEFAULT_SETTINGS: PDFExportSettings = {
  pageSize: "A4",
  orientation: "portrait",
  preset: "default",
  ...PRESETS["default"],
  headerText: "",
  footerText: "",
  showHeader: true,
  showFooter: true,
  showPageNumbers: true,
  pageNumberPosition: "right",
  autoBreakH1: false,
  autoBreakH2: false,
  previewScale: 0.62,
};

// ─── Utilities ────────────────────────────────────────────────────────────────

/** mm → px at 96 dpi, matching Electron's print pipeline. */
const mmToPx = (mm: number) => (mm / 25.4) * 96;

function escapeHTML(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Markdown helpers ─────────────────────────────────────────────────────────

function normalizeMarkdown(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/^>\s*\[\![^\]]+\].*(?:\n|$)/gmi, "");
}

function splitMarkdownSections(md: string): string[] {
  return md
    .split(/^\/\/\/\s*$/m)
    .map((s) => s.trim())
    .filter(Boolean);
}

async function renderMarkdownToHtml(
  app: App,
  markdown: string,
  sourcePath: string,
  component: Component,
): Promise<string> {
  const temp = document.createElement("div");
  await MarkdownRenderer.render(app, markdown, temp, sourcePath, component);
  return temp.innerHTML;
}

// ─── CSS generator ────────────────────────────────────────────────────────────
//
// Single source of truth used by both the live preview and the exported PDF.
// The selector is always `.mpdf-doc` so both pipelines get identical styles.

function buildDocCSS(s: PDFExportSettings): string {
  const hs = s.headingScale;
  // Presets with dark table headers need white text; others use heading colour.
  const tableHeaderTextColor =
    s.preset === "modern" || s.preset === "newspaper" || s.preset === "colorful"
      ? "#fff"
      : s.headingColor;

  return `
  .mpdf-doc {
    font-family: ${s.fontFamily};
    font-size: ${s.fontSize}px;
    line-height: ${s.lineHeight};
    color: ${s.bodyColor};
    box-sizing: border-box;
  }
  .mpdf-doc *, .mpdf-doc *::before, .mpdf-doc *::after { box-sizing: border-box; }
  .mpdf-doc strong, .mpdf-doc b { font-weight: 700; font-style: normal; }
  .mpdf-doc em, .mpdf-doc i { font-style: italic; font-weight: inherit; }
  .mpdf-doc mark { background: #ffe066; color: inherit; padding: 0 2px; border-radius: 2px; }
  .mpdf-doc del, .mpdf-doc s { text-decoration: line-through; }
  .mpdf-doc h1 {
    font-size: ${Math.round(22 * hs)}px;
    font-weight: 700;
    color: ${s.headingColor};
    margin: 0 0 ${Math.round(12 * hs)}px;
    line-height: 1.2;
    ${s.h1BorderBottom ? `border-bottom: 2px solid ${s.accentColor}; padding-bottom: 6px;` : ""}
    ${s.centerH1 ? "text-align: center;" : ""}
  }
  .mpdf-doc h2 {
    font-size: ${Math.round(17 * hs)}px;
    font-weight: 600;
    color: ${s.headingColor};
    margin: ${Math.round(20 * hs)}px 0 ${Math.round(10 * hs)}px;
    ${s.h2BorderBottom ? `border-bottom: 0.5px solid ${s.accentColor}55; padding-bottom: 5px;` : ""}
  }
  .mpdf-doc h3 {
    font-size: ${Math.round(15 * hs)}px;
    font-weight: 700;
    color: ${s.headingColor};
    margin: ${Math.round(16 * hs)}px 0 ${Math.round(8 * hs)}px;
    letter-spacing: 0.01em;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13 * hs)}px; font-weight: 700; color: ${s.headingColor}; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .mpdf-doc h5 { font-size: ${Math.round(12 * hs)}px; font-weight: 600; color: ${s.headingColor}; margin: 10px 0 4px; font-style: italic; }
  .mpdf-doc h6 { font-size: ${Math.round(11 * hs)}px; font-weight: 600; color: ${s.bodyColor}; margin: 8px 0 4px; font-style: italic; opacity: 0.75; }
  .mpdf-doc p { margin: 0 0 ${s.paragraphSpacing}em; }
  .mpdf-doc ul, .mpdf-doc ol { padding-left: 1.4em; margin: 0 0 ${s.paragraphSpacing}em; }
  .mpdf-doc li { margin-bottom: 0.2em; line-height: ${s.lineHeight}; }
  .mpdf-doc blockquote {
    border-left: 3px solid ${s.blockquoteBorderColor};
    background: ${s.blockquoteBg};
    padding: 4px 0 4px 1em;
    margin: ${s.paragraphSpacing}em 0;
    font-style: italic;
    color: ${s.bodyColor}cc;
  }
  .mpdf-doc code {
    font-family: 'Courier New', monospace;
    font-size: ${s.codeFontSize}em;
    background: ${s.codeBackground};
    padding: 1px 4px;
    border-radius: 3px;
    color: ${s.accentColor};
  }
  .mpdf-doc pre {
    background: ${s.codeBackground};
    border-radius: 4px;
    padding: 10px 12px;
    margin: 0 0 ${s.paragraphSpacing}em;
    overflow: hidden;
  }
  .mpdf-doc pre code {
    font-family: 'Courier New', monospace;
    font-size: ${s.codeFontSize}em;
    color: ${s.bodyColor};
    white-space: pre-wrap;
    word-break: break-all;
    background: none;
    padding: 0;
  }
  .mpdf-doc hr {
    border: none;
    border-top: 0.5px solid ${s.accentColor}44;
    margin: ${s.paragraphSpacing * 1.5}em 0;
  }
  .mpdf-doc img { max-width: 100%; height: auto; display: block; margin: ${s.paragraphSpacing}em auto; }
  .mpdf-doc a { color: ${s.accentColor}; }
  .mpdf-doc table { width: 100%; border-collapse: collapse; margin: 0 0 ${s.paragraphSpacing}em; font-size: 0.92em; }
  .mpdf-doc th {
    background: ${s.tableHeaderBg};
    color: ${tableHeaderTextColor};
    padding: 6px 10px;
    text-align: left;
    font-weight: 600;
    border: 0.5px solid ${s.accentColor}33;
    font-size: 0.9em;
  }
  .mpdf-doc td { padding: 5px 10px; border: 0.5px solid ${s.bodyColor}22; vertical-align: top; }
  ${s.tableStriped ? `.mpdf-doc tbody tr:nth-child(even) { background: ${s.tableHeaderBg}55; }` : ""}
  `.trim();
}

// ─── Paginator ────────────────────────────────────────────────────────────────
//
// Attaches a hidden sandbox to document.body (never to a scrollable container)
// so height measurements are unaffected by scroll context or overflow clipping.
// Walks the block-level children of the rendered HTML and fills page buckets
// by measured height. Elements that overflow are split by their natural unit
// (line for PRE, row for TABLE, item for UL/OL, word for inline text).

const INLINE_SPLIT_TAGS = new Set(["P", "LI", "BLOCKQUOTE", "TD", "TH"]);

const BLOCK_TAGS = new Set([
  "P", "DIV", "SECTION", "ARTICLE", "ASIDE", "NAV", "HEADER", "FOOTER",
  "UL", "OL", "LI", "TABLE", "THEAD", "TBODY", "TFOOT", "TR", "TD", "TH",
  "PRE", "BLOCKQUOTE", "HR", "IMG",
  "H1", "H2", "H3", "H4", "H5", "H6",
]);

// Elements that cannot be split at all — they land on one page whole.
// PRE is deliberately absent: it gets its own line-based splitter below.
const UNSPLITTABLE_TAGS = new Set([
  "CODE", "IMG", "HR", "H1", "H2", "H3", "H4", "H5", "H6",
]);

const HEIGHT_EPS = 0.5; // px — prevents infinite loops on rounding boundaries

function measureNodesHeight(nodes: HTMLElement[], measureEl: HTMLElement): number {
  measureEl.innerHTML = "";
  for (const node of nodes) measureEl.appendChild(node.cloneNode(true));
  return measureEl.getBoundingClientRect().height;
}

function makeFitFn(
  currentPage: HTMLElement[],
  measureEl: HTMLElement,
  contentHeightPx: number,
): (node: HTMLElement) => boolean {
  return (node: HTMLElement) =>
    measureNodesHeight([...currentPage, node], measureEl) <= contentHeightPx - HEIGHT_EPS;
}

// ── Inline (text) splitter ───────────────────────────────────────────────────

function trimLeadingWhitespace(el: HTMLElement): void {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const trimmed = (node.textContent ?? "").replace(/^\s+/, "");
    if (trimmed !== node.textContent) node.textContent = trimmed;
    if (trimmed.length > 0) break;
  }
}

function buildInlineSplitAt(
  el: HTMLElement,
  splitOffset: number,
): [HTMLElement, HTMLElement] | null {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let count = 0;
  let target: Text | null = null;
  let localOffset = 0;

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const len = node.textContent?.length ?? 0;
    if (count + len >= splitOffset) {
      target = node;
      localOffset = splitOffset - count;
      break;
    }
    count += len;
  }

  if (!target) return null;

  const range1 = document.createRange();
  range1.selectNodeContents(el);
  range1.setEnd(target, localOffset);

  const range2 = document.createRange();
  range2.selectNodeContents(el);
  range2.setStart(target, localOffset);

  const first = el.cloneNode(false) as HTMLElement;
  first.appendChild(range1.cloneContents());

  const second = el.cloneNode(false) as HTMLElement;
  second.appendChild(range2.cloneContents());
  trimLeadingWhitespace(second);

  return [first, second];
}

function getWordBoundaryOffsets(text: string): number[] {
  const offsets: number[] = [];
  const re = /\s+/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    if (match.index > 0 && match.index < text.length) offsets.push(match.index);
  }
  return offsets;
}

function splitInlineElement(
  el: HTMLElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean,
): [HTMLElement, HTMLElement] | null {
  const text = el.textContent ?? "";
  if (text.length < 2) return null;

  // First attempt: binary-search for the latest word boundary that fits.
  const offsets = getWordBoundaryOffsets(text);
  if (offsets.length > 0) {
    let lo = 0, hi = offsets.length - 1, bestIdx = -1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const split = buildInlineSplitAt(el, offsets[mid]);
      if (!split) { hi = mid - 1; continue; }
      if (fits(split[0])) { bestIdx = mid; lo = mid + 1; }
      else                { hi = mid - 1; }
    }
    if (bestIdx >= 0) return buildInlineSplitAt(el, offsets[bestIdx]);
    if (!forceSplit) return null;
  }

  // Fallback: character-level binary search (oversized single word, or forced).
  let lo = 1, hi = text.length - 1, best = 0;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const split = buildInlineSplitAt(el, mid);
    if (!split) { hi = mid - 1; continue; }
    if (fits(split[0])) { best = mid; lo = mid + 1; }
    else                { hi = mid - 1; }
  }
  return best > 0 ? buildInlineSplitAt(el, best) : null;
}

// ── List splitter ────────────────────────────────────────────────────────────

function buildListWithItems(listEl: HTMLElement, items: HTMLElement[], startAt?: number): HTMLElement {
  const clone = listEl.cloneNode(false) as HTMLElement;
  // For ordered lists, set the correct start value so numbering continues
  // across page breaks instead of restarting at 1.
  if (listEl.tagName === "OL" && startAt !== undefined && startAt > 1) {
    (clone as HTMLOListElement).start = startAt;
  }
  for (const item of items) clone.appendChild(item.cloneNode(true));
  return clone;
}

function splitListElement(
  listEl: HTMLElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean,
): [HTMLElement, HTMLElement] | null {
  const items = Array.from(listEl.children).filter(
    (c) => (c as HTMLElement).tagName === "LI",
  ) as HTMLElement[];
  if (items.length === 0) return null;

  // For OL, respect an existing start attribute (e.g. already a continuation).
  const existingStart = listEl.tagName === "OL"
    ? ((listEl as HTMLOListElement).start ?? 1)
    : 1;

  let fitCount = 0;
  for (let i = 0; i < items.length; i++) {
    if (fits(buildListWithItems(listEl, items.slice(0, i + 1), existingStart))) fitCount = i + 1;
    else break;
  }

  // When forced (alone on empty page), guarantee at least 1 item moves forward.
  if (fitCount <= 0) {
    if (!forceSplit || items.length < 2) return null;
    fitCount = 1;
  }
  if (fitCount >= items.length) return null;

  return [
    buildListWithItems(listEl, items.slice(0, fitCount), existingStart),
    // Second fragment starts at existingStart + fitCount so numbering is continuous.
    buildListWithItems(listEl, items.slice(fitCount), existingStart + fitCount),
  ];
}

// ── Table splitter ───────────────────────────────────────────────────────────

function buildTableWithRows(tableEl: HTMLTableElement, rows: HTMLTableRowElement[]): HTMLTableElement {
  const clone = tableEl.cloneNode(false) as HTMLTableElement;
  const caption = tableEl.querySelector("caption");
  if (caption) clone.appendChild(caption.cloneNode(true));
  const colgroup = tableEl.querySelector("colgroup");
  if (colgroup) clone.appendChild(colgroup.cloneNode(true));
  if (tableEl.tHead) clone.appendChild(tableEl.tHead.cloneNode(true));
  const tbody = document.createElement("tbody");
  for (const row of rows) tbody.appendChild(row.cloneNode(true));
  clone.appendChild(tbody);
  return clone;
}

function splitTableElement(
  tableEl: HTMLTableElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean,
): [HTMLElement, HTMLElement] | null {
  const body = tableEl.tBodies[0];
  const rows = body
    ? Array.from(body.rows)
    : Array.from(tableEl.rows).filter((r) => r.parentElement?.tagName !== "THEAD");
  if (rows.length === 0) return null;

  let fitCount = 0;
  for (let i = 0; i < rows.length; i++) {
    if (fits(buildTableWithRows(tableEl, rows.slice(0, i + 1)))) fitCount = i + 1;
    else break;
  }

  // When forced (alone on empty page), guarantee at least 1 row moves forward.
  if (fitCount <= 0) {
    if (!forceSplit || rows.length < 2) return null;
    fitCount = 1;
  }
  if (fitCount >= rows.length) return null;

  return [
    buildTableWithRows(tableEl, rows.slice(0, fitCount)),
    buildTableWithRows(tableEl, rows.slice(fitCount)),
  ];
}

// ── PRE splitter ─────────────────────────────────────────────────────────────
//
// Splits a <pre><code>…</code></pre> block by lines, preserving the inner
// <code> wrapper so CSS styling (background, font, colour) stays correct.
// When forced (alone on an empty page), guarantees at least 1 line moves
// forward so the main loop can never stall on an oversized code block.

function buildPreWithLines(preEl: HTMLElement, lines: string[]): HTMLElement {
  const clone = preEl.cloneNode(false) as HTMLElement;
  const codeEl = preEl.querySelector("code");
  if (codeEl) {
    const codeClone = codeEl.cloneNode(false) as HTMLElement;
    codeClone.textContent = lines.join("\n");
    clone.appendChild(codeClone);
  } else {
    clone.textContent = lines.join("\n");
  }
  return clone;
}

function splitPreElement(
  preEl: HTMLElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean,
): [HTMLElement, HTMLElement] | null {
  const lines = (preEl.textContent ?? "").split("\n");
  // Drop the trailing empty string that String.split() produces.
  if (lines.length > 1 && lines[lines.length - 1] === "") lines.pop();
  if (lines.length < 2) return null;

  let fitCount = 0;
  for (let i = 0; i < lines.length; i++) {
    if (fits(buildPreWithLines(preEl, lines.slice(0, i + 1)))) fitCount = i + 1;
    else break;
  }

  if (fitCount <= 0) {
    if (!forceSplit || lines.length < 2) return null;
    fitCount = 1;
  }
  if (fitCount >= lines.length) return null;

  return [
    buildPreWithLines(preEl, lines.slice(0, fitCount)),
    buildPreWithLines(preEl, lines.slice(fitCount)),
  ];
}

// ── Element splitter dispatcher ──────────────────────────────────────────────

function isInlineSplitCandidate(el: HTMLElement): boolean {
  if (!INLINE_SPLIT_TAGS.has(el.tagName)) return false;
  for (const child of Array.from(el.childNodes)) {
    if (child.nodeType === Node.ELEMENT_NODE && BLOCK_TAGS.has((child as HTMLElement).tagName))
      return false;
  }
  return true;
}

function splitElement(
  el: HTMLElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean,
): [HTMLElement, HTMLElement] | null {
  if (UNSPLITTABLE_TAGS.has(el.tagName)) return null;
  if (el.tagName === "PRE")   return splitPreElement(el, fits, forceSplit);
  if (el.tagName === "TABLE") return splitTableElement(el as HTMLTableElement, fits, forceSplit);
  if (el.tagName === "UL" || el.tagName === "OL") return splitListElement(el, fits, forceSplit);
  if (isInlineSplitCandidate(el)) return splitInlineElement(el, fits, forceSplit);
  return null;
}

// ── Main pagination loop ─────────────────────────────────────────────────────

function paginateHTML(
  html: string,
  contentWidthPx: number,
  contentHeightPx: number,
  docCSS: string,
): HTMLElement[][] {
  // Fixed-position sandbox: out of any scroll container, never affects layout.
  const sandbox = document.createElement("div");
  sandbox.style.cssText = [
    "position:fixed", "top:0", "left:-99999px",
    `width:${contentWidthPx}px`,
    "visibility:hidden", "pointer-events:none", "z-index:-1",
  ].join(";");

  const styleEl = document.createElement("style");
  styleEl.textContent = docCSS;
  sandbox.appendChild(styleEl);

  const inner = document.createElement("div");
  inner.className = "mpdf-doc";
  inner.innerHTML = html;
  sandbox.appendChild(inner);

  // Measurement div: same width, always empty before each measurement.
  const measure = document.createElement("div");
  measure.className = "mpdf-doc";
  measure.style.cssText = `position:absolute;top:0;left:0;width:${contentWidthPx}px;visibility:hidden;`;
  sandbox.appendChild(measure);

  document.body.appendChild(sandbox);

  const pages: HTMLElement[][] = [];
  let currentPage: HTMLElement[] = [];
  const children = Array.from(inner.children) as HTMLElement[];
  let idx = 0;

  while (idx < children.length) {
    const child = children[idx];
    const fits = makeFitFn(currentPage, measure, contentHeightPx);

    if (fits(child.cloneNode(true) as HTMLElement)) {
      currentPage.push(child.cloneNode(true) as HTMLElement);
      idx++;
      continue;
    }

    // Element doesn't fit on the current page. Try splitting it.
    const forceSplit = currentPage.length === 0;
    const split = splitElement(child, fits, forceSplit);
    if (split) {
      currentPage.push(split[0]);
      pages.push(currentPage);
      currentPage = [];
      // Replace current child with the remainder for re-processing.
      const remainder = split[1];
      if (remainder.textContent?.trim() || remainder.children.length > 0) {
        children[idx] = remainder;
      } else {
        idx++;
      }
      continue;
    }

    // Can't split. If there's content on this page, flush it and retry the
    // same element on a fresh full-height page.
    if (currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [];
      continue;
    }

    // Element is alone on an empty page and truly unsplittable (e.g. a giant
    // image). Force it onto its own page and advance so we never stall.
    currentPage.push(child.cloneNode(true) as HTMLElement);
    pages.push(currentPage);
    currentPage = [];
    idx++;
  }

  if (currentPage.length > 0) pages.push(currentPage);
  document.body.removeChild(sandbox);
  return pages.length > 0 ? pages : [[]];
}

// ─── Page layout builder ──────────────────────────────────────────────────────
//
// Computes header/footer text for every page. Both the live preview and the
// PDF export consume the same PageLayout objects so they are always in sync.

function buildPageLayouts(allPages: HTMLElement[][], s: PDFExportSettings): PageLayout[] {
  const totalPages = allPages.length;
  return allPages.map((pageNodes, i) => {
    const pageNum  = i + 1;
    const numStr   = `${pageNum} / ${totalPages}`;
    let footerLeft = "", footerRight = "", footerCenter = "";

    if (s.showPageNumbers) {
      if (s.pageNumberPosition === "center") {
        footerCenter = (s.footerText ? s.footerText + " — " : "") + numStr;
      } else if (s.pageNumberPosition === "left") {
        footerLeft  = numStr;
        footerRight = s.footerText ?? "";
      } else {
        footerLeft  = s.footerText ?? "";
        footerRight = numStr;
      }
    } else {
      footerLeft = s.footerText ?? "";
    }

    return { pageNodes, pageNum, totalPages, headerText: s.headerText, footerLeft, footerRight, footerCenter };
  });
}

// ─── Plugin ───────────────────────────────────────────────────────────────────

export default class MarkdownPDFPlugin extends Plugin {
  settings: PDFExportSettings;

  async onload() {
    await this.loadSettings();
    this.registerView(VIEW_TYPE, (leaf) => new PDFExportView(leaf, this));
    this.addRibbonIcon("file-output", "Advanced PDF Export", () => this.activateView());
    this.addCommand({
      id: "open-advanced-pdf-export",
      name: "Open Advanced PDF Export panel",
      callback: () => this.activateView(),
    });
    this.addSettingTab(new PDFExportSettingTab(this.app, this));
  }

  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
  }

  async activateView() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      const right = workspace.getRightLeaf(false);
      if (right) {
        await right.setViewState({ type: VIEW_TYPE, active: true });
        leaf = right;
      }
    }
    if (leaf) workspace.revealLeaf(leaf);
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async saveSettingsAndRender() {
    await this.saveSettings();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      if (leaf.view instanceof PDFExportView) leaf.view.render();
    }
  }

  applyPreset(key: string) {
    const p = PRESETS[key];
    if (!p) return;
    this.settings.preset = key;
    Object.assign(this.settings, p);
  }
}

// ─── View ─────────────────────────────────────────────────────────────────────

class PDFExportView extends ItemView {
  plugin: MarkdownPDFPlugin;
  private editorEl: HTMLTextAreaElement;
  private previewEl: HTMLElement;
  private pageCountEl: HTMLElement;
  private wordCountEl: HTMLElement;
  private sourceLabel: HTMLElement;

  private currentFile: TFile | null = null;
  private renderToken = 0;
  private layoutCache: LayoutCache | null = null;
  private pendingStatePath: string | null = null;

  constructor(leaf: WorkspaceLeaf, plugin: MarkdownPDFPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType()    { return VIEW_TYPE; }
  getDisplayText() { return "Advanced PDF Export"; }
  getIcon()        { return "file-output"; }

  // Obsidian persists the return value of getState() in its workspace file and
  // passes it back via setState() when the panel is reopened. We store the
  // active file path so the panel rehydrates automatically after a restart.
  getState(): Record<string, unknown> {
    return { filePath: this.currentFile?.path ?? null };
  }

  async setState(state: Record<string, unknown>, result: { history: boolean }): Promise<void> {
    if (typeof state?.filePath === "string") this.pendingStatePath = state.filePath;
    return super.setState(state, result);
  }

  async onOpen() {
    const container = this.containerEl.children[1] as HTMLElement;
    container.empty();
    container.style.cssText = "display:flex;flex-direction:column;height:100%;padding:0;overflow:hidden;";
    this.buildUI(container);

    // Load order on open:
    //   1. Active markdown note (instant, covers normal panel open).
    //   2. Saved path from workspace state (covers Obsidian restart where the
    //      markdown leaf isn't active yet when our view initialises).
    //   3. Wait one frame and retry both (layout restore may still be in flight).
    //   4. Wait 400 ms and retry (slow vault / cold start safety net).
    if (!await this.loadCurrentNote()) await this.tryRestoreFromState();

    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.loadCurrentNote()),
    );
  }

  async onClose() {
    this.currentFile      = null;
    this.layoutCache      = null;
    this.pendingStatePath = null;
  }

  // ── UI ──────────────────────────────────────────────────────────────────────

  private buildUI(container: HTMLElement) {
    const s = this.plugin.settings;
    this.buildTopbar(container.createEl("div", { cls: "mpdf-topbar" }), s);

    const main = container.createEl("div", { cls: "mpdf-main" });

    const editorPanel = main.createEl("div", { cls: "mpdf-editor-panel" });

    // ── Source file bar ───────────────────────────────────────────────────────
    // ── Source file bar ───────────────────────────────────────────────────────
    const sourceBar = editorPanel.createEl("div", {
      cls: "mpdf-source-bar",
    });

    const copyBtn = sourceBar.createEl("button", {
      cls: "mpdf-btn mpdf-btn-replace",
      text: "Copy Note", // clearer UX than "Replace"
    });

    copyBtn.title = "Replace editor contents with the current note";
    copyBtn.addEventListener("click", () => this.copyNoteToEditor());

    this.sourceLabel = sourceBar.createEl("span", {
      cls: "mpdf-source-label",
      text: "Click a note to load it",
    });

    this.editorEl = editorPanel.createEl("textarea", { cls: "mpdf-editor" });
    this.editorEl.placeholder =
      "Click \"↓ Replace\" to load the active note into this editor.\n\n" +
      "You can then edit freely — changes here won't affect the original note.\n\n" +
      "Use /// on its own line for a manual page break.\n" +
      "Use --- for a horizontal rule.\n\n" +
      "Markdown tables:\n| Col A | Col B |\n|-------|-------|\n| Cell  | Cell  |";

    const foot = editorPanel.createEl("div", { cls: "mpdf-editor-footer" });
    this.wordCountEl = foot.createEl("span", { text: "0 words" });
    foot.createEl("span", { text: "/// = page break · --- = rule" });

    this.previewEl = main.createEl("div", { cls: "mpdf-preview" });

    // Update word count live as the user types — no render triggered.
    this.editorEl.addEventListener("input", () => {
      const words = this.editorEl.value.trim().split(/\s+/).filter(Boolean).length;
      this.wordCountEl.textContent = `${words} words`;
    });

    // Keyboard shortcut: Ctrl+Enter / Cmd+Enter to trigger a manual refresh.
    this.editorEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.render();
      }
    });
  }

  private buildTopbar(topbar: HTMLElement, s: PDFExportSettings) {
    const makeSelect = (
      label: string,
      opts: Record<string, string>,
      val: string,
      cb: (v: string) => Promise<void>,
    ) => {
      const wrap = topbar.createEl("div", { cls: "mpdf-ctrl" });
      wrap.createEl("span", { cls: "mpdf-ctrl-label", text: label });
      const el = wrap.createEl("select", { cls: "mpdf-select" });
      for (const [v, t] of Object.entries(opts)) {
        const o = el.createEl("option", { text: t, value: v });
        if (v === val) o.selected = true;
      }
      el.addEventListener("change", () => void cb(el.value));
    };

    const presetOpts: Record<string, string> = {};
    Object.entries(PRESETS).forEach(([k, v]) => (presetOpts[k] = v.name));
    makeSelect("Style", presetOpts, s.preset, async (v) => {
      this.plugin.applyPreset(v);
      await this.plugin.saveSettingsAndRender();
    });

    const sizeOpts: Record<string, string> = {};
    Object.keys(PAGE_SIZES).forEach((k) => (sizeOpts[k] = k));
    makeSelect("Size", sizeOpts, s.pageSize, async (v) => {
      this.plugin.settings.pageSize = v;
      await this.plugin.saveSettingsAndRender();
    });

    makeSelect("Orient", { portrait: "Portrait", landscape: "Landscape" }, s.orientation,
      async (v) => {
        this.plugin.settings.orientation = v as "portrait" | "landscape";
        await this.plugin.saveSettingsAndRender();
      },
    );

    const zoomWrap = topbar.createEl("div", { cls: "mpdf-ctrl" });
    zoomWrap.createEl("span", { cls: "mpdf-ctrl-label", text: "Zoom" });
    const zoomLabel = zoomWrap.createEl("span", {
      cls: "mpdf-ctrl-label",
      text: Math.round(s.previewScale * 100) + "%",
    });
    const zoomSlider = zoomWrap.createEl("input");
    zoomSlider.type  = "range";
    zoomSlider.min   = "0.35";
    zoomSlider.max   = "1.0";
    zoomSlider.step  = "0.05";
    zoomSlider.value = String(s.previewScale);
    zoomSlider.style.cssText = "width:64px;accent-color:var(--interactive-accent);";
    zoomSlider.addEventListener("input", async () => {
      const v = parseFloat(zoomSlider.value);
      this.plugin.settings.previewScale = v;
      zoomLabel.textContent = Math.round(v * 100) + "%";
      await this.plugin.saveSettings();
      this.renderPreviewOnly();
    });

    const breakBtn = topbar.createEl("button", { cls: "mpdf-btn", text: "Break" });
    breakBtn.title = "Insert page break (///)";
    breakBtn.addEventListener("click", () => this.insertAtCursor("\n///\n"));

    topbar.createEl("div").style.flex = "1"; // spacer

    this.pageCountEl = topbar.createEl("span", { cls: "mpdf-page-count", text: "— pages" });

    const settingsBtn = topbar.createEl("button", { cls: "mpdf-btn mpdf-btn-icon" });
    settingsBtn.setAttr("aria-label", "Open Advanced PDF Export settings");
    setIcon(settingsBtn, "settings");
    settingsBtn.addEventListener("click", () => {
      const settings = (this.app as any).setting;
      settings?.open?.();
      settings?.openTabById?.("advanced-pdf-export");
    });

    const renderBtn = topbar.createEl("button", { cls: "mpdf-btn", text: "⟳ Render PDF" });
    renderBtn.title = "Render preview from current note (Ctrl+Enter)";
    renderBtn.addEventListener("click", () => this.render());

    const exportBtn = topbar.createEl("button", { cls: "mpdf-btn mpdf-btn-primary", text: "⬇ Export PDF" });
    exportBtn.addEventListener("click", () => void this.exportPDF());
  }

  // ── Note loading ────────────────────────────────────────────────────────────

  private async loadCurrentNote(): Promise<boolean> {
    const mv = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!mv?.file) return false;
    if (mv.file === this.currentFile) return true;
    this.currentFile = mv.file;
    this.sourceLabel.textContent = mv.file.basename;
    this.sourceLabel.title = mv.file.path;
    return true;
  }

  private async tryRestoreFromState(): Promise<void> {
    // Attempt 1: use saved path immediately.
    if (this.pendingStatePath) {
      const loaded = await this.loadFileByPath(this.pendingStatePath);
      this.pendingStatePath = null;
      if (loaded) return;
    }
    // Attempt 2: wait one frame for workspace layout restore to settle.
    await new Promise<void>((res) => requestAnimationFrame(() => res()));
    if (await this.loadCurrentNote()) return;
    if (this.pendingStatePath) {
      const loaded = await this.loadFileByPath(this.pendingStatePath);
      this.pendingStatePath = null;
      if (loaded) return;
    }
    // Attempt 3: 400 ms safety net for slow cold starts.
    await new Promise<void>((res) => setTimeout(res, 400));
    if (!await this.loadCurrentNote() && this.pendingStatePath) {
      await this.loadFileByPath(this.pendingStatePath);
      this.pendingStatePath = null;
    }
  }

  private async loadFileByPath(path: string): Promise<boolean> {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof TFile)) return false;
    this.currentFile = file;
    this.sourceLabel.textContent = file.basename;
    this.sourceLabel.title = file.path;
    return true;
  }

  // Reads the current vault file and copies it into the edit textarea.
  // This is the only way content gets into the editor — the user explicitly
  // triggers it, so their prior edits are never silently overwritten.
  private async copyNoteToEditor(): Promise<void> {
    if (!this.currentFile) {
      new Notice("No note is open. Open a markdown note first.");
      return;
    }
    const content = await this.app.vault.read(this.currentFile);
    this.editorEl.value = content;
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    this.wordCountEl.textContent = `${words} words`;
    this.editorEl.focus();
  }


  private insertAtCursor(text: string) {
    const ta    = this.editorEl;
    const start = ta.selectionStart;
    ta.value = ta.value.slice(0, start) + text + ta.value.slice(start);
    ta.selectionStart = ta.selectionEnd = start + text.length;
    ta.focus();
    // No auto-render — user clicks Refresh when ready.
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  render() {
    const token = ++this.renderToken;
    requestAnimationFrame(() => void this.doRender(token));
  }

  private async doRender(token: number) {
    const s = this.plugin.settings;
    let md = normalizeMarkdown(this.editorEl.value);
    if (s.autoBreakH1) md = md.replace(/\n(# )/g, "\n///\n$1");
    if (s.autoBreakH2) md = md.replace(/\n(## )/g, "\n///\n$1");

    const sections = splitMarkdownSections(md);
    const dims = PAGE_SIZES[s.pageSize] ?? PAGE_SIZES["A4"];
    const pw = s.orientation === "landscape" ? dims.h : dims.w;
    const ph = s.orientation === "landscape" ? dims.w : dims.h;

    const mTop    = mmToPx(s.marginTop);
    const mBottom = mmToPx(s.marginBottom);
    const mLeft   = mmToPx(s.marginLeft);
    const mRight  = mmToPx(s.marginRight);
    const footerH = s.showFooter ? 28 : 0;
    const headerH = s.showHeader && s.headerText ? 20 : 0;
    const contentW = pw - mLeft - mRight;
    const contentH = ph - mTop - mBottom - footerH - headerH;
    const docCSS   = buildDocCSS(s);
    const sourcePath = this.currentFile?.path ?? "pdf-export";

    const sectionHtml = await Promise.all(
      sections.map((sec) => renderMarkdownToHtml(this.app, sec.trim(), sourcePath, this)),
    );

    // Bail if a newer render has been requested while we were awaiting.
    if (token !== this.renderToken) return;

    const allPages: HTMLElement[][] = [];
    for (const html of sectionHtml) {
      allPages.push(...paginateHTML(html, contentW, contentH, docCSS));
    }

    const layouts = buildPageLayouts(allPages, s);
    this.layoutCache = { layouts, pw, ph, mTop, mBottom, mLeft, mRight, footerH, headerH, contentW, contentH, docCSS, fontFamily: s.fontFamily, accentColor: s.accentColor };

    this.drawPreview(this.layoutCache, s.previewScale);
    this.pageCountEl.textContent = `${layouts.length} page${layouts.length !== 1 ? "s" : ""}`;
    this.wordCountEl.textContent = `${this.editorEl.value.trim().split(/\s+/).filter(Boolean).length} words`;
  }

  // Re-draw from the cached layout without re-paginating (zoom-only change).
  private renderPreviewOnly() {
    if (!this.layoutCache) return;
    this.drawPreview(this.layoutCache, this.plugin.settings.previewScale);
  }

  private drawPreview(c: LayoutCache, scale: number) {
    const { layouts, pw, ph, mTop, mLeft, footerH, headerH, contentW, contentH, docCSS, accentColor } = c;
    const s = this.plugin.settings;
    this.previewEl.empty();

    const styleEl = this.previewEl.createEl("style");
    styleEl.textContent = docCSS;

    for (const layout of layouts) {
      const scaledW = Math.round(pw * scale);
      const scaledH = Math.round(ph * scale);

      const wrap = this.previewEl.createEl("div", { cls: "mpdf-page-wrap" });
      wrap.style.cssText = `width:${scaledW}px;height:${scaledH}px;position:relative;flex-shrink:0;`;
      wrap.createEl("div", { cls: "mpdf-page-label", text: `Page ${layout.pageNum} of ${layout.totalPages}` });

      const scaleWrap = wrap.createEl("div", { cls: "mpdf-page-scale" });
      scaleWrap.style.cssText = `width:${scaledW}px;height:${scaledH}px;overflow:hidden;position:relative;`;

      const page = scaleWrap.createEl("div", { cls: "mpdf-page" });
      page.style.cssText = [
        `width:${pw}px`, `height:${ph}px`,
        `transform:scale(${scale})`, "transform-origin:top left",
        "position:absolute", "top:0", "left:0", "background:#fff",
      ].join(";");

      if (s.showHeader && layout.headerText) {
        const hdr = page.createEl("div");
        hdr.textContent = layout.headerText;
        hdr.style.cssText = [
          "position:absolute", `top:${mTop * 0.4}px`, `right:${mLeft}px`,
          "font-size:9px", "color:#999", `font-family:${s.fontFamily}`, "white-space:nowrap",
        ].join(";");
      }

      const contentDiv = page.createEl("div", { cls: "mpdf-doc" });
      contentDiv.style.cssText = [
        "position:absolute", `top:${mTop + headerH}px`, `left:${mLeft}px`,
        `width:${contentW}px`, `height:${contentH}px`, "overflow:hidden",
      ].join(";");
      for (const node of layout.pageNodes) contentDiv.appendChild(node.cloneNode(true));

      if (s.showFooter) {
        const footer = page.createEl("div");
        footer.style.cssText = [
          "position:absolute", "bottom:0", "left:0", "right:0",
          `height:${footerH}px`, "display:flex", "align-items:center",
          `border-top:0.5px solid ${accentColor}33`,
          `padding:0 ${mLeft}px`, "font-size:9px", "color:#aaa", `font-family:${s.fontFamily}`,
        ].join(";");

        if (layout.footerCenter) {
          const span = footer.createEl("span");
          span.style.cssText = "flex:1;text-align:center;";
          span.textContent = layout.footerCenter;
        } else {
          footer.createEl("span").textContent = layout.footerLeft;
          const right = footer.createEl("span");
          right.style.marginLeft = "auto";
          right.textContent = layout.footerRight;
        }
      }
    }
  }

  // ── Export ──────────────────────────────────────────────────────────────────
  //
  // Reuses the same paginated page nodes from the last preview render, so the
  // exported PDF is guaranteed to be pixel-identical to what the user sees.
  // Each page becomes a fixed-size <div> in a standalone HTML document which
  // Electron's printToPDF renders with @page margin: none.

  private async exportPDF() {
    const s = this.plugin.settings;

    // Ensure we have a layout — run a full render if the panel was just opened.
    if (!this.layoutCache) {
      await new Promise<void>((resolve) => {
        const token = ++this.renderToken;
        requestAnimationFrame(() => void this.doRender(token).then(resolve));
      });
    }

    const cache = this.layoutCache;
    if (!cache || cache.layouts.length === 0) {
      new Notice("Nothing to export.");
      return;
    }

    const { layouts, pw, ph, mTop, mLeft, footerH, headerH, contentW, docCSS } = cache;

    const pageHTMLParts = layouts.map((layout) => {
      const contentHTML = layout.pageNodes.map((n) => (n as HTMLElement).outerHTML).join("\n");

      const headerHTML = s.showHeader && layout.headerText
        ? `<div style="position:absolute;top:${mTop * 0.4}px;right:${mLeft}px;font-size:9px;color:#999;font-family:${s.fontFamily};white-space:nowrap;">${escapeHTML(layout.headerText)}</div>`
        : "";

      const footerInnerHTML = layout.footerCenter
        ? `<span style="flex:1;text-align:center;">${escapeHTML(layout.footerCenter)}</span>`
        : `<span>${escapeHTML(layout.footerLeft)}</span><span style="margin-left:auto;">${escapeHTML(layout.footerRight)}</span>`;

      const footerHTML = s.showFooter
        ? `<div style="position:absolute;bottom:0;left:0;right:0;height:${footerH}px;display:flex;align-items:center;border-top:0.5px solid ${cache.accentColor}33;padding:0 ${mLeft}px;font-size:9px;color:#aaa;font-family:${s.fontFamily};">${footerInnerHTML}</div>`
        : "";

      const contentDivHTML = `<div class="mpdf-doc" style="position:absolute;top:${mTop + headerH}px;left:${mLeft}px;width:${contentW}px;">${contentHTML}</div>`;

      return `<div class="mpdf-export-page">${headerHTML}${contentDivHTML}${footerHTML}</div>`;
    });

    const printCSS = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${s.pageSize} ${s.orientation}; margin: 0; }
      html, body { margin: 0; padding: 0; background: #fff; }
      .mpdf-export-page {
        position: relative;
        width: ${pw}px; height: ${ph}px;
        overflow: hidden;
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${docCSS}
    `;

    const fullHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${escapeHTML(this.currentFile?.basename ?? "Export")}</title>
<style>${printCSS}</style>
</head>
<body>
${pageHTMLParts.join("\n")}
</body>
</html>`;

    try {
      const electron = (window as any).require("electron");
      const remote   = electron.remote || electron;
      if (!remote?.dialog) throw new Error("no remote");

      const res: { canceled: boolean; filePath?: string } = await remote.dialog.showSaveDialog({
        title: "Save PDF",
        defaultPath: (this.currentFile?.basename ?? "export") + ".pdf",
        filters: [{ name: "PDF", extensions: ["pdf"] }],
      });
      if (res.canceled || !res.filePath) return;

      const blob = new Blob([fullHTML], { type: "text/html" });
      const url  = URL.createObjectURL(blob);
      const win  = new (remote.BrowserWindow)({ show: false, webPreferences: { nodeIntegration: false } });

      win.loadURL(url);
      win.webContents.once("did-finish-load", () => {
        win.webContents
          .printToPDF({ pageSize: s.pageSize, landscape: s.orientation === "landscape", printBackground: true, margins: { marginType: "none" } })
          .then((data: Buffer) => {
            require("fs").writeFile(res.filePath!, data, (err: Error | null) => {
              if (err) new Notice("Error saving PDF: " + err.message);
              else     new Notice("✓ PDF saved: " + res.filePath);
              win.close();
              URL.revokeObjectURL(url);
            });
          })
          .catch((err: Error) => {
            new Notice("PDF render error: " + err.message);
            win.close();
            URL.revokeObjectURL(url);
          });
      });
    } catch {
      new Notice("Advanced PDF export requires the Obsidian desktop app.");
    }
  }
}

// ─── Settings tab ─────────────────────────────────────────────────────────────

class PDFExportSettingTab extends PluginSettingTab {
  plugin: MarkdownPDFPlugin;

  constructor(app: App, plugin: MarkdownPDFPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    const s = this.plugin.settings;

    containerEl.createEl("h2", { text: "Advanced PDF Export" });

    // ── Style Preset ──────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Style Preset" });
    new Setting(containerEl)
      .setName("Preset")
      .setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.")
      .addDropdown((d) => {
        Object.entries(PRESETS).forEach(([k, v]) => d.addOption(k, v.name));
        d.setValue(s.preset).onChange(async (v) => {
          this.plugin.applyPreset(v);
          await this.plugin.saveSettingsAndRender();
          this.display();
        });
      })
      .addButton((b) =>
        b.setButtonText("Reset Preset")
         .setTooltip("Reset current preset to its default values")
         .onClick(async () => {
           this.plugin.applyPreset(s.preset);
           await this.plugin.saveSettingsAndRender();
           this.display();
         }),
      );

    // ── Page ──────────────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Page" });
    new Setting(containerEl).setName("Page size").addDropdown((d) => {
      Object.keys(PAGE_SIZES).forEach((k) => d.addOption(k, k));
      d.setValue(s.pageSize).onChange(async (v) => {
        s.pageSize = v;
        await this.plugin.saveSettingsAndRender();
      });
    });
    new Setting(containerEl).setName("Orientation").addDropdown((d) =>
      d.addOptions({ portrait: "Portrait", landscape: "Landscape" })
       .setValue(s.orientation)
       .onChange(async (v) => {
         s.orientation = v as "portrait" | "landscape";
         await this.plugin.saveSettingsAndRender();
       }),
    );

    // ── Margins ───────────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Margins (mm)" });
    const marginSetting = (name: string, key: keyof PDFExportSettings) =>
      new Setting(containerEl).setName(name).addText((t) =>
        t.setValue(String(s[key])).onChange(async (v) => {
          (s as any)[key] = parseInt(v) || 0;
          await this.plugin.saveSettingsAndRender();
        }),
      );
    marginSetting("Top",    "marginTop");
    marginSetting("Bottom", "marginBottom");
    marginSetting("Left",   "marginLeft");
    marginSetting("Right",  "marginRight");

    // ── Typography ────────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Typography" });
    new Setting(containerEl).setName("Font family").addDropdown((d) =>
      d.addOptions({
        "Georgia, serif":                          "Georgia (Serif)",
        "'Times New Roman', Times, serif":         "Times New Roman",
        "'Palatino Linotype', Palatino, serif":    "Palatino",
        "Arial, sans-serif":                       "Arial",
        "'Helvetica Neue', Helvetica, sans-serif": "Helvetica",
        "'Trebuchet MS', sans-serif":              "Trebuchet",
        "'Courier New', monospace":                "Courier New",
      }).setValue(s.fontFamily)
       .onChange(async (v) => { s.fontFamily = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl).setName("Font size (px)").addDropdown((d) => {
      ["10","11","12","13","14","15","16"].forEach((v) => d.addOption(v, v + "px"));
      d.setValue(String(s.fontSize)).onChange(async (v) => {
        s.fontSize = parseInt(v);
        await this.plugin.saveSettingsAndRender();
      });
    });
    new Setting(containerEl).setName("Line height").addDropdown((d) =>
      d.addOptions({ "1.4": "Tight (1.4)", "1.6": "Compact (1.6)", "1.75": "Normal (1.75)", "1.85": "Relaxed (1.85)", "2.0": "Double (2.0)" })
       .setValue(String(s.lineHeight))
       .onChange(async (v) => { s.lineHeight = parseFloat(v); await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl).setName("Paragraph spacing").addDropdown((d) =>
      d.addOptions({ "0": "None", "0.3": "Tight (0.3em)", "0.5": "Normal (0.5em)", "0.65": "Relaxed (0.65em)", "1.0": "Wide (1em)" })
       .setValue(String(s.paragraphSpacing))
       .onChange(async (v) => { s.paragraphSpacing = parseFloat(v); await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl)
      .setName("Heading scale")
      .setDesc("Multiplier applied to all heading sizes.")
      .addDropdown((d) =>
        d.addOptions({ "0.8": "Small (0.8×)", "0.9": "Compact (0.9×)", "1.0": "Normal (1.0×)", "1.1": "Large (1.1×)", "1.2": "XLarge (1.2×)" })
         .setValue(String(s.headingScale))
         .onChange(async (v) => { s.headingScale = parseFloat(v); await this.plugin.saveSettingsAndRender(); }),
      );

    // ── Colors ────────────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Colors" });
    const colorSetting = (name: string, key: keyof PDFExportSettings) =>
      new Setting(containerEl).setName(name).addColorPicker((cp) =>
        cp.setValue(String(s[key])).onChange(async (v) => {
          (s as any)[key] = v;
          await this.plugin.saveSettingsAndRender();
        }),
      );
    colorSetting("Accent color",            "accentColor");
    colorSetting("Body text color",         "bodyColor");
    colorSetting("Heading color",           "headingColor");
    colorSetting("Blockquote border",       "blockquoteBorderColor");
    colorSetting("Table header background", "tableHeaderBg");
    colorSetting("Code background",         "codeBackground");

    // ── Heading style ─────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Heading Style" });
    new Setting(containerEl).setName("H1 bottom border").addToggle((t) =>
      t.setValue(s.h1BorderBottom).onChange(async (v) => { s.h1BorderBottom = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl).setName("H2 bottom border").addToggle((t) =>
      t.setValue(s.h2BorderBottom).onChange(async (v) => { s.h2BorderBottom = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl).setName("Center H1").addToggle((t) =>
      t.setValue(s.centerH1).onChange(async (v) => { s.centerH1 = v; await this.plugin.saveSettingsAndRender(); }),
    );

    // ── Tables ────────────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Tables" });
    new Setting(containerEl).setName("Striped rows").addToggle((t) =>
      t.setValue(s.tableStriped).onChange(async (v) => { s.tableStriped = v; await this.plugin.saveSettingsAndRender(); }),
    );

    // ── Header & Footer ───────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Header & Footer" });
    new Setting(containerEl).setName("Show header").addToggle((t) =>
      t.setValue(s.showHeader).onChange(async (v) => { s.showHeader = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl)
      .setName("Header text")
      .setDesc("Appears top-right on every page.")
      .addText((t) => t.setValue(s.headerText).onChange(async (v) => { s.headerText = v; await this.plugin.saveSettingsAndRender(); }));
    new Setting(containerEl).setName("Show footer").addToggle((t) =>
      t.setValue(s.showFooter).onChange(async (v) => { s.showFooter = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl)
      .setName("Footer text")
      .addText((t) => t.setValue(s.footerText).onChange(async (v) => { s.footerText = v; await this.plugin.saveSettingsAndRender(); }));
    new Setting(containerEl).setName("Show page numbers").addToggle((t) =>
      t.setValue(s.showPageNumbers).onChange(async (v) => { s.showPageNumbers = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl).setName("Page number position").addDropdown((d) =>
      d.addOptions({ left: "Left", center: "Center", right: "Right" })
       .setValue(s.pageNumberPosition)
       .onChange(async (v) => { s.pageNumberPosition = v as "left"|"center"|"right"; await this.plugin.saveSettingsAndRender(); }),
    );

    // ── Behaviour ─────────────────────────────────────────────────────────────
    containerEl.createEl("h3", { text: "Behaviour" });
    new Setting(containerEl).setName("Auto page break before H1").addToggle((t) =>
      t.setValue(s.autoBreakH1).onChange(async (v) => { s.autoBreakH1 = v; await this.plugin.saveSettingsAndRender(); }),
    );
    new Setting(containerEl).setName("Auto page break before H2").addToggle((t) =>
      t.setValue(s.autoBreakH2).onChange(async (v) => { s.autoBreakH2 = v; await this.plugin.saveSettingsAndRender(); }),
    );
  }
}
