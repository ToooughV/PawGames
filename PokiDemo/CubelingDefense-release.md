# Cubeling Defense demo · V066 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `a2bafa3`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 5,062,321 bytes. Verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-a2bafa3.zip`, 2,527,730 bytes, source worktree `build/releases/`.
- SHA-256: `bd4717e4809474c1d8ff67c92c5d5b837e26d436ddcb024884b2d3d55349d39a`.
- Runtime: `index-Bzv56Rqq.js`; CSS `index-ChNvU8Cx.css`.
- Incremental update retains previous hashed files and old MP3 paths for cached clients. New runtime requests only Opus BGM. Player saves preserved.

Adopt user-selected 32 kbps VBR Opus BGM (Ogg container). All three tracks total 189,900 bytes, down from 339,893 bytes (-44.1%). Exact audition candidates, complete duration and channel layout retained. New build contains no duplicate BGM MP3. SFX remain MP3. Night gain remains 0.364 (+30%); Boss pitch and load priority unchanged.

Validation: 17 focused audio/loading tests, typecheck, lint and standalone build pass. Actual dist audio successfully decoded with PlayCanvas AudioParser in Chromium; SoundInstance played night with loop=true, pitch=1.3, volume=0.364. Android Edge / iOS hardware not tested. Retains V064 continuous background loading and Q60 artwork. Details: source `docs/cube-audio-v066.md`.
