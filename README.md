# Advanced PDF Export — Obsidian Plugin

Export Obsidian notes as pixel-perfect PDFs with six style presets, manual page breaks, full layout control, and a live preview — all from a full-screen modal panel.

> **Desktop only** — requires the Obsidian desktop app (uses Electron's print pipeline).

![Main panel with live preview](screenshots/preview.png)
<!-- Replace with a screenshot of the open modal showing the editor + preview side-by-side -->


## Features

- **Live preview** — markdown editor on the left, paginated page preview on the right; render with **⟳ Render PDF** or `Ctrl+Enter`
- **Auto-loads active note** — opening from a note's right-click menu or command palette pre-fills the editor (edits are local, non-destructive)
- **Style presets** — six built-in presets: Default, Minimal, Academic, Colorful, Modern, Newspaper
- **Page breaks** — `///` on its own line for a manual break; optionally auto-insert before every H1 or H2
- **Page size & orientation** — A4, A3, A5, Letter, Legal × Portrait / Landscape
- **Full layout control** — margins, font family/size/line height, paragraph spacing, heading scale, colors, heading borders, striped tables
- **Header & footer** — custom text, page numbers (X / Y), position control


## Screenshots

### Panel Overview
![Split-pane modal: editor on the left, live page preview on the right](screenshots/preview.png)
<!-- Replace with a screenshot of the full modal open -->

### Page Breaks
Type `///` on its own line, or click the **Insert Page Break** button in the toolbar

![Page break syntax](screenshots/usage.png)
<!-- Replace with a screenshot showing /// in the editor and the resulting page split in preview -->

### Style Presets
![Preset dropdown in topbar](screenshots/style1.png)
<!-- Replace with a screenshot of the Style dropdown in the topbar -->

![Academic preset](screenshots/style2.png)

![Modern preset](screenshots/style3.png)

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

**Open the panel** — right-click any `.md` file in the file explorer, or use `Ctrl/Cmd + P` → *Advanced PDF Export: Open Panel*. The panel opens as a full-screen modal and auto-loads the target note.

**Edit markdown** — type or paste markdown in the left editor. The editor does not sync changes back to your vault.

**Insert a page break** — type `///` on its own line, or click **Insert Page Break** in the topbar. Use `---` for a horizontal rule.

**Render the preview** — click **⟳ Render PDF** or press `Ctrl+Enter` / `Cmd+Enter`.

**Change style or page settings** — use the **Style**, **Size**, and **Orient** dropdowns in the topbar. Changes re-render automatically.

**Export** — click **⬇ Export PDF** to open a native save dialog and write the PDF to disk.

**Open settings** — click the ⚙ icon in the topbar, or go to **Settings → Advanced PDF Export**.


## Settings Reference

All settings take effect immediately in the live preview.

### Style Preset
| Setting | Description |
|---|---|
| Preset | Style theme: Default, Minimal, Academic, Colorful, Modern, Newspaper |
| Reset Preset | Restores all typographic and color values for the current preset to defaults |

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
| Heading scale | 0.8× → 1.2× multiplier applied to all heading sizes |

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
| Show header | Toggle the header on or off |
| Header text | Custom text shown top-right on every page |
| Show footer | Toggle the footer on or off |
| Footer text | Custom text shown in the footer |
| Show page numbers | Toggle *Page X / Y* display |
| Page number position | Left, Center, or Right |

### Behaviour
| Setting | Description |
|---|---|
| Include file name as title | Prepends the note's filename as an H1 at the top of the PDF |
| Auto page break before H1 | Inserts a page break before every `#` heading |
| Auto page break before H2 | Inserts a page break before every `##` heading |


## License

Open source under [GPL-3.0 License](LICENSE)
