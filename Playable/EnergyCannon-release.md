# Energy Cannon demo · V1.0.0 · 2026-11-22

- Canonical URL: https://toooughv.github.io/PawGames/Playable/EnergyCannon/
- Source: playcanvas_frame / `02_energy_cannon` / `8f8643d`.
- Build: `npm run build`; no platform SDK. 618 runtime files, about 14 MB in `dist`.
- Entry: `assets/index-DoXlJPA4.js`, SHA-256 `339d93647c7e52b179a8517aad6425f7f06aa462b4429304fdebf859b9325d85`; `index.html` SHA-256 `929b37215939d76ceeef1653c0552f51ffc20d42d0ff2fdd58f0759bdeb15962`.
- Game chunk: `assets/boot-C3RC4irN.js`, SHA-256 `73ae8748479a20a1bba999cdf94aeb257aff8dee4392b81df450084ba9c4567a`.
- Stylesheet: `assets/boot-DjP3D4zy.css`, SHA-256 `f0d18f91a02f959826c81fc021ef016c58572d45205600ca8a32a7a2bbae515b`.
- Fonts: `assets/ui/energy-v1/pixel/ArkPixel12-latin.woff2` (SHA-256 `af13311b62fb8c4cb79240f4b8a15df4e727979b249e4208a03c0b8c7b4f7e6f`) and `ArkPixel12-cjk.woff2` (SHA-256 `1c19a6df947e6adb85b50cb2d212b34cf52d3b80dfbdad332e3331d77864b29b`).
- Previous hashed bundles remain in the folder for cached clients; the legacy full font file is no longer referenced by the new CSS or HTML.
- Saves and the PokiDemo redirects are unchanged.

## What changed versus the previous live build (`d540f63`)

- Startup now gates on title/menu and flight-deck art only. The 101-sprite module atlas, later enemy art, combat effects, shop and rewards load in follow-up phases. The opening deck uses four individual module images, so the first battle is complete without the atlas.
- Ark Pixel is split into a 21 KB Latin sheet and a 27 KB Han sheet with `unicode-range`; Latin sessions no longer download the full 566 KB CJK font. The Latin sheet is preloaded from `index.html`, and Chinese sessions preload the Han sheet after reading the saved locale.
- All four BGM tracks load in parallel immediately after the opening gate; only combat and interface effects wait for idle time. Measured first gesture → battle BGM in about 35 ms, and reward → shop scene → shop BGM in about 17 ms.
- Settings, manual, codex and relic panels open immediately without an art curtain; real screen changes cap the outgoing-art curtain at 400 ms instead of 10 s. Settings and module-inspection chrome now loads before the atlas and shop art.
- If one opening image still stalls after a retry, the game now opens and requests it again from the live DOM instead of showing the startup error panel on a slow CDN.
- The restart confirmation re-fits its button labels every time it opens. The English keep label is now “Keep voyage”, so both keys keep the 36 px size and stay inside their enamel faces in all eight languages.
- Includes the owned-relics cabinet artwork and layout, repeat-voyage opening fleet rotation, and the earlier first-flight action buttons and module inspection updates.
- Startup performance marks: `energy:boot-mounted`, `energy:art-ready`, `energy:first-screen`.

## Validation

- `npm run check`: typecheck, ESLint, 479 tests and production build pass.
- Local browser against the published folder: first battle reached, zero page errors, zero broken images; Latin font loaded, legacy `ArkPixel12.woff2` not requested. Settings and manual panels open in about 60–90 ms, and their images fill in within a few hundred milliseconds.
- Loading and transition record: `playcanvas_frame/docs/energy-cannon-loading.md`. In the throttle test (75 ms latency, 10 Mbps, cold cache) the first screen is about 2.0–2.5 s, pre-screen bytes 2.86 MB, reward → shop transition about 156 ms, and shop BGM about 17 ms after the scene switch.

## GitHub publication

- Site commit: `67da227` on PawGames/`main`.
- Live `index.html`, `assets/index-CcMm64vA.js`, `assets/boot-BJnRAY8q.js` and `assets/boot-DjP3D4zy.css` all return HTTP 200 and match the local SHA-256 hashes above. The previous `index-C01zwaQN.js` and earlier bundles stay in the folder for cached clients.
- Live browser check: entry `index-CcMm64vA.js`, no startup error panel, zero broken images. Settings opens in about 55 ms, all four BGM tracks are requested immediately after the art gate, and battle music starts on the first gesture. This test network reached GitHub Pages slowly (HTML TTFB around 8 s), so the cold first screen took about 12 s here; the game's own preload completed without failing.
