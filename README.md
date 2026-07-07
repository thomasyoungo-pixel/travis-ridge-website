# Travis Ridge, LLC — Website

Marketing site for Travis Ridge, LLC, a private equity search & advisory firm based in the Austin / Texas Hill Country region.

Static site — no build step, no dependencies. Open `index.html` in a browser, or serve the folder with any static file server.

## Structure

- `index.html` — single-page site (header · hero · positioning strip · The Firm · What We Do · Our Approach · Who We Serve · Contact · footer)
- `styles.css` — all styles. Mobile-first; brand colors and type set as CSS variables at the top.
- `main.js` — progressive enhancement only (mobile nav, scroll reveal, footer year, contact form). Site is fully functional without JS.
- `assets/logos/` — brand logo files (SVG + PNG + favicon). The topographic mark is also embedded inline in `index.html` as a themeable `<symbol>`.
- `CLAUDE.md` — brand and build guidelines (source of truth for colors, type, and the anti-template rules).

## Brand

- **Colors:** Dark Forest Green `#1A402F`, Warm Cream `#F3EFDC`, hover green `#2E6B4F`.
- **Type:** Lora (serif — headings and reading copy), Inter (sans — nav, buttons, forms, labels).

## Still placeholder — needs real content before launch

- Partner names, bios, and headshots (no partner section yet).
- Contact email is `partners@travisridge.com` (assumed) — confirm the real address.
- Contact form uses a `mailto:` handoff; wire a real endpoint if server-side handling is wanted.
# travis-ridge-website
# travis-ridge-website
