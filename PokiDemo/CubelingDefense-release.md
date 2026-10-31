# Cubeling Defense demo · V059 · 2026-10-31

- Source: playcanvas_frame / `00_cube_defense` / `91b4c64`.
- Build: `npm run build:standalone`; no platform SDK.
- Runtime build: 173 files, 6,045,213 bytes; all current published files verified byte-for-byte against dist.
- Archive: `cubeling-defense-standalone-2026-10-31-91b4c64.zip`, 3,394,217 bytes; source worktree `build/releases/`.
- Archive SHA-256: `309990a241d499fdb208f228afe375deff0808ff729a420fb9acc30962f3fd4a`.
- Incremental demo update retains the previous hashed JS/CSS files; the new HTML references only the current build. Player saves are preserved.

Mobile upgrades now use the approved full art board and real controls. The previous small-screen breakpoint hid it and replaced backgrounds, tower cards and level navigation with a simplified proxy UI. Portrait and landscape now retain the existing design and scale to the viewport; rotating does not recreate the dialog.

Runtime improvements: cache HUD nodes and number formatters, avoid unchanged DOM/health-bar writes, replace full target sorting with equivalent linear selection, reuse enemy lookup indexes, and load only portraits needed by the visible route/report page. Hidden Research guidance no longer requests its icon at startup. Existing priority loading, image pack/atlas, English Loading default, audio compression and flying coins are retained.

Validation: TypeScript, ESLint, 52 focused tests and standalone build pass. Desktop Chromium viewport checks cover 320×568, 375×667, 390×844, 667×375 and 844×390; observed 59 images decoded and 39 sized controls within the viewport. Upgrade purchase works. Fresh production build completed tutorial placement, combat, victory and opening upgrades without console errors. These are viewport tests, not physical Android Edge certification.

Full suite: 549/550 pass. The bounded campaign-planner test fails at level 16 on both this revision and pristine prior `676a6be`; recorded as an existing issue. Difficulty was not altered to satisfy the search.

Details: source `docs/cube-playtest-v059.md`. No new art, stat/balance or player-save changes.
