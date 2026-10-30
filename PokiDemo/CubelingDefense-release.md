# Cubeling Defense demo · V055 · 2026-10-30

- Source: playcanvas_frame / `00_cube_defense` / `59d89cc`.
- Build: `npm run build:standalone`; no platform SDK.
- Destination: `PokiDemo/CubelingDefense/`.
- Runtime files: 168; raw size: 6,604,889 bytes.
- Archive: `cubeling-defense-standalone-2026-10-30-59d89cc.zip`, 3,880,810 bytes; source worktree `build/releases/`.
- Archive SHA-256: `201c7f7968e6e22dbd0418d6c5e11e6a83349e34bdfabae5526f0648dfad28e4`.
- Published files verified byte-for-byte against dist; superseded hashed bundles removed, `.nojekyll` retained, other games unchanged.

Startup now waits for the current saved level's biome, bases, equipped/layout tower models and necessary UI. New players no longer wait for Research, the entire upgrade screen, other biomes or unequipped towers. Returning players who enter planning load its artwork before display. UI/model background queues start after entry, prioritize likely next use and promote explicit player requests ahead of queued speculation. Downloads are deduplicated; a missing destination waits under the existing loading artwork, pauses gameplay, retries in place on failure and preserves saves. Background failures do not fail the current game.

Critical battle UI preload: 15 network items / 288,242 bytes versus the previous 107 / 1,153,320 bytes. This excludes JS, CSS, fonts, config and models. All resources remain in the package; this is reduced startup dependency, not deleted content. The existing lossless atlas and approved art are unchanged.

Validation: TypeScript, ESLint, 14 targeted tests and standalone build passed. Full suite run: 541/542 passed, with the previously known level-16 no-replay growth-strategy failure; the subsequently added in-flight abort test passed separately. Browser checks: first level, settings, upgrades, level-41 transition, tower-unlock prompts and Research; no broken images or errors. With no-store local serving and an artificial 45-second desert-model delay, the first level became interactive in 2.414 seconds before that optional model finished. This is not a GitHub Pages cold-load speed claim. Logs expose `[cube startup]` timings for real-network diagnosis.

See source `docs/cube-playtest-v055.md`. The historical platform audit has not been rescored.
