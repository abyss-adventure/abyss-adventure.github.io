# Organization migration and deployment verification

Verified 8 October 2026, Asia/Ho_Chi_Minh.

## Organization

- Organization: [Abyss Adventure](https://github.com/abyss-adventure), login `abyss-adventure`.
- Authenticated `HenryParker37-VIP` membership is active and API role `admin` (organization Owner).
- Display name, description and website URL match the requested profile. Public email, location and social profile fields are empty; no billing email was queried or changed. Avatar remains for the owner to upload.

## Website transfer

- Repository: [abyss-adventure/abyss-adventure.github.io](https://github.com/abyss-adventure/abyss-adventure.github.io).
- Public Pages URL: https://abyss-adventure.github.io/
- Local remote `origin`: `https://github.com/abyss-adventure/abyss-adventure.github.io.git`.
- `main`, full existing git history, Pages Actions workflow, website assets, EN/VI content, QA files, and prerelease asset remain present. Source repo had zero issues/assignees at transfer time.
- Vite now builds for `/`. All runtime images use `import.meta.env.BASE_URL`; canonical/OG/Twitter/JSON-LD, icon, sitemap, robots, and APK release links use the organization root.
- Pages is configured with GitHub Actions. The live site bundle was deployed successfully by [workflow 37746599341](https://github.com/abyss-adventure/abyss-adventure.github.io/actions/runs/37746599341) from website content commit `a822afe11202898be0404b385a30d34ff9e4598f`. A later documentation-only commit refreshes this verification record without changing the site bundle. The live EN/VI site, refresh and language persistence, links, iOS Coming Soon state, safe viewport widths, media and accessibility controls were verified in Chrome and WebKit at desktop, iPhone, Android and narrow viewports. All eight cases passed with no runtime errors or failed resources. The live verification record includes deployed bundle hashes and download checks.

## Android APK

Release: https://github.com/abyss-adventure/abyss-adventure.github.io/releases/tag/android-1.2.1-58-complete

Build 1.2.1 (58), package `com.nah.abyssadventure`, minimum Android API 24, exact tested source commit `952f483ca500679a80ca2c02fc7da687434053aa` on `project-1`. The public APK is `Abyss-Adventure-1.2.1-58-Complete-Android.apk`, 138689263 bytes, SHA-256 `8d9afa9b7dda033d97eb6a029384c10c48b9ab1cfb65f2f89f21561e5238a9e2`. It installs and launches on the API 35 ARM64 emulator and is signed with the Android debug certificate; it is a testing build, not production-stable. The live release download was fetched and matched the local artifact SHA-256.

## Phi and game repository

The current member list contains `HenryParker37-VIP`; `haohao2766-sudo` is not an accepted member. Whether a pending invitation exists is not visible with the current CLI token scopes (`admin:org` is not granted). Do not treat an invitation as membership. Organization owner can check/invite under Organization Settings → People. Keep Phi at Member unless the owner explicitly approves another role.

Game repository is still `haohao2766-sudo/ABYSS-ADVENTURE`. Current account permissions are `push: true`, `admin: false`. It was not touched and its local remote remains on Phi's repository. If Phi has not received an invitation, an organization owner can invite `haohao2766-sudo` at Organization Settings → People → Invite member. He should accept and remain a Member, with permission to create repositories. Then, as repository owner, Phi uses game repository Settings → General → Danger Zone → Transfer ownership, selects `abyss-adventure`, and confirms `ABYSS-ADVENTURE`. An organization owner approves only if GitHub prompts for organizational approval. Do not elevate him to Owner for this transfer.

## Historical baseline

Before transfer the site used `https://henryparker37-vip.github.io/abyss-adventure/` and project Pages asset paths. The previous synthetic Lighthouse artifact is retained as `lighthouse-project-pages-baseline.json`; its embedded project-base URLs are historical measurements, not live paths.
