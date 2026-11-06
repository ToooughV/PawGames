# Cubeling Defense demo · V093 · 2026-11-07

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `ab4140e`.
- Build: `npm run build:standalone -- --outDir build/expansion-v093/standalone`; no platform SDK.
- Current build: 199 files, 5,637,014 bytes; all copied files verified byte-for-byte.
- ZIP: `cubeling-defense-github-v093.zip`, 2,989,959 bytes.
- ZIP SHA-256: `8dc9078bf1caf7e7ed06c442ac39bb7235792667edb2f6d33529eab512d9b2bc`.
- Runtime: `assets/index-BaRLi-rb.js`; CSS: `assets/index-FTQbW9YS.css`.
- Previous files retained for cached clients; saves and legacy PokiDemo redirects preserved. Compatibility files are excluded from current-build size and the new entry does not request duplicate aliases.

Lightning texture converted to WebP Q60 with identical alpha, 72,564 to 20,428 bytes. Removed 24 duplicate UI images and duplicate payloads across screen packs; shared paths resolve to one request/decoded resource. Dialog portraits reuse preloaded images. Next-level models load alongside next-screen UI; lightning mesh/texture loads run in parallel. Gameplay tuning remains V092: +25% health from stage 5 inclusive.

Validation: 31 loading/queue/UI tests, TypeScript and ESLint passed. Production browser smoke checks across six viewport sizes plus upgrade/research/active-skill tabs report no missing visible images, page exceptions or failed HTTP requests. Final standalone and CrazyGames builds pass artifact checks. No gameplay balance rerun or user-network timing claim.
