# Aurelius Genève — Haute Horlogerie Landing Page

A responsive landing page for an ultra-luxury Swiss horology manufacture, designed with an obsidian-black aesthetic, metallic gold accents, and fluid interactions.

---

## Features

- **Hero Section**: Photorealistic mechanical wristwatch showcase with interactive 3D mouse parallax and detail hotspots (Flying Tourbillon, 18k Rose Gold Case, Hand-Stitched Strap).
- **Brand Pillars**: Three core value cards highlighting Precision Engineering, Premium Materials, and Timeless Design.
- **Atelier Spotlight**: Editorial showcase with high-resolution Geneva manufacture craftsmanship imagery.
- **Limited Edition Anthology**: Product showcase cards featuring:
  - *Tourbillon Noire* (Ref. AT-01)
  - *Chronographe Royal Or* (Ref. CR-04)
  - *Squelette Éternel* (Ref. SE-09)
- **Technical Specification Modal**: In-depth modal with movement caliber details, case dimensions, and direct reservation link.
- **Acquisition & Order Flow**:
  - Live allocation availability tracker.
  - Interactive requisition form with **Live Caseback Engraving Preview**.
  - **VIP Provenance Confirmation Modal** with unique registration token.
  - Direct **WhatsApp Concierge Ordering** button with dynamic pre-filled requisition message.
- **Horological Soundscape**: Toggleable 4Hz mechanical escapement ticking sound synthesized via the Web Audio API (no external audio files required).
- **Responsive & Lightweight**: Pure HTML5, Vanilla CSS, and modern JavaScript with zero external frameworks or heavy libraries.

---

## Project Structure

```text
├── index.html              # Main HTML markup
├── css/
│   └── style.css           # Vanilla CSS styles, design tokens & animations
├── js/
│   └── main.js             # Interactions, modals, audio & form logic
├── assets/
│   └── images/             # Studio watch photography assets
│       ├── hero_watch.jpg
│       ├── watch_tourbillon_noire.jpg
│       ├── watch_chronographe_royal.jpg
│       ├── watch_squelette_eternel.jpg
│       └── craftsmanship_atelier.jpg
└── README.md
```

---

## Getting Started

### 1. Direct Browser Opening
Simply double-click or open [index.html](file:///c:/Users/HP/Desktop/New%20folder/index.html) in any modern web browser.

### 2. Local Development Server
To serve locally with live asset handling:

**Using Python:**
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080/`.

**Using Node.js (`npx`):**
```bash
npx serve .
```

---

## Customization

- **Contact & WhatsApp**: Update the phone number and concierge details in [index.html](file:///c:/Users/HP/Desktop/New%20folder/index.html#L320-L380) and [js/main.js](file:///c:/Users/HP/Desktop/New%20folder/js/main.js#L190-L210).
- **Timepieces & Pricing**: Modify specifications and prices directly inside the `watchCatalog` object in [js/main.js](file:///c:/Users/HP/Desktop/New%20folder/js/main.js#L8-L70).
- **Color Tokens**: Tweak the gold accents, borders, and dark gradients inside the `:root` variables in [css/style.css](file:///c:/Users/HP/Desktop/New%20folder/css/style.css#L8-L35).

---

## License

MIT License. Free for personal and commercial portfolio use.
