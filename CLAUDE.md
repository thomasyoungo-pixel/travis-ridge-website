# Travis Ridge, LLC — Website Build Instructions

Travis Ridge, LLC is a private equity search & advisory firm (four partners), based in the Austin, TX / Hill Country area. The firm sources companies that PE firms have specifically told them they want to buy. Audience is institutional and professional: PE firms, business owners/sellers, and referral sources (lawyers, bankers, wealth advisors) — not consumers.

The single most important constraint on this build: **the site must not look like an AI-generated template.** Every section below exists to prevent that. Read the "Anti-template rules" section before writing any component.

## Brand source of truth

Full spec: `Travis Ridge Brand Assets/Travis Ridge - Brand Guidelines.pdf` (v1.0, 2026). Logo files (SVG preferred) in the same folder. Do not invent colors, fonts, or icon treatments outside what's below — if something isn't covered, ask rather than guess.

**Colors**
- Dark Forest Green `#1A402F` — primary brand color: mark linework, wordmark, headings, primary UI/buttons, primary text on cream.
- Warm Cream `#F3EFDC` — primary background.
- Light Green (hover) `#2E6B4F` — hover/active state for green UI elements only.
- No other brand colors exist. Do not add an accent color (no orange, gold, blue, etc.) to hit a "modern SaaS" look — see anti-template rules.

**Typography**
- Lora (SemiBold 600 for display/headings, Regular 400 for secondary serif use) — all headings, display text, the wordmark.
- Neutral sans-serif — Inter or system-ui — for body copy, UI labels, nav, buttons, forms.
- Never alter wordmark letter-spacing or weight.

**Logo usage**
- Mark: nested topographic contour-line mountain converging to a single peak. Only in `#1A402F` (on cream) or `#F3EFDC` reversed (on green). Never stretched, skewed, rotated, or given a drop shadow.
- Lockup: mark on the left, "TRAVIS" / "RIDGE" stacked two lines to the right, baseline of RIDGE aligned to the mark's bottom ink edge. Never set "TRAVIS RIDGE" on one line. Never use the wordmark alone without the mark in primary placements (header, footer, business documents).
- Clear space on all sides ≥ height of the "T" in TRAVIS.
- Never place the mark over a busy/photographic background without a solid color backing behind it.
- Use `travis-ridge-logo-lockup.svg` in the header on cream, `travis-ridge-logo-lockup-reversed.svg` on any dark green section, favicon files as provided. SVG over PNG wherever the browser supports it.

## Anti-template rules

Two reference screenshots were flagged as examples of the generic "AI-generated startup" look to avoid (a dark idea-scoring SaaS site and a dark luxury-health-clinic site). Both share a recognizable template DNA. Do not reproduce any of the following, even though some individually seem tasteful:

1. **No dark-mode hero with a glow/gradient blob background.** Radial glows behind the hero, especially in navy/black, are the single most common AI-template tell. This brand's primary background is warm cream, not dark. Use dark green (`#1A402F`) only for deliberate section breaks (e.g. a footer or a single contrasting band), never as the default page background, and never with a gradient glow behind it.
2. **No tiny tracked-out all-caps "eyebrow" label above every headline.** ("IDEA. SCORE. BUILD.", "PHYSICIAN-LED OPTIMIZATION MEDICINE.") One or two of these across the whole site is fine if genuinely useful as a section label; do not put one above every heading as a structural tic.
3. **No pill-shaped pulsing/glowing badge announcements** ("FOUNDING PRACTICE PROGRAM · NOW OPEN" with a dot icon). This pattern reads as a SaaS launch-announcement widget, not a professional-services credibility signal.
4. **No orange/gold accent CTA color bolted onto an otherwise dark neutral palette.** Stick to the two brand colors plus the specified hover green. If a CTA needs to stand out, use solid `#1A402F` on cream, or cream on `#1A402F` — not a third accent hue.
5. **No rounded pill buttons with a trailing arrow glyph as the default button style everywhere.** Buttons should look like they belong to a finance/advisory firm — rectangular or lightly rounded (radius ≤ 4px), no arrow-in-circle affectation on every single CTA.
6. **No oversized, vague serif headline over a huge empty right-hand column** ("Have an idea worth building?"). Headlines should be specific to what Travis Ridge does (search, advisory, sourcing mandates) — not abstract inspirational copy that could belong to any startup.
7. **No glossy AI-rendered "luxury interior" stock photography** (chrome reception desks, dramatic accent lighting, empty polished lobbies). If photography is used, it must be real — the partners, Austin/Hill Country landscape, or actual deal-related imagery — never AI-generated or generic stock that looks AI-generated. If no real photography is available yet, prefer typography, the topo-line mark, and simple geometric/map-derived graphics over placeholder stock photos.
8. **No generic centered nav pattern of ALL-CAPS tracked-out links + a single bright pill CTA on the far right** as the unexamined default — it's fine functionally, but typography and color must come from the brand spec above, not a template's default orange/mono treatment.
9. **Avoid excessive letter-spacing/tracking on body or label text as a blanket style.** Use tracking sparingly and only where it earns its place (e.g. a genuine section kicker), not on every small text element.
10. Before shipping any section, ask: "could this exact layout/color/type combination appear on a random YC startup's landing page with the logo swapped?" If yes, revise it to be more specific to Travis Ridge — reference the topo-line mark, the Hill Country geography, the search/advisory mandate language, or actual partner/firm specifics instead of generic SaaS patterns.

Instead, lean into what's distinctive: warm cream paper-like background, deep forest green, a serif (Lora) that reads more like a boutique advisory or law firm than a tech startup, the topographic mark used as a literal recurring motif (e.g. contour lines as subtle section dividers or map-like graphics), and copy that's concrete about what the firm does rather than aspirational SaaS-speak.

## Responsiveness (non-negotiable)

Every page and component must be built and verified at both breakpoints before being considered done — not "responsive in theory" but actually checked:

- Mobile (base styles, ~375–428px width) and desktop (~1280px+) at minimum; a sensible tablet mid-point (~768–1024px) should not visibly break.
- Mobile-first CSS: base styles for mobile, `min-width` media queries to scale up — not the reverse.
- Nav collapses to a proper mobile menu (hamburger or equivalent) below the desktop breakpoint; no horizontal scroll, no overlapping nav items.
- Logo lockup must have a compact/stacked or icon-only fallback for narrow headers — never shrink the full horizontal lockup to the point of illegibility.
- Type scales down proportionally on mobile (no desktop-sized display headlines overflowing a phone viewport).
- Tap targets ≥ 44px on mobile.
- Test/describe layout at both sizes for every new page or major component before marking it complete.

## Content & tone

- Copy should sound like a boutique PE search & advisory firm run by four partners: precise, credentialed, low-hype. Avoid startup-pitch language ("Have an idea worth building?" style) — this is a professional-services firm, not a consumer product.
- Use "Travis Ridge, LLC" (or "Travis Ridge") — never "PE Advisory" or other placeholder names.
- Confirm any specific claims (deal count, AUM, partner bios, track record figures) with Thomas before publishing — do not invent numbers or credentials.

## When brand or content specifics are missing

If a page needs something not covered by the Brand Guidelines or this file (partner bios/headshots, specific deal examples, legal/compliance language, a new color/type need), stop and ask rather than inventing it.
