# Cubeling Defense demo · V102 · 2026-11-08

- Canonical URL: https://toooughv.github.io/PawGames/Playable/CubelingDefense/
- Source: playcanvas_frame / `00_cube_defense` / `b8c2eed` plus uncommitted changes (V099 health steps, V100/V101 power economy, V102 post-30 health, dev-only test tools).
- Build: `npm run build:standalone -- --outDir build/expansion-v102/standalone`; no platform SDK.
- Current build: 199 files, 5,648,309 bytes; all copied files verified byte-for-byte.
- Entry: `assets/index-Cb4MoO97.js`, SHA-256 `30b1a765f4baa67747536e2b7fb4055e4d9b6b96d587ff3b29dee4fe6a793763`; `index.html` SHA-256 `c5010490008cafa4219d86ff3542eba77ad943362c28dfa34cc557543ca9bc1d`.
- Changed runtime files versus V098: `index.html` and the new JS entry only. The stylesheet, art, audio, models, UI packs, fonts and config are byte-identical.
- No ZIP per request; the build folder is `build/expansion-v102/standalone`.
- Previous hashed bundles retained for cached clients; saves and legacy PokiDemo redirects preserved.

## Balance and economy

- Generated stages no longer add extra HP at 21/26; stage 31 onward multiplies all enemy and Boss HP by 1.10, and stage 45 onward still applies 0.85.
- Tower attack upgrades use the quadratic curve `first price × (1 + level²)`; range/count keep the V27 6× steps and skills keep V9. Refunds still follow each purchase's historical price.
- Dev-only test tools add one-click clearing with full-kill gold and Boss crystals, repeat-safe settlement, and 5× battle speed. Production builds exclude them.

## PlayCanvas production build

- Build: `npm run build -- --outDir build/expansion-v102/production`; default production mode with no platform SDK.
- 199 files, 5,681,838 bytes; entry `assets/index-B6R1vO6d.js`, SHA-256 `09718e041b0686dfdd0aa86471329695bab0340bcf5650c59de86c0d05960b2f`; `index.html` SHA-256 `c6a9371d23e0b7c68785c0abcec883781468d4f94a28252ce69fd27db741b01d`.
- Shared stylesheet `assets/index-FTQbW9YS.css`, SHA-256 `536ffccf5b25c4a18d950c485f54ff93a182951c9530a82baed2249033fa3667`.

## Validation

- `check-platform-build` passed for both standalone and production; neither contains an SDK script and no asset escapes the build root.
- Local browser: standalone reached the first battle with zero page errors and zero broken images; the production build rendered the level-1 preparation screen with its art and UI packs intact.
- 654 tests, 652 pass. The two failures remain the twenty-level campaign simulation (V27 prices make level 8 unaffordable in the greedy model) and the pre-existing research UI platform-relative asset assertion.

## GitHub publication

- Site commit: `6d52935` on PawGames/`main`.
- Live HTML references `assets/index-Cb4MoO97.js`; the live JS (SHA-256 `30b1a765…93763`) and CSS (SHA-256 `536ffccf…a3667`) match the local build byte-for-byte.
- Live browser check reached the first battle with zero page errors and zero broken images; the entry and stylesheet both return HTTP 200.
