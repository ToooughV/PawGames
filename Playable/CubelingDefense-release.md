# Cubeling Defense demo · V094 · 2026-11-07

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `ab4140e` plus uncommitted V094 startup changes (`boot.ts`, `main.ts`, `CubeScene.ts`, `UiPreload.ts`, `AudioAssets.ts`).
- Build: `npm run build:standalone -- --outDir build/expansion-v094/standalone`; no platform SDK.
- Current build: 199 files, 5,637,668 bytes; all copied files verified byte-for-byte.
- Entry: `assets/index-S9THGojL.js`, SHA-256 `28b94896380fb35ce0e7d45c475613b45dc2b623bf16f0abc6a1da792ee888b4`; `index.html` SHA-256 `9e3f87b53ef26f35153197392d2406b99761fa42f0cd6c0705157905a677ea38`. CSS is unchanged: `assets/index-FTQbW9YS.css`.
- Changed runtime files versus V093: `index.html` and the new JS entry only. All art, audio, models, UI packs, fonts and config are byte-identical.
- ZIP: `cubeling-defense-github-v094.zip`, 2,984,329 bytes; SHA-256 `15b2cff0a445b6dfbdfaa1959f588baee71faa9c5f8405f0e847bc4a956dde51`.
- Previous hashed bundles retained for cached clients; saves and legacy PokiDemo redirects preserved.

Startup changes: first-battle assets (bases, grassland, arrow, ten priority cues) prefetch before platform initialization; the other eleven cues and both music tracks load after the cover lifts; the four save reads run in parallel; UI image decoding accepts `onload`/`complete` with a 6-second bound instead of a 15-second `decode()` wait, removing the observed 34-second hard failure and two-attempt 30-second stall. Gameplay tuning remains V092: +25% health from stage 5 inclusive.

Measurements on the local production preview (1280×720): standalone ready 1190→1098 ms; first-battle models 401→64 ms; priority cues 433→2 ms. The cover no longer waits for about 290 KB of SFX and music. The CrazyGames SDK is still a blocking head script; a temporary async build measured 3528→1911 ms, but that framework change is not part of this release.

Validation: 5 loading-plan tests, TypeScript, ESLint and Prettier passed; the full 639-test run has 637 passing with the same two pre-existing failures reproduced on the untouched baseline (level-8 growth strategy and research UI platform-relative assets). Production browser checks at the `/Playable/CubelingDefense/` subpath report no 4xx resources or page errors and reach the level-1 tutorial screen; ready was 1318 ms from this uncompressed local server. Gameplay balance was not rerun.

Online verification after Pages deployment (2026-11-07): the live entry is `assets/index-S9THGojL.js` and its SHA-256 matches the local artifact; no 4xx resources or page errors; the level-1 tutorial screen is reachable. From this network the live build reported ready 8957 ms, split into about 1.5 s HTML response, 4.0 s for the 544 KB JS download, and 1.4 s for first-battle models. That is network-bound, not a regression; the two remaining large transfers are the JS entry and the 506 KB first-battle models.
