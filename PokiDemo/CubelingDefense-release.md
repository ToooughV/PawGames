# Cubeling Defense demo · V064 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `771a564`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 5,211,703 bytes. Current files verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-771a564.zip`, 2,673,781 bytes, source worktree `build/releases/`.
- SHA-256: `ddcd6bdb489c9c390954bc6788c0866fdff505a02a92641c3e862d2c688e5b25`.
- Runtime: `index-DDBSJy-T.js`; CSS remains `index-ChNvU8Cx.css`.
- Incremental update retains previous hashed files. Player saves preserved.

Preload every tower unlock portrait and battlefield icon immediately with result/upgrade UI. Pending unlocks on returning saves include their portrait in the required first batch. After the first batch, keep draining research, fonts, music, upcoming resources, then all registered remaining models/themes/audio/UI. Do not stop at near-term assets. Failures do not skip later batches; retry failed work with bounded backoff until success or scene exit. Loaded tasks remain deduplicated; foreground requests retain priority. Existing missing-resource fallback remains for failed or unfinished downloads.

Validation: typecheck, lint, 22 focused tests and standalone build pass. Single cold production test at shared 1.6 Mbps / 150 ms: first playable at 9.668 s; all ten tower images downloaded by 11.112 s; all runtime resources ready at 18.769 s. All 23 published model/model-texture files downloaded without navigating to later levels. Separate production pending-cannon-unlock fixture displayed the popup with zero extra Loading covers. These are local test measurements, not an online guarantee.

Retains Q60 assets and the scoped initial scene/SFX batch. No balance, unlock conditions, save format or artwork changes.

Details: source `docs/cube-background-v064.md`.
