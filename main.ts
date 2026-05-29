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

// ─── Style Presets ────────────────────────────────────────────────────────────

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
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

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

// ─── Settings ─────────────────────────────────────────────────────────────────

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
  component: Component
): Promise<string> {
  const temp = document.createElement("div");
  await MarkdownRenderer.render(app, markdown, temp, sourcePath, component);
  return temp.innerHTML;
}

// ─── CSS generator (single source of truth) ───────────────────────────────────
//
// Used by BOTH the preview (injected into the live DOM) and the export
// (embedded verbatim in the printed HTML). The selector is always `.mpdf-doc`
// so both pipelines get identical styles.

function buildDocCSS(s: PDFExportSettings): string {
  const hs = s.headingScale;
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
    font-size: ${Math.round(14 * hs)}px;
    font-weight: 600;
    color: ${s.headingColor};
    margin: ${Math.round(16 * hs)}px 0 ${Math.round(8 * hs)}px;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13 * hs)}px; font-weight: 600; color: ${s.headingColor}; margin: 12px 0 6px; }
  .mpdf-doc h5, .mpdf-doc h6 { font-size: ${Math.round(12 * hs)}px; font-weight: 600; color: ${s.headingColor}; margin: 10px 0 5px; }
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

// ─── Unit conversion ──────────────────────────────────────────────────────────

/** mm → px at 96 dpi, matching Electron's print pipeline. */
const mmToPx = (mm: number) => (mm / 25.4) * 96;

// ─── Paginator ────────────────────────────────────────────────────────────────
//
// Appends a hidden sandbox to document.body (NOT to any scrollable container)
// so measurement is unaffected by scroll context or overflow clipping.
// Walks block-level children and fills page buckets by measured height.

const INLINE_SPLIT_TAGS = new Set([
  "P",
  "LI",
  "BLOCKQUOTE",
  "TD",
  "TH",
]);

const BLOCK_TAGS = new Set([
  "P",
  "DIV",
  "SECTION",
  "ARTICLE",
  "ASIDE",
  "NAV",
  "HEADER",
  "FOOTER",
  "UL",
  "OL",
  "LI",
  "TABLE",
  "THEAD",
  "TBODY",
  "TFOOT",
  "TR",
  "TD",
  "TH",
  "PRE",
  "BLOCKQUOTE",
  "HR",
  "IMG",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
]);

const UNSPLITTABLE_TAGS = new Set([
  "PRE",
  "CODE",
  "IMG",
  "HR",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
]);

const HEIGHT_EPS = 0.5;

function isBlockTag(tag: string): boolean {
  return BLOCK_TAGS.has(tag);
}

function isInlineSplitCandidate(el: HTMLElement): boolean {
  if (!INLINE_SPLIT_TAGS.has(el.tagName)) return false;
  for (const child of Array.from(el.childNodes)) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const tag = (child as HTMLElement).tagName;
      if (isBlockTag(tag)) return false;
    }
  }
  return true;
}

function measureNodesHeight(nodes: HTMLElement[], measureEl: HTMLElement): number {
  measureEl.innerHTML = "";
  for (const node of nodes) {
    measureEl.appendChild(node.cloneNode(true));
  }
  return measureEl.getBoundingClientRect().height;
}

function makeFitFn(
  currentPage: HTMLElement[],
  measureEl: HTMLElement,
  contentHeightPx: number
): (node: HTMLElement) => boolean {
  return (node: HTMLElement) => {
    const height = measureNodesHeight([...currentPage, node], measureEl);
    return height <= contentHeightPx - HEIGHT_EPS;
  };
}

function trimLeadingWhitespace(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const raw = node.textContent ?? "";
    const trimmed = raw.replace(/^\s+/, "");
    if (trimmed !== raw) node.textContent = trimmed;
    if (trimmed.length > 0) break;
  }
}

function buildInlineSplitAt(
  el: HTMLElement,
  splitOffset: number
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
  const frag1 = range1.cloneContents();

  const range2 = document.createRange();
  range2.selectNodeContents(el);
  range2.setStart(target, localOffset);
  const frag2 = range2.cloneContents();

  const first = el.cloneNode(false) as HTMLElement;
  const second = el.cloneNode(false) as HTMLElement;
  first.appendChild(frag1);
  second.appendChild(frag2);

  trimLeadingWhitespace(second);

  return [first, second];
}

function getWordBoundaryOffsets(text: string): number[] {
  const offsets: number[] = [];
  const re = /\s+/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    const idx = match.index;
    if (idx > 0 && idx < text.length) offsets.push(idx);
  }
  return offsets;
}

