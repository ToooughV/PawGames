# Cubeling Defense demo · V063 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `fe434fd`.
- Build: `npm run build:standalone`; no platform SDK.
- Current build: 175 files, 5,210,840 bytes. Every current file verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-fe434fd.zip`, 2,673,344 bytes, source worktree `build/releases/`.
- SHA-256: `435c36d866174b5a7047d6194887f544e40689db34a8d15e99f0f1f8ec0648c6`.
- Runtime: `index-DS-AINfU.js`; CSS remains `index-ChNvU8Cx.css`.
- Incremental update retains previous hashed files for cached clients; HTML references current assets. Player saves preserved.

Adopt user-selected WebP quality 60 (method 6, exact alpha at quality 100) for 108 standalone images and two regenerated atlas pages. Image dimensions and alpha are unchanged. Future image/atlas exports use the same approved configuration; already-compressed images are not repeatedly re-encoded. Historical originals and candidates remain outside the repository. SVG and model JPEG/embedded textures are unchanged.

All 110 WebP files: 1,596,924 → 814,866 bytes (49.0% smaller). Upgrade package gzip + atlas: 288,256 → 117,561 bytes (59.2% smaller). Total current raw build: 6,213,540 → 5,210,840 bytes; ZIP: 3,624,926 → 2,673,344 bytes. These are size changes, not measured load-time or VRAM reductions. Standalone fallback files and packed copies coexist, so build totals are not initial-download totals.

Retains V062 loading order: all sixteen SFX first; current biome and unlocked towers; result/upgrade UI immediately afterward; then music and speculative resources.

Validation: typecheck, lint, 15 targeted preload/pack/atlas/loading-plan tests and standalone build pass. All independent image alpha/canvases verified; 36 atlas frames preserve layout and alpha. Production browser entered level one, showed defeat UI and opened the upgrade screen with complete art. Development upgrade-prices fixture checked. No balance/save/SDK changes.

Details: source `docs/cube-webp-q60-v063.md` and per-image `docs/cube-image-compression-v063.json`.
