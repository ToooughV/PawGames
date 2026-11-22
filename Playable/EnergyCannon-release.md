# Energy Cannon demo · V1.0.0 · 2026-11-22

- Canonical URL: https://toooughv.github.io/PawGames/Playable/EnergyCannon/
- Source: playcanvas_frame / `02_energy_cannon` / `6a83965`.
- Build: `npm run build`; no platform SDK. 618 runtime files, about 14 MB in `dist`.
- Entry: `assets/index-BZNIhkPq.js`, SHA-256 `3c0e35bb670b6a9cfa826d81c0e90592ccfff6ac6bd0504f17eb708501245d9b`; `index.html` SHA-256 `ceef1a0647cb8aa702a2e44c8380d6b8b9a031573c47f107826ad2b67d65c422`.
- Game chunk: `assets/boot-DAB_dE5B.js`, SHA-256 `67f4a1132ac3753c762ddd82407eb296bd06a4e5c2aab9b79be76cf7a87f3af8`.
- Starter atlas: `assets/ui/energy-v1/pixel/atlas/modules-starter-e00c5412d15b.webp`, SHA-256 `e00c5412d15bcc1eaa2e43a0e221dbd4b5ff29e8eb6c669378565e3207b9cb5d`.
- Stylesheet: `assets/boot-DjP3D4zy.css`, SHA-256 `f0d18f91a02f959826c81fc021ef016c58572d45205600ca8a32a7a2bbae515b`.
- Fonts: `assets/ui/energy-v1/pixel/ArkPixel12-latin.woff2` (SHA-256 `af13311b62fb8c4cb79240f4b8a15df4e727979b249e4208a03c0b8c7b4f7e6f`) and `ArkPixel12-cjk.woff2` (SHA-256 `1c19a6df947e6adb85b50cb2d212b34cf52d3b80dfbdad332e3331d77864b29b`).
- Previous hashed bundles remain in the folder for cached clients; the legacy full font file is no longer referenced by the new CSS or HTML.
- Saves and the PokiDemo redirects are unchanged.

## What changed versus the previous live build (`d540f63`)

- Startup now gates on title/menu and flight-deck art only. The 101-sprite module atlas, later enemy art, combat effects, shop and rewards load in follow-up phases. The opening deck uses four individual module images, so the first battle is complete without the atlas.
- Ark Pixel is split into a 21 KB Latin sheet and a 27 KB Han sheet with `unicode-range`; Latin sessions no longer download the full 566 KB CJK font. The Latin sheet is preloaded from `index.html`, and Chinese sessions preload the Han sheet after reading the saved locale.
- All four BGM tracks load in parallel immediately after the opening gate; only combat and interface effects wait for idle time. Measured first gesture → battle BGM in about 35 ms, and reward → shop scene → shop BGM in about 17 ms.
- Settings, manual, codex and relic panels open immediately without an art curtain; real screen changes cap the outgoing-art curtain at 400 ms instead of 10 s. Settings and module-inspection chrome now loads before the atlas and shop art.
- The four opening modules (power core, emitter, left elbow, right elbow) now sit on a 49 KB starter atlas page loaded with the flight deck. The remaining 1.33 MB atlas still follows after the first screen, so the deck and warehouse show their art immediately instead of filling in.
- Reward, shop backdrop (`pixel/hangar`), debrief and next-wave contacts now load before the large atlas. Screen transitions also wait for the rendered `<img>` decode, capped at 1.2 s, so victory and shop reveal without empty frames.
- If one opening image still stalls after a retry, the game now opens and requests it again from the live DOM instead of showing the startup error panel on a slow CDN.
- The restart confirmation re-fits its button labels every time it opens, targeting 62% of the key width and using one size for both buttons. The English keep label is now “Keep voyage”; the narrowest tested gutter is 52 px and no label touches the enamel face in any supported language.
- Includes the owned-relics cabinet artwork and layout, repeat-voyage opening fleet rotation, and the earlier first-flight action buttons and module inspection updates.
- Startup performance marks: `energy:boot-mounted`, `energy:art-ready`, `energy:first-screen`.

## Validation

- `npm run check`: typecheck, ESLint, 479 tests and production build pass.
- Local browser against the published folder: first battle reached, zero page errors, zero broken images; Latin font loaded, legacy `ArkPixel12.woff2` not requested. Settings and manual panels open in about 60–90 ms, and their images fill in within a few hundred milliseconds.
- Loading and transition record: `playcanvas_frame/docs/energy-cannon-loading.md`. In the throttle test (75 ms latency, 10 Mbps, cold cache) the first screen is about 2.0–2.5 s, pre-screen bytes 2.86 MB, reward → shop transition about 156 ms, and shop BGM about 17 ms after the scene switch.

## GitHub publication

- Site commit: `731b2d9` on PawGames/`main`.
- Live `index.html`, `assets/index-BZNIhkPq.js` and `assets/boot-DAB_dE5B.js` return HTTP 200 and match the local SHA-256 hashes above. Earlier bundles and previous atlas pages stay in the folder for cached clients.
- Runtime check with 75 ms latency and 10 Mbps: first screen about 2.1 s; all reward/debrief/hangar requests finish before the victory report (zero broken images); reward → shop reveals after about 0.75 s with zero broken images. The screen-change curtain caps at 1.2 s.
