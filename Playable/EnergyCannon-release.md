# Energy Cannon demo · V1.0.0 · 2026-11-22

- Canonical URL: https://toooughv.github.io/PawGames/Playable/EnergyCannon/
- Source: playcanvas_frame / `02_energy_cannon` / `5b8a04f`.
- Build: `npm run build`; no platform SDK. 618 runtime files, about 14 MB in `dist`.
- Entry: `assets/index-CwzuUNMd.js`, SHA-256 `9c5288df509c6ad95ca839739e0ecaecd30e7bdb5885507a4d8b805dc354282b`; `index.html` SHA-256 `aba8008f09d90608284c941a9856d4b536a1b81b46bfb7007fc1038e85c84104`.
- Stylesheet: `assets/boot-DjP3D4zy.css`, SHA-256 `f0d18f91a02f959826c81fc021ef016c58572d45205600ca8a32a7a2bbae515b`.
- Fonts: `assets/ui/energy-v1/pixel/ArkPixel12-latin.woff2` (SHA-256 `af13311b62fb8c4cb79240f4b8a15df4e727979b249e4208a03c0b8c7b4f7e6f`) and `ArkPixel12-cjk.woff2` (SHA-256 `1c19a6df947e6adb85b50cb2d212b34cf52d3b80dfbdad332e3331d77864b29b`).
- Previous hashed bundles remain in the folder for cached clients; the legacy full font file is no longer referenced by the new CSS or HTML.
- Saves and the PokiDemo redirects are unchanged.

## What changed versus the previous live build (`d540f63`)

- Startup now gates on title/menu and flight-deck art only. The 101-sprite module atlas, later enemy art, combat effects, shop and rewards load in follow-up phases. The opening deck uses four individual module images, so the first battle is complete without the atlas.
- Ark Pixel is split into a 21 KB Latin sheet and a 27 KB Han sheet with `unicode-range`; Latin sessions no longer download the full 566 KB CJK font. The Latin sheet is preloaded from `index.html`, and Chinese sessions preload the Han sheet after reading the saved locale.
- Menu audio and two interface cues warm first; battle/shop music and combat sounds wait for idle time.
- Includes the owned-relics cabinet artwork and layout, repeat-voyage opening fleet rotation, and the earlier first-flight action buttons and module inspection updates.
- Startup performance marks: `energy:boot-mounted`, `energy:art-ready`, `energy:first-screen`.

## Validation

- `npm run check`: typecheck, ESLint, 479 tests and production build pass.
- Local browser against the published folder: first battle reached, zero page errors, zero broken images; Latin font loaded, legacy `ArkPixel12.woff2` not requested.
- Loading record: `playcanvas_frame/docs/energy-cannon-loading.md`. In the throttle test (75 ms latency, 10 Mbps, cold cache) the first screen dropped from about 3.0 s to 2.0–2.2 s, and pre-screen bytes from 3.98 MB to 2.86 MB.

## GitHub publication

- Site commit: `594e56a` on PawGames/`main`.
- Live `index.html`, `assets/index-CwzuUNMd.js`, `assets/boot-DjP3D4zy.css`, both font subsets, the owned-relics chassis and the menu track all return HTTP 200 and match the local SHA-256 hashes above.
- Live browser check: first battle reached with zero broken images; the Latin font loads and the legacy `ArkPixel12.woff2` is not requested. Warm reload reaches the first screen in about 2.4 s from cache. The first cold load from this test network was slower because GitHub Pages returned the HTML after about 7 s; that is CDN/TTFB time before the game's own requests start.