function splitInlineElement(
  el: HTMLElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean
): [HTMLElement, HTMLElement] | null {
  const text = el.textContent ?? "";
  const textLen = text.length;
  if (textLen < 2) return null;

  const offsets = getWordBoundaryOffsets(text);
  if (offsets.length > 0) {
    let low = 0;
    let high = offsets.length - 1;
    let bestIdx = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const split = buildInlineSplitAt(el, offsets[mid]);
      if (!split) {
        high = mid - 1;
        continue;
      }
      if (fits(split[0])) {
        bestIdx = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    if (bestIdx >= 0) return buildInlineSplitAt(el, offsets[bestIdx]);
    if (!forceSplit) return null;
  }

  // Fallback: no word boundary or forced split on an oversized element.
  let low = 1;
  let high = textLen - 1;
  let best = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const split = buildInlineSplitAt(el, mid);
    if (!split) {
      high = mid - 1;
      continue;
    }
    if (fits(split[0])) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (best === 0) return null;
  return buildInlineSplitAt(el, best);
}

function buildListWithItems(listEl: HTMLElement, items: HTMLElement[]): HTMLElement {
  const clone = listEl.cloneNode(false) as HTMLElement;
  for (const item of items) clone.appendChild(item.cloneNode(true));
  return clone;
}

function splitListElement(
  listEl: HTMLElement,
  fits: (node: HTMLElement) => boolean
): [HTMLElement, HTMLElement] | null {
  const items = Array.from(listEl.children).filter(
    (child) => (child as HTMLElement).tagName === "LI"
  ) as HTMLElement[];
  if (items.length === 0) return null;

  let fitCount = 0;
  for (let i = 0; i < items.length; i++) {
    const candidate = buildListWithItems(listEl, items.slice(0, i + 1));
    if (fits(candidate)) {
      fitCount = i + 1;
    } else {
      break;
    }
  }

  if (fitCount <= 0 || fitCount >= items.length) return null;
  const first = buildListWithItems(listEl, items.slice(0, fitCount));
  const second = buildListWithItems(listEl, items.slice(fitCount));
  return [first, second];
}

function buildTableWithRows(tableEl: HTMLTableElement, rows: HTMLTableRowElement[]): HTMLTableElement {
  const clone = tableEl.cloneNode(false) as HTMLTableElement;

  const caption = tableEl.querySelector("caption");
  if (caption) clone.appendChild(caption.cloneNode(true));

  const colgroup = tableEl.querySelector("colgroup");
  if (colgroup) clone.appendChild(colgroup.cloneNode(true));

  const thead = tableEl.tHead;
  if (thead) clone.appendChild(thead.cloneNode(true));

  const tbody = document.createElement("tbody");
  for (const row of rows) tbody.appendChild(row.cloneNode(true));
  clone.appendChild(tbody);

  return clone;
}

function splitTableElement(
  tableEl: HTMLTableElement,
  fits: (node: HTMLElement) => boolean
): [HTMLElement, HTMLElement] | null {
  const body = tableEl.tBodies[0];
  const rows = body
    ? Array.from(body.rows)
    : Array.from(tableEl.rows).filter((row) => row.parentElement?.tagName !== "THEAD");

  if (rows.length === 0) return null;

  let fitCount = 0;
  for (let i = 0; i < rows.length; i++) {
    const candidate = buildTableWithRows(tableEl, rows.slice(0, i + 1));
    if (fits(candidate)) {
      fitCount = i + 1;
    } else {
      break;
    }
  }

  if (fitCount <= 0 || fitCount >= rows.length) return null;
  const first = buildTableWithRows(tableEl, rows.slice(0, fitCount));
  const second = buildTableWithRows(tableEl, rows.slice(fitCount));
  return [first, second];
}

function splitElement(
  el: HTMLElement,
  fits: (node: HTMLElement) => boolean,
  forceSplit: boolean
): [HTMLElement, HTMLElement] | null {
  if (UNSPLITTABLE_TAGS.has(el.tagName)) return null;

  if (el.tagName === "TABLE") {
    return splitTableElement(el as HTMLTableElement, fits);
  }
  if (el.tagName === "UL" || el.tagName === "OL") {
    return splitListElement(el, fits);
  }
  if (isInlineSplitCandidate(el)) {
    return splitInlineElement(el, fits, forceSplit);
  }
  return null;
}

function paginateHTML(
  html: string,
  contentWidthPx: number,
  contentHeightPx: number,
  docCSS: string
): HTMLElement[][] {
  const sandbox = document.createElement("div");
  sandbox.style.cssText = [
    "position:fixed",          // fixed keeps it out of any scroll container
    "top:0",
    "left:-99999px",
    `width:${contentWidthPx}px`,
    "visibility:hidden",
    "pointer-events:none",
    "z-index:-1",
  ].join(";");

  // Inject the same doc CSS so measurements match what will be rendered
  const styleEl = document.createElement("style");
  styleEl.textContent = docCSS;
  sandbox.appendChild(styleEl);

  const inner = document.createElement("div");
  inner.className = "mpdf-doc";
  inner.innerHTML = html;
  sandbox.appendChild(inner);

  const measure = document.createElement("div");
  measure.className = "mpdf-doc";
  measure.style.cssText = [
    "position:absolute",
    "top:0",
    "left:0",
    `width:${contentWidthPx}px`,
    "visibility:hidden",
  ].join(";");
  sandbox.appendChild(measure);

  // Attach to body so the browser lays it out at the correct width immediately
  document.body.appendChild(sandbox);

  const pages: HTMLElement[][] = [];
  let currentPage: HTMLElement[] = [];
  const children = Array.from(inner.children) as HTMLElement[];
  let idx = 0;

  while (idx < children.length) {
    const child = children[idx];
    const childClone = child.cloneNode(true) as HTMLElement;
    const fits = makeFitFn(currentPage, measure, contentHeightPx);

    if (fits(childClone)) {
      currentPage.push(childClone);
      idx += 1;
      continue;
    }

    const forceSplit = currentPage.length === 0;
    const split = splitElement(child, fits, forceSplit);
    if (split) {
      currentPage.push(split[0]);
      pages.push(currentPage);
      currentPage = [];

      const remainder = split[1];
      if (remainder.textContent?.trim() || remainder.children.length > 0) {
        // Re-process the remainder to allow multi-page splitting.
        children[idx] = remainder;
      } else {
        idx += 1;
      }
      continue;
    }

    if (currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [];
      continue;
    }

    currentPage.push(childClone);
    pages.push(currentPage);
    currentPage = [];
    idx += 1;
  }

  if (currentPage.length > 0) pages.push(currentPage);

  document.body.removeChild(sandbox);

  return pages.length > 0 ? pages : [[]];
}

// ─── Page builder (shared between preview and export) ─────────────────────────
//
// Builds the page layout data for a set of paginated sections.
// Returns the raw page node arrays AND pre-built footer/header strings
// so both the DOM preview and the export HTML can reuse identical logic.

interface PageLayout {
  pageNodes: HTMLElement[];
  pageNum: number;
  totalPages: number;
  headerText: string;
  footerLeft: string;
  footerRight: string;
  footerCenter: string;
}

function buildPageLayouts(
  allPages: HTMLElement[][],
  s: PDFExportSettings
): PageLayout[] {
  const totalPages = allPages.length;
  return allPages.map((pageNodes, i) => {
    const pageNum = i + 1;
    const numStr = `${pageNum} / ${totalPages}`;
    let footerLeft = "", footerRight = "", footerCenter = "";

    if (s.showPageNumbers) {
      if (s.pageNumberPosition === "center") {
        footerCenter = (s.footerText ? s.footerText + " — " : "") + numStr;
      } else if (s.pageNumberPosition === "left") {
        footerLeft = numStr;
        footerRight = s.footerText ?? "";
      } else {
        footerLeft = s.footerText ?? "";
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
    this.app.workspace.getLeavesOfType(VIEW_TYPE).forEach((leaf) => {
      if (leaf.view instanceof PDFExportView) {
        (leaf.view as PDFExportView).render();
      }
    });
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
  editorEl: HTMLTextAreaElement;
  previewEl: HTMLElement;
  pageCountEl: HTMLElement;
  wordCountEl: HTMLElement;
  debounceTimer: number = 0;
  currentFile: TFile | null = null;
  renderToken = 0;

  // Cached pagination result — reused verbatim by exportPDF so both
  // preview and PDF are guaranteed to come from the same data.
  lastLayouts: PageLayout[] | null = null;
  lastLayoutSettings: string = "";   // JSON snapshot of settings at last render

  constructor(leaf: WorkspaceLeaf, plugin: MarkdownPDFPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType() { return VIEW_TYPE; }
  getDisplayText() { return "Advanced PDF Export"; }
  getIcon() { return "file-output"; }

  async onOpen() {
    const container = this.containerEl.children[1] as HTMLElement;
    container.empty();
    container.style.cssText = "display:flex;flex-direction:column;height:100%;padding:0;overflow:hidden;";
    this.buildUI(container);
    this.loadCurrentNote();

    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.loadCurrentNote())
    );
    this.registerEvent(
      this.app.vault.on("modify", (f) => {
        if (f === this.currentFile) this.loadCurrentNote();
      })
    );
  }

  // ── UI Builder ──────────────────────────────────────────────────────────────

  buildUI(container: HTMLElement) {
    const s = this.plugin.settings;
    const topbar = container.createEl("div", { cls: "mpdf-topbar" });
    this.buildTopbar(topbar, s);

    const main = container.createEl("div", { cls: "mpdf-main" });

    const editorPanel = main.createEl("div", { cls: "mpdf-editor-panel" });
    this.editorEl = editorPanel.createEl("textarea", { cls: "mpdf-editor" });
    this.editorEl.placeholder =
    "Open any note — it loads automatically.\n\n" +
    "Use /// on its own line for a page break.\n" +
    "Use --- for a horizontal rule.\n\n" +
    "Markdown tables:\n| Col A | Col B |\n|-------|-------|\n| Cell  | Cell  |";

    const foot = editorPanel.createEl("div", { cls: "mpdf-editor-footer" });
    this.wordCountEl = foot.createEl("span", { text: "0 words" });
    foot.createEl("span", { text: "/// = page break · --- = rule" });

    this.previewEl = main.createEl("div", { cls: "mpdf-preview" });

    this.editorEl.addEventListener("input", () => {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = window.setTimeout(() => this.render(), 350);
    });
  }

  buildTopbar(topbar: HTMLElement, s: PDFExportSettings) {
    const makeSelect = (
      label: string,
      opts: Record<string, string>,
      val: string,
      cb: (v: string) => void
    ) => {
      const wrap = topbar.createEl("div", { cls: "mpdf-ctrl" });
      wrap.createEl("span", { cls: "mpdf-ctrl-label", text: label });
      const el = wrap.createEl("select", { cls: "mpdf-select" });
      for (const [v, t] of Object.entries(opts)) {
        const o = el.createEl("option", { text: t, value: v });
        if (v === val) o.selected = true;
      }
      el.addEventListener("change", () => cb(el.value));
      return el;
    };

    const presetOpts: Record<string, string> = {};
    Object.entries(PRESETS).forEach(([k, v]) => (presetOpts[k] = v.name));
    makeSelect("Style", presetOpts, s.preset, async (v) => {
      this.plugin.applyPreset(v);
      await this.plugin.saveSettingsAndRender();
      this.render();
    });

    const sizeOpts: Record<string, string> = {};
    Object.keys(PAGE_SIZES).forEach((k) => (sizeOpts[k] = k));
    makeSelect("Size", sizeOpts, s.pageSize, async (v) => {
      this.plugin.settings.pageSize = v;
      await this.plugin.saveSettingsAndRender();
      this.render();
    });

    makeSelect(
      "Orient",
      { portrait: "Portrait", landscape: "Landscape" },
      s.orientation,
      async (v) => {
        this.plugin.settings.orientation = v as "portrait" | "landscape";
        await this.plugin.saveSettingsAndRender();
        this.render();
      }
    );

    const zoomWrap = topbar.createEl("div", { cls: "mpdf-ctrl" });
    zoomWrap.createEl("span", { cls: "mpdf-ctrl-label", text: "Zoom" });
    const zoomLabel = zoomWrap.createEl("span", {
      cls: "mpdf-ctrl-label",
      text: Math.round(s.previewScale * 100) + "%",
    });
    const zoomSlider = zoomWrap.createEl("input");
    zoomSlider.type = "range";
    zoomSlider.min = "0.35";
    zoomSlider.max = "1.0";
    zoomSlider.step = "0.05";
    zoomSlider.value = String(s.previewScale);
    zoomSlider.style.cssText = "width:64px;accent-color:var(--interactive-accent);";
    zoomSlider.addEventListener("input", async () => {
      this.plugin.settings.previewScale = parseFloat(zoomSlider.value);
      zoomLabel.textContent = Math.round(parseFloat(zoomSlider.value) * 100) + "%";
      await this.plugin.saveSettings();
      this.renderPreviewOnly();  // zoom only re-draws, no re-pagination needed
    });

    const breakBtn = topbar.createEl("button", { cls: "mpdf-btn", text: "Break" });
    breakBtn.title = "Insert page break (///)";
    breakBtn.addEventListener("click", () => this.insertAtCursor("\n///\n"));

    const sp = topbar.createEl("div");
    sp.style.flex = "1";

    this.pageCountEl = topbar.createEl("span", { cls: "mpdf-page-count", text: "— pages" });

    const settingsBtn = topbar.createEl("button", { cls: "mpdf-btn mpdf-btn-icon" });
    settingsBtn.setAttr("aria-label", "Open Advanced PDF Export settings");
    setIcon(settingsBtn, "settings");
    settingsBtn.addEventListener("click", () => {
      const settings = (this.app as any).setting;
      settings?.open?.();
      settings?.openTabById?.("advanced-pdf-export");
    });

    const exportBtn = topbar.createEl("button", {
      cls: "mpdf-btn mpdf-btn-primary",
      text: "⬇ Export PDF",
    });
    exportBtn.addEventListener("click", () => void this.exportPDF());
  }

  // ── Note loading ───────────────────────────────────────────────────────────

  async loadCurrentNote() {
    const mv = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (mv?.file) {
      this.currentFile = mv.file;
      this.editorEl.value = await this.app.vault.read(mv.file);
      this.render();
    }
  }

  insertAtCursor(text: string) {
    const ta = this.editorEl;
    const start = ta.selectionStart;
    ta.value = ta.value.slice(0, start) + text + ta.value.slice(start);
    ta.selectionStart = ta.selectionEnd = start + text.length;
    ta.focus();
    this.render();
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  render() {
    const token = ++this.renderToken;
    requestAnimationFrame(() => void this.doRender(token));
  }

  async doRender(token: number) {
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

    const FOOTER_H = s.showFooter ? 28 : 0;
    const HEADER_H = s.showHeader && s.headerText ? 20 : 0;

    const contentW = pw - mLeft - mRight;
    const contentH = ph - mTop - mBottom - FOOTER_H - HEADER_H;

    const docCSS = buildDocCSS(s);
    const sourcePath = this.currentFile?.path ?? "pdf-export";

    const sectionHtml = await Promise.all(
      sections.map((sec) =>
      renderMarkdownToHtml(this.app, sec.trim(), sourcePath, this)
      )
    );

    if (token !== this.renderToken) return;

    // ── Pagination ─────────────────────────────────────────────────────────
    // Sandbox attaches to document.body — no scroll context interference.
    const allPages: HTMLElement[][] = [];
    for (const html of sectionHtml) {
      const subPages = paginateHTML(html, contentW, contentH, docCSS);
      allPages.push(...subPages);
    }

    // Cache layouts so exportPDF can reuse them directly
    const layouts = buildPageLayouts(allPages, s);
    this.lastLayouts = layouts;
    this.lastLayoutSettings = JSON.stringify({ pw, ph, mTop, mBottom, mLeft, mRight, FOOTER_H, HEADER_H, contentW, contentH, docCSS, fontFamily: s.fontFamily, accentColor: s.accentColor });

    this.drawPreview(layouts, pw, ph, mTop, mBottom, mLeft, mRight, FOOTER_H, HEADER_H, contentW, contentH, s.previewScale, docCSS, s);

    this.pageCountEl.textContent = `${layouts.length} page${layouts.length !== 1 ? "s" : ""}`;
    const words = this.editorEl.value.trim().split(/\s+/).filter(Boolean).length;
    this.wordCountEl.textContent = `${words} words`;
  }

  // Re-draw preview from cached layouts (zoom change — no re-pagination)
  renderPreviewOnly() {
    if (!this.lastLayouts) return;
    const s = this.plugin.settings;
    const parsed = JSON.parse(this.lastLayoutSettings);
    this.drawPreview(
      this.lastLayouts,
      parsed.pw, parsed.ph,
      parsed.mTop, parsed.mBottom, parsed.mLeft, parsed.mRight,
      parsed.FOOTER_H, parsed.HEADER_H,
      parsed.contentW, parsed.contentH,
      s.previewScale,
      parsed.docCSS,
      s
    );
  }

  drawPreview(
    layouts: PageLayout[],
    pw: number, ph: number,
    mTop: number, mBottom: number, mLeft: number, mRight: number,
    FOOTER_H: number, HEADER_H: number,
    contentW: number, contentH: number,
    scale: number,
    docCSS: string,
    s: PDFExportSettings
  ) {
    this.previewEl.empty();

    const styleEl = this.previewEl.createEl("style");
    styleEl.textContent = docCSS;

    for (const layout of layouts) {
      const scaledW = Math.round(pw * scale);
      const scaledH = Math.round(ph * scale);

      const wrap = this.previewEl.createEl("div", { cls: "mpdf-page-wrap" });
      wrap.style.cssText = `width:${scaledW}px;height:${scaledH}px;position:relative;flex-shrink:0;`;

      wrap.createEl("div", {
        cls: "mpdf-page-label",
        text: `Page ${layout.pageNum} of ${layout.totalPages}`,
      });

      // Clips the full-res page to its scaled visual footprint
      const scaleWrap = wrap.createEl("div", { cls: "mpdf-page-scale" });
      scaleWrap.style.cssText = `width:${scaledW}px;height:${scaledH}px;overflow:hidden;position:relative;`;

      // Full-resolution white page, scaled down via CSS transform
      const page = scaleWrap.createEl("div", { cls: "mpdf-page" });
      page.style.cssText = [
        `width:${pw}px`,
        `height:${ph}px`,
        `transform:scale(${scale})`,
        "transform-origin:top left",
        "position:absolute",
        "top:0",
        "left:0",
        "background:#fff",
      ].join(";");

      // Header
      if (s.showHeader && layout.headerText) {
        const hdr = page.createEl("div");
        hdr.textContent = layout.headerText;
        hdr.style.cssText = [
          "position:absolute",
          `top:${mTop * 0.4}px`,
          `right:${mRight}px`,
          "font-size:9px",
          "color:#999",
          `font-family:${s.fontFamily}`,
          "white-space:nowrap",
        ].join(";");
      }

      // Content — explicit width + height, NO right:/bottom: so clipping is
      // correct regardless of zoom level or parent overflow mode.
      const contentDiv = page.createEl("div", { cls: "mpdf-doc" });
      contentDiv.style.cssText = [
        "position:absolute",
        `top:${mTop + HEADER_H}px`,
        `left:${mLeft}px`,
        `width:${contentW}px`,
        `height:${contentH}px`,
        "overflow:hidden",
      ].join(";");

      for (const node of layout.pageNodes) {
        contentDiv.appendChild(node.cloneNode(true));
      }

      // Footer
      if (s.showFooter) {
        const footer = page.createEl("div");
        footer.style.cssText = [
          "position:absolute",
          `bottom:0`,
          "left:0",
          "right:0",
          `height:${FOOTER_H}px`,
          "display:flex",
          "align-items:center",
          `border-top:0.5px solid ${s.accentColor}33`,
          `padding:0 ${mLeft}px`,
          "font-size:9px",
          "color:#aaa",
          `font-family:${s.fontFamily}`,
        ].join(";");

        if (layout.footerCenter) {
          const span = footer.createEl("span");
          span.style.cssText = "flex:1;text-align:center;";
          span.textContent = layout.footerCenter;
        } else {
          const left = footer.createEl("span");
          left.textContent = layout.footerLeft;
          const right = footer.createEl("span");
          right.style.marginLeft = "auto";
          right.textContent = layout.footerRight;
        }
      }
    }
  }

  // ── Export ──────────────────────────────────────────────────────────────────
  //
  // Reuses the SAME paginated page nodes that were built during the last
  // preview render. This guarantees the exported PDF is pixel-identical to
  // what the preview shows.
  //
  // We serialize each page as a fixed-size <div> with the same absolute
  // positioning the preview uses, then use @page margins: none and let our
  // own layout control every pixel. This avoids any discrepancy with the
  // browser's CSS page-break engine.

  async exportPDF() {
    const s = this.plugin.settings;

    // If there's no cached layout (panel just opened), run a full render first
    if (!this.lastLayouts) {
      await new Promise<void>((resolve) => {
        const token = ++this.renderToken;
        requestAnimationFrame(() => void this.doRender(token).then(resolve));
      });
    }

    const layouts = this.lastLayouts;
    if (!layouts || layouts.length === 0) {
      new Notice("Nothing to export.");
      return;
    }

    const parsed = JSON.parse(this.lastLayoutSettings);
    const { pw, ph, mTop, mBottom, mLeft, mRight, FOOTER_H, HEADER_H, contentW, contentH, docCSS } = parsed;

    const mm = (v: number) => `${v}mm`;

    // Build one <div class="mpdf-page"> per page, sized in actual px.
    // Each page is in its own page-break wrapper.
    const pageHTMLParts = layouts.map((layout) => {
      // Serialize content nodes to HTML
      const contentHTML = layout.pageNodes
      .map((n) => (n as HTMLElement).outerHTML)
      .join("\n");

      const headerHTML = s.showHeader && layout.headerText
      ? `<div style="position:absolute;top:${mTop * 0.4}px;right:${mRight}px;font-size:9px;color:#999;font-family:${s.fontFamily};white-space:nowrap;">${escapeHTML(layout.headerText)}</div>`
      : "";

      let footerInnerHTML = "";
      if (layout.footerCenter) {
        footerInnerHTML = `<span style="flex:1;text-align:center;">${escapeHTML(layout.footerCenter)}</span>`;
      } else {
        footerInnerHTML =
        `<span>${escapeHTML(layout.footerLeft)}</span>` +
        `<span style="margin-left:auto;">${escapeHTML(layout.footerRight)}</span>`;
      }

      const footerHTML = s.showFooter ? `<div style="position:absolute;bottom:0;left:0;right:0;height:${FOOTER_H}px;display:flex;align-items:center;border-top:0.5px solid ${s.accentColor}33;padding:0 ${mLeft}px;font-size:9px;color:#aaa;font-family:${s.fontFamily};">${footerInnerHTML}</div>` : "";

      const contentDivHTML = `<div class="mpdf-doc" style="position:absolute;top:${mTop + HEADER_H}px;left:${mLeft}px;width:${contentW}px;">${contentHTML}</div>`;

      return `<div class="mpdf-export-page">${headerHTML}${contentDivHTML}${footerHTML}</div>`;
    });

    const printCSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* One printed page = one @page. We control all layout ourselves. */
    @page {
      size: ${s.pageSize} ${s.orientation};
      margin: 0;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }

    /* Each .mpdf-export-page maps to exactly one printed page */
    .mpdf-export-page {
      position: relative;
      width: ${pw}px;
      height: ${ph}px;
      overflow: hidden;
      page-break-after: always;
      break-after: page;
    }
    .mpdf-export-page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }

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
      const remote = electron.remote || electron;
      if (!remote?.dialog) throw new Error("no remote");

      const res: { canceled: boolean; filePath?: string } =
      await remote.dialog.showSaveDialog({
        title: "Save PDF",
        defaultPath: (this.currentFile?.basename ?? "export") + ".pdf",
          filters: [{ name: "PDF", extensions: ["pdf"] }],
      });

      if (res.canceled || !res.filePath) return;

      const blob = new Blob([fullHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const BW = remote.BrowserWindow;
      const win = new BW({ show: false, webPreferences: { nodeIntegration: false } });

      win.loadURL(url);
      win.webContents.once("did-finish-load", () => {
        win.webContents
        .printToPDF({
          pageSize: s.pageSize,
          landscape: s.orientation === "landscape",
          printBackground: true,
          margins: { marginType: "none" },
        })
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

  async onClose() { /* nothing */ }
}

// ─── Utility ──────────────────────────────────────────────────────────────────

function escapeHTML(s: string): string {
  return s
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");
}

// ─── Settings Tab ──────────────────────────────────────────────────────────────

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

    containerEl.createEl("h3", { text: "Style Preset" });
    new Setting(containerEl)
    .setName("Preset")
    .setDesc("Pick a preset to configure the overall document style. You can fine-tune any setting below.")
    .addDropdown((d) => {
      Object.entries(PRESETS).forEach(([k, v]) => d.addOption(k, v.name));
      d.setValue(s.preset).onChange(async (v) => {
        this.plugin.applyPreset(v);
        await this.plugin.saveSettingsAndRender();
        this.display();
      });
    })
    .addButton((b) => {
      b.setButtonText("Reset Preset")
       .setTooltip("Reset current preset to its default values")
       .onClick(async () => {
         this.plugin.applyPreset(s.preset);
         await this.plugin.saveSettingsAndRender();
         this.display();
       });
    });

    containerEl.createEl("h3", { text: "Page" });
    new Setting(containerEl).setName("Page size").addDropdown((d) => {
      Object.keys(PAGE_SIZES).forEach((k) => d.addOption(k, k));
      d.setValue(s.pageSize).onChange(async (v) => { s.pageSize = v; await this.plugin.saveSettingsAndRender(); });
    });
    new Setting(containerEl).setName("Orientation").addDropdown((d) =>
    d.addOptions({ portrait: "Portrait", landscape: "Landscape" })
    .setValue(s.orientation)
    .onChange(async (v) => { s.orientation = v as "portrait" | "landscape"; await this.plugin.saveSettingsAndRender(); })
    );

    containerEl.createEl("h3", { text: "Margins (mm)" });
    const marginSetting = (name: string, key: keyof PDFExportSettings) =>
    new Setting(containerEl).setName(name).addText((t) =>
    t.setValue(String(s[key])).onChange(async (v) => {
      (s as any)[key] = parseInt(v) || 0;
      await this.plugin.saveSettingsAndRender();
    })
    );
    marginSetting("Top",    "marginTop");
    marginSetting("Bottom", "marginBottom");
    marginSetting("Left",   "marginLeft");
    marginSetting("Right",  "marginRight");

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
    .onChange(async (v) => { s.fontFamily = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Font size (px)").addDropdown((d) => {
      ["10","11","12","13","14","15","16"].forEach((v) => d.addOption(v, v + "px"));
      d.setValue(String(s.fontSize)).onChange(async (v) => { s.fontSize = parseInt(v); await this.plugin.saveSettingsAndRender(); });
    });
    new Setting(containerEl).setName("Line height").addDropdown((d) =>
    d.addOptions({ "1.4": "Tight (1.4)", "1.6": "Compact (1.6)", "1.75": "Normal (1.75)", "1.85": "Relaxed (1.85)", "2.0": "Double (2.0)" })
    .setValue(String(s.lineHeight))
    .onChange(async (v) => { s.lineHeight = parseFloat(v); await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Paragraph spacing").addDropdown((d) =>
    d.addOptions({ "0": "None", "0.3": "Tight (0.3em)", "0.5": "Normal (0.5em)", "0.65": "Relaxed (0.65em)", "1.0": "Wide (1em)" })
    .setValue(String(s.paragraphSpacing))
    .onChange(async (v) => { s.paragraphSpacing = parseFloat(v); await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown((d) =>
    d.addOptions({ "0.8": "Small (0.8×)", "0.9": "Compact (0.9×)", "1.0": "Normal (1.0×)", "1.1": "Large (1.1×)", "1.2": "XLarge (1.2×)" })
    .setValue(String(s.headingScale))
    .onChange(async (v) => { s.headingScale = parseFloat(v); await this.plugin.saveSettingsAndRender(); })
    );

    containerEl.createEl("h3", { text: "Colors" });
    const colorSetting = (name: string, key: keyof PDFExportSettings) =>
    new Setting(containerEl).setName(name).addColorPicker((cp) =>
    cp.setValue(String(s[key])).onChange(async (v) => { (s as any)[key] = v; await this.plugin.saveSettingsAndRender(); })
    );
    colorSetting("Accent color",            "accentColor");
    colorSetting("Body text color",         "bodyColor");
    colorSetting("Heading color",           "headingColor");
    colorSetting("Blockquote border",       "blockquoteBorderColor");
    colorSetting("Table header background", "tableHeaderBg");
    colorSetting("Code background",         "codeBackground");

    containerEl.createEl("h3", { text: "Heading Style" });
    new Setting(containerEl).setName("H1 bottom border").addToggle((t) =>
    t.setValue(s.h1BorderBottom).onChange(async (v) => { s.h1BorderBottom = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("H2 bottom border").addToggle((t) =>
    t.setValue(s.h2BorderBottom).onChange(async (v) => { s.h2BorderBottom = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Center H1").addToggle((t) =>
    t.setValue(s.centerH1).onChange(async (v) => { s.centerH1 = v; await this.plugin.saveSettingsAndRender(); })
    );

    containerEl.createEl("h3", { text: "Tables" });
    new Setting(containerEl).setName("Striped rows").addToggle((t) =>
    t.setValue(s.tableStriped).onChange(async (v) => { s.tableStriped = v; await this.plugin.saveSettingsAndRender(); })
    );

    containerEl.createEl("h3", { text: "Header & Footer" });
    new Setting(containerEl).setName("Show header").addToggle((t) =>
      t.setValue(s.showHeader).onChange(async (v) => { s.showHeader = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Header text").setDesc("Appears top-right on every page.")
    .addText((t) => t.setValue(s.headerText).onChange(async (v) => { s.headerText = v; await this.plugin.saveSettingsAndRender(); }));
    new Setting(containerEl).setName("Show footer").addToggle((t) =>
      t.setValue(s.showFooter).onChange(async (v) => { s.showFooter = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Footer text")
    .addText((t) => t.setValue(s.footerText).onChange(async (v) => { s.footerText = v; await this.plugin.saveSettingsAndRender(); }));
    new Setting(containerEl).setName("Show page numbers").addToggle((t) =>
    t.setValue(s.showPageNumbers).onChange(async (v) => { s.showPageNumbers = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Page number position").addDropdown((d) =>
    d.addOptions({ left: "Left", center: "Center", right: "Right" })
    .setValue(s.pageNumberPosition)
    .onChange(async (v) => { s.pageNumberPosition = v as "left"|"center"|"right"; await this.plugin.saveSettingsAndRender(); })
    );

    containerEl.createEl("h3", { text: "Behaviour" });
    new Setting(containerEl).setName("Auto page break before H1").addToggle((t) =>
    t.setValue(s.autoBreakH1).onChange(async (v) => { s.autoBreakH1 = v; await this.plugin.saveSettingsAndRender(); })
    );
    new Setting(containerEl).setName("Auto page break before H2").addToggle((t) =>
    t.setValue(s.autoBreakH2).onChange(async (v) => { s.autoBreakH2 = v; await this.plugin.saveSettingsAndRender(); })
    );
  }
}

