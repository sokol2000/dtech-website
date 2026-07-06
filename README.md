# D-Tech Studios — Sito web

Sito one-page per **D-Tech Studios**, agenzia di digital marketing a Terni.
Direzione creativa: _"Cinematic dark, motion-first"_ — tema nero cinema, accento
arancione del brand kit ufficiale (`#ff5100`), animazioni allo scroll e headline
che si compongono parola per parola.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (tema custom in `tailwind.config.js`)
- **Framer Motion** per le animazioni
- Font: **Poppins** (sostituto free di _Codec Pro_, il font del brand)

## Comandi

```bash
npm install      # installa le dipendenze
npm run dev      # server di sviluppo su http://localhost:5173
npm run build    # build di produzione in /dist
npm run preview  # anteprima della build
```

## Struttura

```
src/
├── App.jsx              # composizione delle sezioni
├── content.js           # TUTTI i testi/contatti/dati (unico punto da editare)
├── index.css            # base Tailwind + utility (grana, glow, gradienti)
└── components/
    ├── motion.jsx        # primitive: Reveal, WordReveal, Counter, MagneticButton, Parallax
    ├── Logo.jsx          # logo ufficiale ricostruito come SVG (currentColor)
    ├── Icons.jsx         # set icone line-art
    ├── Nav.jsx           # navigazione sticky + menu mobile
    ├── Hero.jsx          # sezione di apertura
    ├── Marquee.jsx       # fascia scorrevole servizi
    ├── ChiSiamo.jsx / Stats.jsx / Servizi.jsx / Metodo.jsx
    ├── Team.jsx / CasiStudio.jsx / Contatti.jsx / Footer.jsx
    └── FloatingWhatsApp.jsx
```

## Personalizzazione rapida

- **Testi, servizi, contatti, casi studio** → `src/content.js`
- **Colori e font** → `tailwind.config.js`
- **Font brand**: quando si ha la licenza di _Codec Pro_, aggiungere il `@font-face`
  in `src/index.css`; è già primo nella `fontFamily` (fallback su Poppins).

## Video dei casi studio

Attualmente sono **placeholder** (frame verticale + play). Per collegarli si
consiglia un hosting esterno (YouTube/Vimeo/CDN) per non appesantire il repo,
aggiornando il campo `video` in `src/content.js`.

## Deploy

Pubblicato automaticamente su **GitHub Pages** ad ogni push su `main` tramite
GitHub Actions (`.github/workflows/deploy.yml`). `base: './'` in `vite.config.js`
rende i path relativi, così la build funziona sotto la sottocartella di Pages.

🔗 **https://sokol2000.github.io/dtech-website/**
