# Editing guide

## Language and canon

Edit the paired `en` and `vi` objects in `src/content.ts`. Keep keys and array ordering aligned. Translate generic communication, instructions, labels and descriptions. Retain exact fantasy names, classes, characters, locations, equipment and signature skill names. RPG abbreviations can remain English. Run `npm run build && npm run check` after editing.

The site describes only implemented systems. No V2, socket, pet, PvP, class-cap or roadmap promise should appear without an explicit approved content decision.

## Phi's story — open content

Awaiting Phi's supplied and approved material:
1. Personal quote.
2. First development date.
3. Original prototype screenshot (with date/provenance).
4. Approved creator/social links.

Empty creator fields are hidden from the public page; `creatorStory` in `src/content.ts` holds the approved material when it arrives. No creator biography or development history is inferred. Once facts arrive, update both languages and replace the placeholder labels. Keep creator history hidden until approved material arrives.

## Artwork and screenshots

`public/asset-inventory.json` records provenance. Keep original game files outside this repo unchanged. Add optimized derivatives under `public/media/`, dimensions in `src/image-dimensions.json`, and meaningful alt text through content/rendering. Keep screenshots as genuine captures. Do not retouch interface content. Label promotional compositions separately.

Optional import script: `GAME_SOURCE=/path/to/approved/checkout node scripts/assets.mjs`. The output assets are committed, so no private path or source checkout is needed for production builds. After adding images update dimension metadata. For social preview, compose only approved assets and update `public/media/social.jpg` at1200×630.

No AI-generated images are used. Social preview is an original-art composition; favicon is a resized original launcher icon.

## Android release

1. Verify the latest Phi-approved release in `haohao2766-sudo/ABYSS-ADVENTURE` and its attached install evidence.
2. Download the APK read-only and verify its published SHA-256; do not rebuild or republish it from the website repository.
3. Update `release` in `src/content.ts`: version, build, byte size, date, package, exact game commit, checksum, filename and tag. Source commit points to the game; site commit is independent.
4. Synchronize `index.html` fallback/structured data, paired EN/VI release copy and `scripts/check.mjs` assertions.
5. Run build, content checks and browser QA, then verify the live link and downloaded checksum.

Current download: Android Open Beta `1.0.0-open.2` (66), package `com.nah.abyssadventure.beta`, release `open-beta-v1.0-android-install-fix1`. No QA Test Tools. This is an installation packaging repair, not a gameplay rebalance. Emulator validation is recorded by the release; physical-phone compatibility remains unverified.

Current captures (`beta-world`, `beta-party`, `beta-inventory`, `beta-craft`, `beta-quest`, `beta-combat`, `beta-summon`) come from a fresh save in the verified APK's extracted web payload, served unchanged locally. They are browser captures, not physical-device captures. No resources, flags or game state were injected. Older `game-*` captures are retained historically but are not rendered as current gameplay. `public/game-reference.json` records the current source bundle hash, canonical maps and full class paths. `src/game-guide.ts` holds the paired beginner guide; preserve its parity and source grounding.

## iOS

Keep Coming Soon. Do not add an IPA link until a public iOS build is explicitly approved. Replace the existing iOS section only after distribution and device QA are decided.

## Ambience

`public/media/ambience.mp3` is the existing144-second loop. `preload=none`, starts only from a sound-button click, loops at restrained volume. A single audio instance persists through section and language navigation; it pauses while hidden and resumes only if the visitor opted in. An error leaves a retry message. No preference automatically starts sound on a later visit.
