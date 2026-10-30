# Cubeling Defense demo · 2026-10-30

- Source: playcanvas_frame / `00_cube_defense` / `8d37095`.
- Build command: `npm run build:standalone`.
- Destination: `PokiDemo/CubelingDefense/`.
- Runtime files: 202; raw size: 6,577,294 bytes (6.27 MiB). `.nojekyll` retained separately.
- Archive size: 3,876,721 bytes (3.70 MiB), kept locally in the source worktree's `build/releases/`.
- Archive SHA-256: `9252092f81e4de89581d0afd2e676c38066cffd5d289d76fdd47a4b20402d510`.
- All 202 deployed files verified byte-for-byte against the standalone build. Removed 26 obsolete build files; other games unchanged.
- No hosting SDK script is injected. Standalone adapter never shows ads or grants ad rewards. This demo is not a Poki Release / CrazyGames Full SDK build.

Current content includes the revised UI and tower models, automatic battle schedules with manual START, research, themed terrain, audio, balance/economy changes through v052, and stronger mushroom effects.

Validation: typecheck, lint and build passed. Local subdirectory preview starts successfully. Full tests: **527/528 passed**; the known no-replay campaign strategy test cannot solve level 16. This is a balance regression, not a startup failure, and remains open. First upgrade tutorial still says 8 coins while the actual price is 6. Real mobile, low-end performance and platform SDK acceptance are not verified by this demo update.

Assessment uses audit-web-game rubric v1: confirmed 58.75/100, possible 58.75–73.75, evidence coverage 85%. Performance and release-material evidence are incomplete; this is not an approval prediction. Full report and evidence live in the source repository at `docs/reviews/cube-defense-2026-10-30.md`.
