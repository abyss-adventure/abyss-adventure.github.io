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

Empty creator fields are hidden from the public page; `creatorStory` in `src/content.ts` holds the approved material when it arrives. Current dated entries describe verified repository activity on 6–7 October2026, not the project's start or the creator's personal history. Once facts arrive, update both languages and replace the placeholder labels. Do not convert the source-data reveal into a historical before/after without a real historical image.

## Artwork and screenshots

`public/asset-inventory.json` records provenance. Keep original game files outside this repo unchanged. Add optimized derivatives under `public/media/`, dimensions in `src/image-dimensions.json`, and meaningful alt text through content/rendering. Keep screenshots as genuine captures. Do not retouch interface content. Label promotional compositions separately.

Optional import script: `GAME_SOURCE=/path/to/approved/checkout node scripts/assets.mjs`. The output assets are committed, so no private path or source checkout is needed for production builds. After adding images update dimension metadata. For social preview, compose only approved assets and update `public/media/social.jpg` at1200×630.

No AI-generated images are used. Social preview is an original-art composition; favicon is a resized original launcher icon.

## Android release

1. Obtain an approved APK and verify its SHA-256 locally.
2. Publish it through GitHub Releases on this website repository. Mark prerelease while it is a preview/test candidate.
3. Update `release` in `src/content.ts`: version, build, byte size, date, exact game commit, checksum, filename and tag. Source commit points to the game; site commit is independent.
4. Update the fallback release link in `index.html` if the tag changes. Release status copy is in both language objects.
5. Update the pinned candidate assertions in `scripts/check.mjs` only as part of an intentional release update.
6. Verify the public download bytes/checksum and both-language metadata.

Current package identity: `com.nah.abyssadventure`. Candidate contains test tools. Keep the Preview label until the owner approves stable distribution. GitHub Releases provide the APK; never commit the138.8MB binary into Git history.

## iOS

Keep Coming Soon. Do not add an IPA link until a public iOS build is explicitly approved. Replace the existing iOS section only after distribution and device QA are decided.

## Ambience

`public/media/ambience.mp3` is the existing144-second loop. `preload=none`, starts only from a sound-button click, loops at restrained volume. A single audio instance persists through section and language navigation; it pauses while hidden and resumes only if the visitor opted in. An error leaves a retry message. No preference automatically starts sound on a later visit.
