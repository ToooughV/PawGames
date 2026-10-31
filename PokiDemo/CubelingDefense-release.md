# Cubeling Defense demo · V060 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `5de8876`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 6,213,367 bytes. Each published current file verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-5de8876.zip`, 3,624,878 bytes, source worktree `build/releases/`.
- SHA-256: `0248b9fcbf69313159c772bec4f49f9a5a89dd3d44144a1a4119378b72624401`.
- Incremental update retains previous hashed JS/CSS files and standalone image fallbacks. HTML references the new runtime. Player saves preserved.

Fix mobile pointer capture for battlefield placement and Loadout drags; retain tap selection and prevent drag-generated clicks. Add delegated sound for dynamic buttons/selectors while preserving dedicated sounds, mute and randomized SFX pitch. Fit long English defeat buttons at 320px portrait width.

Loading: prewarm frequent audio independently of UI, limit model speculation to near-term levels/towers, skip obsolete reference/design images in background preloads, prepare research before optional portraits, and avoid flashing loading on already-cached transitions. Pack 25 common/research images into two requests, preserving every original pixel. Duplicate GLB buffers removed losslessly (141,228 raw bytes). Audio already totals only 446,082 bytes and was not recompressed again. Retained image fallbacks mean the archive is larger; the optimization targets request latency and unnecessary startup downloads, not the total ZIP size.

Validation: typecheck, lint, 16 focused tests and standalone build pass. Full suite 553/554 pass; the previously reproduced baseline campaign strategy-search failure at level 16 remains. Desktop browser 320×568 checks confirm complete art, fitting English defeat buttons, Loadout drag and battle placement. Touch event regression tests cover implicit pointer-capture transfer and cancellation; physical Android Edge remains to be retested on the user's device. Production preview displays upgrades without runtime errors. No online cold-start timing guarantee.

Details: source `docs/cube-playtest-v060.md`. No new artwork, balance or save format changes.
