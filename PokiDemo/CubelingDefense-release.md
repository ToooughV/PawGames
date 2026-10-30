# Cubeling Defense demo · V058 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `676a6be`.
- Build: `npm run build:standalone`; no platform SDK.
- Runtime build: 173 files, 6,048,632 bytes; all current published files verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-676a6be.zip`, 3,403,834 bytes; source worktree `build/releases/`.
- Archive SHA-256: `3929626a3a048785d96973ec005536cbd9b92e9d8894d4d8dcb4539c55e65851`.
- Incremental demo update retains the previous hashed JS/CSS files; the new HTML references only the current build. Player saves are preserved.

Loading defaults to English unless the player has saved a language preference. Upgrade UI warms before optional future models/audio while the tutorial is running. 37 unchanged WebP slices use one content-hashed resource pack plus the existing icon atlas, instead of many serial requests. Opening upgrades no longer waits on unrelated 3D resources; entering a battle still verifies the needed models.

The pack is 220,333 bytes raw / 164,952 bytes with gzip in the test server. Original images remain as fallbacks; this reduces request latency rather than total package size. Existing audio compression and flying-coin fix remain intact.

Validation: TypeScript, ESLint, 52 focused tests, standalone build, tutorial placement/combat/victory, attack upgrade and entering level two. Local simulated network: no-store, 1.5s delay per request, aggregate 256KiB/s. The UI pack completed during combat; clicking next after victory showed upgrades in approximately 897ms including automation overhead. All 55 upgrade IMG elements decoded; no console warnings/errors. This is not a guarantee for every GitHub Pages connection. The old comparison was already warm when clicked, so no cold transition speedup ratio is claimed.

Details: source `docs/cube-playtest-v058.md`. Original art, layouts and gameplay unchanged.
