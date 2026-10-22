# Abyss Adventure Website 2.0

Website branch: `site/open-beta-v1-refresh`, based on website `main` at `5eaa9f0b7313a701707ac8a4ffd1fbbd133f5ce8`. Work is exclusively in `abyss-adventure/abyss-adventure.github.io`; no game repository files, branches, gameplay rules, save data or APK bytes were modified.

## Experience

The original cavern opening, self-hosted Alegreya / Be Vietnam Pro typography, dark stone/brass palette, native scrolling and opt-in ambience remain. The opening now offers direct Open Beta and beginner-guide navigation. The world selector covers all ten approved maps with original artwork, named selections and previous/next controls. Character selection shows Warrior, Mage and Rogue starting classes, Guardian / Necromancer / Assassin spotlights, verified signature skills, and all twelve full evolution paths. The class controls precede the artwork so mobile visitors can find them immediately.

A bilingual eight-step How to Play guide connects characters, fields, party, Explore, craft/equip/upgrade, evolution, quests and Boss/Raid preparation. Twelve interactive system presentations explain the existing mechanics without inventing numerical gates, rewards or backend actions. Current browser captures replace older QA screenshots in public presentation. Original creator attribution remains Phi Nguyễn; website development is credited to Henry Parker (Nguyen Manh Tuan Hưng). No invented biography or quote is shown.

## Source and release evidence

- Approved upstream release `open-beta-v1.0-android-install-fix1`, published 2026-10-22 in the private game repository. No newer release was listed by the game repository API at implementation time. This is a prerelease/Open Beta, not a stable release.
- Approved game release commit: `6e35a4221a27916aae0599a9cd00645f3d48ee20`; authoritative payload originates from approved Site `6aaba20c7efc640e581ce85f10ddc864b5e4182d`.
- APK: `Abyss-Adventure-Open-Beta-v1.0-Install-Fix.apk`, 267,688,710 bytes, version `1.0.0-open.2`, versionCode 66, package `com.nah.abyssadventure.beta`, minimum API24 / Android7.0.
- Downloaded APK SHA-256 independently matches `6aafc09b594883db9b5ea09f10b757d5a08d527cab81963870a891eab38e66ee`.
- Current runtime bundle SHA-256: `8d10f65e4b78fdb71e48d6e88ae5e8ae6cddd403db892181b17c714bd295947b`.
- `public/game-reference.json` records the current runtime source/hash and extracted canonical maps/class paths. The historical root TypeScript project and root `RELEASE.md` are not the authoritative runtime for this release.
- Published install-validation evidence records rejection of the old compressed-resource-table APK, followed by successful fixed APK installation, launch, reinstallation and relaunch on an Android API30 emulator. This task does not claim a new emulator test or any physical-phone test.
- This is an installation packaging fix. No QA Test Tools are present and no gameplay rebalance is claimed. The main download, EN/VI metadata, fallback and structured data point directly to the game owner's current release. iOS remains Coming Soon.

## Anonymous download correction

Live verification found that the supplied game release URL returned HTTP404 without authentication: the game repository is private. The website itself had deployed correctly. The approved APK was therefore mirrored byte-for-byte as an Open Beta prerelease in the public official website repository, under the same release tag. The mirror contains the verified APK and checksum; no rebuilding, signing, private-source publication or game-repository change occurred. The website, fallback, structured data and release-provenance link use the public mirror. Both host provenance and original game source commit are retained in metadata. The APK must be anonymously downloadable and its full bytes/hash verified before completion is declared.

## Assets and capture method

27 current approved artwork/capture derivatives plus ten responsive map variants were imported read-only from the SHA-256 verified APK payload. `public/asset-inventory.json` records source paths, source hashes, exact release commit/APK hash, dimensions, byte sizes and transformations. Source artwork is untouched; derivatives preserve aspect ratio and are WebP encoded without retouching.

Seven new captures: World, Party, Inventory, Craft, Daily Quest, first normal encounter combat, and the Crimson Gate summon screen. They were captured at 390×844 CSS pixels / 2× resolution from the unchanged APK web payload served locally, with isolated fresh native saves and ordinary navigation. The combat capture selected the existing first companion and entered Map1 through the real UI. No resource, level, item, save or gate injection was used. These are browser captures, not physical Android captures. Boss/Raid combat, eligible upgrade and evolution-result screenshots were not fabricated; approved artwork and accurate explanations represent those systems. Old `game-*` images remain historical repository assets but are no longer rendered as current screenshots.

Before/after captures: `output/playwright/website2/` (local only). Small representative images are retained in `reports/website2-before-390.webp`, `reports/website2-after-390-hero.webp` and `reports/website2-after-1440-how-to-play.webp`.

## Verification

- `npm ci`: clean locked install, zero reported dependency vulnerabilities.
- `npm run build`, `npm run check` (756 checks), `npx tsc --noEmit`, `git diff --check`: passed.
- Chromium and WebKit: 360×800, 390×844, 768×1024 and 1440×900. Ten map controls, previous/next, six class presentations, four paths per family, eight guide steps, equipment inspection, twelve systems, EN/VI persistence/selection/keyboard, download metadata and overflow checks.
- Axe WCAG A/AA and WCAG2.1 AA: zero violations in Chromium at 390px and 1440px, both EN/VI. Automated results do not replace assistive-technology or physical-device acceptance.
- Native-scroll opening, reduced-motion access, opt-in audio, language/audio continuity and section deep links tested separately. Existing focused audio/navigation/language helpers were retained and updated for the new surface.
- Local preview measurements before interaction: Chromium CLS 0.000–0.014; WebKit 0.000. Chromium LCP samples 72–144ms and WebKit 109–254ms on this local machine; these are local samples, not mobile-network claims. Production JS ~130KB gzip. New derivatives total 6.51MB across the complete experience and load lazily. No new runtime dependency was added.
- Short mobile Chromium memory/navigation check: 90 selector actions, 440 DOM nodes before/after, retained JS heap +133,332 bytes after forced GC. This is bounded local evidence, not long-duration physical-device certification. The no-JavaScript fallback was also verified in a JavaScript-disabled browser context.
- Impeccable bounded visual inspection and detector completed. Detector findings were advisory palette/legacy design metadata observations, with no blocking findings. Existing visual identity was retained.

## Publication and rollback

Create a PR from the website feature branch to `main`; the new review-check workflow runs locked install, build and content validation without deploying. Merge only the tested commit through the normal PR workflow. The unchanged existing `pages.yml` deploys `main`. Verify the successful Pages run, live bilingual interactions, new content and exact download target; compare live JS/CSS hashes with the tested output. APK checksum must match the verified source artifact.

No game build/release pipeline is invoked. Website deployment and Android packaging are separate; this task links the already-published approved APK rather than creating another APK.

If rollback is required, revert the website PR merge through a normal PR and let the existing Pages workflow redeploy. Prior website commit `5eaa9f0` remains available for recovery; do not force-reset history. Keep the Android install-fix release itself intact.

## Limits

No physical Android/iPhone test, full game balance certification, campaign completion claim, cloud-save service or backend gameplay is included. Game mechanics are explained from the approved current runtime; interactive website selections are presentations only. Exact merged website SHA, PR and Pages run are recorded in the completion handoff and live verification evidence after publication.
