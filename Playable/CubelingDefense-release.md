# Cubeling Defense demo · V068 · 2026-11-01

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `e0f5571`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 5,067,519 bytes. Verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-11-01-e0f5571.zip`, 2,529,533 bytes, source worktree `build/releases/`.
- SHA-256: `15eeb0b513c834c8e3548697e24f2d274de3b9bf3e8e2bfbf14aa705243116cd`.
- Runtime: `assets/index-C1SNMmPL.js`.
- Incremental update retains previous hashed files and old MP3 paths for cached clients. Player saves and old PokiDemo redirects preserved.

UI downloads use progress-aware deadlines instead of fixed 15-second aborts. Required SFX and scene models start concurrently in separate queues. Current-level external model textures are hinted before GLB parsing. Continuous background loading begins after first playable, prioritizing next interfaces and tower unlocks. Console `[cube startup]` includes per-stage timings for remote HAR diagnosis.

Validation: TypeScript, ESLint, 37 focused tests, standalone build; controlled 18-second delayed UI response succeeded without cancellation/retry, texture requests were reused, battle-to-upgrade rendered without console errors. This is not a claim of a measured remote speedup. Retains Q60 artwork and 32 kbps Opus music. See source `docs/cube-loading-v068.md`.
