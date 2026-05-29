# Advanced PDF Export — Obsidian Plugin

Export your Obsidian notes as beautifully formatted PDFs with full control over layout, page size, margins, fonts, and manual page breaks.

---

## Features

- **Live A4/Letter/Legal/A3 preview** — see your exact document before exporting
- **Instant Preview Updates** — settings changes reflect immediately in the live preview
- **Style Presets & Reset** — quickly switch between professional styles (Default, Academic, Modern, etc.) or reset them to defaults
- **Manual page breaks** — type `///` on its own line to force a page break anywhere
- **Auto page break before H1** — optional setting to start every # heading on a new page
- **Full margin control** — set top/bottom/left/right margins in mm
- **Font and size picker** — choose your document font independently of your Obsidian theme
- **Header & footer toggles** — easily show/hide the header and footer bars
- **Custom text + page numbers** — customize the text that appears on every page
- **Zoom control** — scale the preview to fit your screen smoothly
- **Syncs with active note** — opening any note auto-loads it into the editor
- **Compact top bar** — quick page break button and export controls
- **Silent PDF export** — pixel-perfect save dialog generation directly from the Obsidian engine

---

## Installation

### From Obsidian Community Plugins
*(Coming soon once approved in the `obsidian-releases` repository)*
1. Open **Settings** in Obsidian.
2. Go to **Community Plugins** and turn off "Safe Mode" if it's on.
3. Click **Browse** and search for "Advanced PDF Export".
4. Click **Install**, then **Enable**.

### Manual Installation (from GitHub Releases)
1. Go to the [Releases](https://github.com/ShrekBytes/obsidian-advanced-pdf-export/releases) page.
2. Download the `main.js`, `manifest.json`, and `styles.css` from the latest release.
3. Place them inside your vault at `.obsidian/plugins/advanced-pdf-export/`.
4. Reload Obsidian and enable the plugin.

---

## Usage

### Opening the panel
- Click the **file-output icon** in the left ribbon
- Or open the Command Palette (`Ctrl/Cmd + P`) → "Open Advanced PDF Export panel"

### Writing & editing
- The panel has a **markdown editor** on the left
- Open any note — its content loads automatically into the editor
- Use the **Break** button in the top bar for quick page breaks
- Edit directly in the panel (changes won't sync back to your vault file — this is intentional for layout adjustments)

### Page breaks
Add `///` on its own line to insert a hard page break:

```markdown
# Chapter 1

Some content here.

///

# Chapter 2

This starts on a fresh page.
```

### Exporting
Click **Export PDF** in the top bar to choose a save location and generate a pixel-perfect `.pdf` file.

### Settings
Go to **Settings → Advanced PDF Export** to configure defaults:

| Setting | Description |
|---|---|
| Preset | Choose from professional styling themes (Academic, Modern, Newspaper, Colorful) |
| Page size | A4, A3, Letter, Legal |
| Orientation | Portrait or Landscape |
| Margins | Top/Bottom/Left/Right in mm |
| Font family | Georgia, Times, Arial, Helvetica, Courier |
| Font size | 11–16px |
| Show header/footer | Toggles to hide the header and footer bars entirely |
| Header text | Appears top-right on every page |
| Footer text | Appears bottom-left on every page |
| Show page numbers | Toggle page X of Y |
| Auto break before H1 | Insert page break before every `#` heading |

---

## Page Break Syntax

| What you type | What it does |
|---|---|
| `///` (own line) | Hard page break — new page starts here |
| `---` (own line) | Horizontal rule — visual separator, same page |
| `# Heading` + setting on | Optional: auto page break before every H1 |

---

## Roadmap

- [ ] Write changes back to vault file
- [ ] Drag-and-drop page break insertion
- [ ] Image support
- [ ] Table of contents generation
- [ ] Multiple open documents / tabs

---

## License

MIT

