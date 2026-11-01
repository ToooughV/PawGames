# Cubeling Defense demo · V069 · 2026-11-01

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `83f593c`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 5,068,102 bytes. Verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-11-01-83f593c.zip`, 2,529,710 bytes, source worktree `build/releases/`.
- SHA-256: `90f83de79cf63259de31672a697c6570e0401caf1d05fff8dfc50e83f9a82935`.
- Runtime: `assets/index-WuIOYgZ4.js`.
- Incremental update retains previous hashed files and old MP3 paths for cached clients. Player saves and old PokiDemo redirects preserved.

Current day/night music and planning music preload independently from startup, without waiting for UI assets. Switching scenes stops the previous music and discards obsolete download completions. Browser gesture, mute, pause and Boss pitch behavior remain. SFX use four slots independently from model/music queues. V068 progress-aware UI download handling remains.

Validation: typecheck, lint, 26 focused audio/loading tests, standalone build; delayed upgrade-pack test proves music requests start independently. Production-build browser flow played day and switched to planning on entering upgrades, without warnings/errors. Public network timing still requires retesting. Details: source `docs/cube-music-v069.md`.
