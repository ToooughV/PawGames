# Cubeling Defense demo · V062 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `b3ddf56`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 6,213,540 bytes. Every current published file verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-b3ddf56.zip`, 3,624,926 bytes, source worktree `build/releases/`.
- SHA-256: `7860e8386735c3dfb9c421619d4ef0de004eb11bb29c2c6d927ae650d74db589`.
- Runtime: `index-BDvlq72h.js`; CSS remains `index-ChNvU8Cx.css`.
- Incremental update adds the new runtime and updates HTML; retains old hashed files and all unchanged art. Player saves preserved.

All sixteen SFX (104,000 bytes) now complete in the first batch. Scene assets follow the current level biome; tower models follow save unlocks. Enemy meshes remain procedural; initial portraits follow the encounter. Rift texture is deferred until Quake is unlocked. Immediately after entry, result and upgrade UI take priority over music, upcoming models, research and optional portraits. Music playback cannot bypass this priority on an early gesture.

A cold production test with shared 400 Kbps bandwidth and 400 ms request latency entered level one at 30.161 seconds, versus the previous baseline median of 27.143 seconds: requiring all SFX upfront increases the initial wait on this extreme connection. Upgrade images completed 7.217 seconds after entry versus about 14.03 seconds previously; BGM requests started only afterward. New measurement is one sample, not an online timing guarantee. Initial responses totaled 1,341,601 bytes. No unrelated biome or locked tower model appeared before entry.

Lossless re-encoding of 64 UI/atlas images could save only 4 bytes; no image replacements or additional lossy encoding were applied.

Validation: typecheck, lint, 24 focused tests and standalone build pass; production weak-network browser enters first-level tutorial. Tests cover all 120 level resource plans and the BGM gate. Full balance suite not rerun; the previously documented baseline level-16 strategy-search failure remains outside this loading change.

Details: source `docs/cube-loading-v062.md`; comparison baseline `docs/cube-weak-network-v061.md`. No artwork, balance, save-format or SDK changes.
