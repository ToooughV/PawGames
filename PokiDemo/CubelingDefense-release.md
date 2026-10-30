# Cubeling Defense demo · V054 · 2026-10-30

- Source: playcanvas_frame / `00_cube_defense` / `a9552d6`.
- Build: `npm run build:standalone`; no platform SDK or Inspector markers.
- Destination: `PokiDemo/CubelingDefense/`.
- Runtime files: 168; raw size: 6,598,147 bytes (6.29 MiB). `.nojekyll` retained.
- Archive: `cubeling-defense-standalone-2026-10-30-a9552d6.zip`, 3,878,567 bytes; source worktree `build/releases/`.
- Archive SHA-256: `dd982aefbd077420dd4a0312813b6fac1a399870b89e78505077927c0b01e764`.
- Deployed files verified byte-for-byte against dist. Superseded bundles and atlas source slices removed; other games unchanged.

Research now shows a generated golden exclamation mark after a new first-Boss crystal reward. Opening Research records it as read; unspent crystals, refunds and repeat Boss kills do not rearm it. Upgrade prices and shortfalls use separate rows, keeping five-digit amounts together. The crystal guide follows language changes rather than keeping the language from initial startup; all eight guide locales are present.

Loading overlaps UI, fonts and scene assets, hiding gameplay UI until all are ready. One lossless atlas replaces 36 small image requests: 108,274 source RGBA pixels compared, zero differences. UI network images decrease from 142 to 107 (24.6% fewer requests); UI image file bytes total 1,153,320. This is not a measured 24.6% improvement in load time. Large lossy icons and nine-slice panels remain standalone to avoid increasing download size or changing approved art. Original atlas inputs live outside public and are not duplicated in this build.

Validation: TypeScript, ESLint, 47 targeted tests and standalone build passed. Browser checks covered 320×568, 568×320, 768×1024 and 1280×720; price/shortfall rows fit, guide language matches, the reward notice clears, and the final build has no broken images or console errors. Model/font/UI downloads complete under the interactive loading cover.

Full suite: 534/535 pass. The previously recorded level-16 no-replay growth-strategy test still fails; this UI/loading update does not change balance or resolve it. Real-device weak-network timings and platform SDK acceptance are unverified.

The historical audit (58.75 confirmed, evidence 85%) was not rescored. See source `docs/cube-playtest-v054.md` and `docs/reviews/cube-defense-2026-10-30.md`.
