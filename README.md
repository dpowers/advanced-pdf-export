# Advanced PDF Export — Obsidian Plugin

Export your Obsidian notes as beautifully formatted, pixel-perfect PDFs with a live preview, style presets, manual page breaks, and complete layout control — all from inside Obsidian.

> **Desktop only** — requires the Obsidian desktop app (uses Electron's print pipeline).


## Features

- **Live page preview** — full-resolution A4 / A3 / A5 / Letter / Legal page preview, updated instantly as you type or change any setting
- **Style presets** — six built-in presets (Default, Minimal, Academic, Colorful, Modern, Newspaper), each with a Reset button to restore defaults
- **Manual page breaks** — type `///` on its own line to force a page break anywhere
- **Auto page breaks** — optional settings to insert a page break before every `#` (H1) or `##` (H2) heading
- **Page size & orientation** — A4, A3, A5, Letter, Legal × Portrait / Landscape
- **Full margin control** — top, bottom, left, and right in mm
- **Typography** — font family (Georgia, Times, Palatino, Arial, Helvetica, Trebuchet, Courier New), font size, line height, paragraph spacing, heading scale
- **Colors** — accent, body text, headings, blockquote border, table header background, code background
- **Heading style** — per-heading bottom border toggles, center H1
- **Tables** — optional striped rows
- **Header & footer** — show/hide toggles, custom text, page numbers (X / Y) with left / center / right position control
- **Zoom slider** — scale the preview from 35% to 100% without re-paginating
- **Syncs with active note** — opening any note in Obsidian auto-loads it into the editor
- **Silent export** — pixel-perfect PDF generated via Electron's `printToPDF` with a native save dialog; no browser print dialog


## Screenshots

### Live Preview
Three-panel layout: markdown editor on the left, and the live page preview on the right. The top bar gives instant access to style, page size, orientation, zoom, page breaks, and export.

![Main panel with live preview](screenshots/preview.png)

### Page Breaks
Type `///` on its own line to insert a hard page break. The preview updates instantly — you can see exactly where each new page begins.

![Page break syntax in action](screenshots/usage.png)

### Style Presets
Switch between six built-in presets from the top bar. Each one immediately updates fonts, colors, heading styles, and layout in the live preview.

![Style preset dropdown](screenshots/style1.png)

![Academic preset](screenshots/style2.png)

![Academic preset — alternate view](screenshots/style3.png)

### Settings Panel

![Page & Preset settings](screenshots/settings1.png)

![Typography & Colors settings](screenshots/settings2.png)

![Heading Style, Tables & Header/Footer settings](screenshots/settings3.png)


## Installation

### Manual (GitHub Releases)
1. Go to the [Releases](https://github.com/ShrekBytes/advanced-pdf-export/releases) page.
2. Download `main.js`, `manifest.json`, and `styles.css` from the latest release.
3. Place them in your vault at `.obsidian/plugins/advanced-pdf-export/`.
4. Reload Obsidian and enable the plugin under **Settings → Community Plugins**.


## Usage

**Open the panel** via the `file-output` icon in the left ribbon, or `Ctrl/Cmd + P` → *Open Advanced PDF Export panel*. The panel opens in the right sidebar.

**Load a note** — opening any note in Obsidian auto-loads it into the editor. You can also edit directly in the panel (changes won't sync back to your vault file — by design, for layout-only adjustments).

**Insert a page break** — click the **Break** button in the top bar to insert `///` at the cursor, or type it manually:

```markdown
# Chapter 1

Some content here.

///

# Chapter 2

This starts on a fresh page.
```

`---` on its own line is a horizontal rule (visual separator, same page). `///` is a hard page break (new page).

**Export** — click **⬇ Export PDF** in the top bar to open a native save dialog and generate the PDF.

**Open settings** — click the ⚙ icon in the top bar, or go to **Settings → Advanced PDF Export**.


## Settings Reference

Go to **Settings → Advanced PDF Export** to configure defaults. All settings reflect immediately in the live preview.

### Style Preset
| Setting | Description |
|---|---|
| Preset | Style theme: Default, Minimal, Academic, Colorful, Modern, Newspaper |
| Reset Preset | Restores all typographic and color values for the current preset to its defaults |

### Page
| Setting | Description |
|---|---|
| Page size | A4, A3, A5, Letter, Legal |
| Orientation | Portrait or Landscape |
| Margins (Top / Bottom / Left / Right) | In mm |

### Typography
| Setting | Options |
|---|---|
| Font family | Georgia, Times New Roman, Palatino, Arial, Helvetica, Trebuchet, Courier New |
| Font size | 10 – 16 px |
| Line height | Tight (1.4) → Double (2.0) |
| Paragraph spacing | None → Wide (1em) |
| Heading scale | 0.8× → 1.2× multiplier on all heading sizes |

### Colors
Accent · Body text · Headings · Blockquote border · Table header background · Code background

### Heading Style
| Setting | Description |
|---|---|
| H1 bottom border | Draws a line under every H1 |
| H2 bottom border | Draws a subtle line under every H2 |
| Center H1 | Centers all H1 headings |

### Tables
| Setting | Description |
|---|---|
| Striped rows | Alternating row background on even rows |

### Header & Footer
| Setting | Description |
|---|---|
| Show header | Toggle the header bar on or off |
| Header text | Custom text shown top-right on every page |
| Show footer | Toggle the footer bar on or off |
| Footer text | Custom text shown in the footer |
| Show page numbers | Toggle *Page X / Y* display |
| Page number position | Left, Center, or Right |

### Behaviour
| Setting | Description |
|---|---|
| Auto page break before H1 | Inserts `///` before every `#` heading |
| Auto page break before H2 | Inserts `///` before every `##` heading |


## License

Open source under [GPL-3.0 License](LICENSE)
