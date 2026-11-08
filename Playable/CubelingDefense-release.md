# Cubeling Defense demo · V098 · 2026-11-07

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `b8c2eed` plus uncommitted changes (V094 loading, V095/V097 economy, V098 endless health steps, dev-only 5× speed).
- Build: `npm run build:standalone -- --outDir build/expansion-v098/standalone`; no platform SDK.
- Current build: 199 files, 5,647,260 bytes; all copied files verified byte-for-byte.
- Entry: `assets/index-BeXPVu1x.js`, SHA-256 `d7495032ba18898c260d7e7427db51cfad433dee28e46b2ba111025cfe877b5e`; `index.html` SHA-256 `2cc3b7eb2265d45ca2fd140e687729615a6b0363e65121e57a161e3320c5f02e`.
- Changed runtime files versus V097: `index.html` and the new JS entry only. All art, audio, models, UI packs, fonts and config are byte-identical.
- No ZIP per request; the build folder is `build/expansion-v098/standalone`.
- Previous hashed bundles retained for cached clients; saves and legacy PokiDemo redirects preserved.

Balance: endless health steps changed from 1.15/1.2 to 1.05/1.05 (21–25 ×1.05, 26+ ×1.1025). Average ordinary HP at stage 21 drops 204→187, stage 26 353→282. The authored 1–20 economy and the V097 tower/skill prices are unchanged.

Validation: standalone `check-platform-build` passed; 647 of 649 tests pass. The two failures remain the twenty-level campaign simulation (V27 6× prices make level 8 unaffordable in the greedy model) and the pre-existing research UI platform-relative asset assertion.
