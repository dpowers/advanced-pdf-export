# Advanced PDF Export — Obsidian Plugin

Export Obsidian notes as pixel-perfect PDFs with six style presets, manual page breaks, full layout control, and a live preview — all from the plugin panel.

> **Desktop only** — requires the Obsidian desktop app (uses Electron's print pipeline).

![Main panel with live preview](screenshots/preview.png)


## Features

- **Manual preview rendering** — click **⟳ Render PDF** button or press `Ctrl+Enter` / `Cmd+Enter` to update the preview
- **Copy note to editor** — click **Copy Note** button to load the current note into the editor (changes are local, non-destructive)
- **Style presets** — six built-in presets (Default, Minimal, Academic, Colorful, Modern, Newspaper), each with a Reset button
- **Manual page breaks** — type `///` on its own line to force a page break
- **Auto page breaks** — optional: insert page break before every `#` (H1) or `##` (H2) heading
- **Page size & orientation** — A4, A3, A5, Letter, Legal × Portrait / Landscape
- **Full margin control** — top, bottom, left, right (mm)
- **Typography** — font family, size, line height, paragraph spacing, heading scale
- **Colors** — accent, body text, headings, blockquote border, table header background, code background
- **Heading styles** — per-heading bottom border toggles, center H1
- **Tables** — optional striped rows
- **Header & footer** — custom text, page numbers (X / Y), position control
- **Zoom slider** — scale preview 35%–100% without re-paginating
- **Pixel-perfect export** — generates PDF via Electron's `printToPDF`; exported PDF matches preview exactly


## Screenshots

![Main panel with live preview](screenshots/preview.png)

![Page breaks in action](screenshots/usage.png)

![Style presets](screenshots/style1.png)

![Settings panel](screenshots/settings1.png)


## Installation

### Manual (GitHub Releases)
1. Go to the [Releases](https://github.com/ShrekBytes/advanced-pdf-export/releases) page.
2. Download `main.js`, `manifest.json`, and `styles.css` from the latest release.
3. Place them in your vault at `.obsidian/plugins/advanced-pdf-export/`.
4. Reload Obsidian and enable the plugin under **Settings → Community Plugins**.


## Usage

**Open the panel** — click the `file-output` icon in the left ribbon, or `Ctrl/Cmd + P` → *Open Advanced PDF Export panel*. The panel opens in the right sidebar.

**Load a note** — click the **Copy Note** button to load the active note into the editor. Edits are local to this panel; they don't sync back to your vault (by design, for layout-only adjustments).

**Edit markdown** — type or paste markdown in the editor. Use `///` on its own line for a page break, `---` for a horizontal rule.

**Render the preview** — click **⟳ Render PDF** button or press `Ctrl+Enter` / `Cmd+Enter` to update the live preview with the current editor content.

**Export PDF** — click **⬇ Export PDF** in the top bar. A native save dialog appears; the PDF will match the preview exactly.

**Insert a page break** — click the **Break** button in the top bar to insert `///` at the cursor, or type it manually.

**Open settings** — click the ⚙ icon in the top bar, or go to **Settings → Advanced PDF Export** to configure style presets, fonts, margins, colors, and other defaults.


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
