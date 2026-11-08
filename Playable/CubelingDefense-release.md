# Cubeling Defense demo · V097 · 2026-11-07

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `b8c2eed` plus uncommitted changes (V094 loading, V095/V097 economy, dev-only 5× speed, runtime 2→6 routes restored).
- Build: `npm run build:standalone -- --outDir build/expansion-v097/standalone`; no platform SDK.
- Current build: 199 files, 5,647,259 bytes; all copied files verified byte-for-byte.
- Entry: `assets/index-BaZW3oHM.js`, SHA-256 `3cd42419a320eb30a99d82136b3087b1426eaa5089c4121bc4b9026105417f40`; `index.html` SHA-256 `439bb8e624ce1cdcaccd4d72ab018a67a90ccf177895891ea89a0b71fbd4b686`; `config/cube-levels.json` SHA-256 `1ee255ec344ee1ff60af9160e8bf88ebff355a32026244962657d69f29a34905` (includes levels 2–7 `coinScale` 1.25).
- Changed runtime files versus V094: `index.html`, the new JS entry, and `config/cube-levels.json`. All art, audio, models, UI packs, fonts and other config are byte-identical.
- No ZIP per request; the build folder is `build/expansion-v097/standalone`.
- Previous hashed bundles retained for cached clients; saves and legacy PokiDemo redirects preserved.

Economy: V097 tower range/count increments are 6× the V25 table and range is pricier than count (arrow range 192 / 3,792 / 9,492…, count 230 / 3,230 / 8,030…). Active-skill range increments are 4× the V8 table (battery 540 / 1,140 / 2,140…). Dev-only 5× battle speed is not in this build.

Validation: standalone `check-platform-build` passed; 647 of 649 tests pass. The two failures are the twenty-level campaign simulation (the deliberate 6× prices make level 8 unaffordable in the greedy model) and the pre-existing research UI platform-relative asset assertion. Production browser smoke checks are performed after deployment.
