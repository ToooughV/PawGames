# Cubeling Defense demo · V057 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `f602d36`.
- Build: `npm run build:standalone`; no platform SDK.
- Destination: `PokiDemo/CubelingDefense/`.
- Runtime files: 172; raw size: 5,822,636 bytes.
- Archive: `cubeling-defense-standalone-2026-10-31-f602d36.zip`, 3,227,966 bytes; source worktree `build/releases/`.
- Archive SHA-256: `4e4751b45ca1905925922086c64fcde1f65d808d0dea55ed5ca02cb7ef1a3249`.
- Published files verified byte-for-byte against dist; superseded files removed within this game only; `.nojekyll` retained.

V057 removes all 16 game SFX from the blocking common preload. Current BGM and likely SFX warm serially after entry; playback loads through the same deduplicating asset manager. Initial UI excludes unused tower portraits and result badges; foreground transitions still wait for complete required UI. The lossless icon atlas is split into a 19,130-byte battle page and a deferred upgrade/research page, with content-hashed filenames to avoid stale-cache coordinate mismatches. Tiny critical atlas/config preloads overlap the engine download.

Audio exports reduce the processed files from 659,640 to 392,664 bytes; night music unchanged. WOFF2 retains every font glyph and reduces 297,188 to 137,968 bytes. Two oversized enemy portraits reduce 143,428 to 38,180 bytes with exact resized alpha. Grassland/base models share original JPEG bytes; geometry, UVs, nodes and materials unchanged. Total package is smaller than V056's 6,604,899 bytes.

Controlled cold-start comparison: no-store, 400ms request delay, aggregate 256KiB/s, gzip text resources. V056 10.902s / 56 completed resource requests; V057 8.000s / 35. Initial requested payload including HTML: 2,041,161 -> 1,246,421 bytes. This is a local simulated-network comparison, not a guarantee of GitHub Pages cold-load time on the user's connection.

Validation: TypeScript, ESLint, 23 focused tests, standalone build, first-stage placement/combat/victory and upgrade-screen browser checks passed. No broken visible upgrade images or console errors. MP3 duration/RMS checks passed; inspected model bounds unchanged; all packed icon pixels unchanged. V056 flying-coin atlas lifetime fix retained.

See source `docs/cube-playtest-v057.md`, `docs/cube-delivery-v057.json`, and `docs/cube-model-textures-v057.json`. No player saves are cleared; the historical platform audit has not been rescored.
