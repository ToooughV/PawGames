# Cubeling Defense demo · V090 · 2026-11-07

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `fe2488a`.
- Build: `npm run build:standalone -- --outDir build/releases/2026-11-07-fe2488a/standalone`; no platform SDK.
- Current build: 223 files, 6,007,114 bytes; all copied files verified byte-for-byte.
- ZIP: `cubeling-defense-github-fe2488a.zip`, 3,316,647 bytes; archived beside the source build.
- ZIP SHA-256: `15257cdea22cff87b2cb46104a1518ab0fd20fc2efb7ee5c28e36775f1568fb2`.
- Entry SHA-256: `fee360a4a021aa7917dd3ca4b4e07a0795a1b283c0609c5f9c4a07d1283fbd0c`.
- Runtime: `assets/index-CZXZ9UiD.js`; CSS: `assets/index-BHH3AdJw.css`.
- Previous files retained for cached clients; saves and legacy PokiDemo redirects preserved. Compatibility files are excluded from the current-build size above.

Updates include the expanded tower roster and active skills, preparation navigation, revised campaign and audio, and the latest upgrade economy. Range increments use M=3,4,5,6 (cap 6); tower capacity uses M=3,4,5 (cap 5). Opening discounts are removed; historical purchases retain their actual refund prices.

Validation: 636 source tests, TypeScript, ESLint, standalone platform build checks; production browser smoke test opens battle and preparation/settings at 1920×879, 1280×720, 844×390, 640×360, 390×844 and 320×568, with no page errors or HTTP failures. Local evidence: source build folder `build/releases/2026-11-07-fe2488a/`. This is not a physical-device or cold-network performance measurement.
