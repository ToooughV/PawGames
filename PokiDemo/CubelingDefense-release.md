# Cubeling Defense demo · V053 · 2026-10-30

- Source: playcanvas_frame / `00_cube_defense` / `b151800`.
- Build: `npm run build:standalone`.
- Destination: `PokiDemo/CubelingDefense/`.
- Runtime files: 202; raw size: 6,586,408 bytes (6.28 MiB). `.nojekyll` retained.
- Archive: `cubeling-defense-standalone-2026-10-30-b151800.zip`, 3,878,542 bytes; kept in source worktree `build/releases/`.
- Archive SHA-256: `b67b43806c8f87e80fa707fc94901d29600d4d072232d99c31fa6ecb42aa521a`.
- All deployed files verified byte-for-byte against the build. Old JS/CSS bundles removed; other games unchanged.
- No hosting SDK script injected. Standalone adapter never shows ads or grants ad rewards.

This update preloads and decodes 141 UI/portrait images while the existing interactive Loading remains visible. It fixes compact-screen upgrade, research, settings, result and report layouts. First-upgrade tutorial uses the actual upgrade price (currently 6 coins); its pointer now targets the visible compact control.

Validation: typecheck, lint, 15 targeted UI/localization/loading tests and standalone build passed. Thirty layout cases cover six screens at 320×568, 360×640, 390×844, 568×320 and 667×375: no outer-panel overflow or broken images. Long route/report content can scroll internally while navigation remains visible. Fresh standalone playthrough completed level 1 and confirmed the 6-coin upgrade reduces the 8-coin balance to 2 and advances the tutorial.

Prior full suite: 527/528 passed; the known no-replay strategy test cannot solve level 16. This update does not change balance or claim that failure is resolved. Real mobile hardware, weak-network behavior and platform SDK acceptance remain unverified.

The historical 2026-10-30 audit (58.75 confirmed, evidence 85%) was not rescored. See source `docs/cube-playtest-v053.md` and `docs/reviews/cube-defense-2026-10-30.md`.
