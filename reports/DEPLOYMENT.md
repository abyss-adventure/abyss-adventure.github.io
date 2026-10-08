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
- Pages is configured with GitHub Actions. The organization-root build has 385 passing checks; eight Chrome/WebKit desktop/mobile viewport cases pass locally, including refresh, localization, media, landscape, touch, motion, audio control, download metadata and iOS Coming Soon. GitHub Pages workflow [37714553488](https://github.com/abyss-adventure/abyss-adventure.github.io/actions/runs/37714553488) completed successfully for code commit `822cfb495fbcbc58bbaf64b52f9b9d52e364d13f`. The live page, assets, metadata and desktop/mobile language persistence were then verified against that build; see `live-verification.json`.

## Android APK

Release: https://github.com/abyss-adventure/abyss-adventure.github.io/releases/tag/android-preview-1.2.1-57-d0bcd5a

GitHub release asset digest remains SHA-256 `916108e500cf96e436efad29bb31a96c1164faa4f490fc7cdf4aad5f6cb47933`, size `138786779` bytes. The transferred binary is unchanged.

## Phi and game repository

The current member list contains `HenryParker37-VIP`; `haohao2766-sudo` is not an accepted member. Whether a pending invitation exists is not visible with the current CLI token scopes (`admin:org` is not granted). Do not treat an invitation as membership. Organization owner can check/invite under Organization Settings → People. Keep Phi at Member unless the owner explicitly approves another role.

Game repository is still `haohao2766-sudo/ABYSS-ADVENTURE`. Current account permissions are `push: true`, `admin: false`. It was not touched and its local remote remains on Phi's repository. If Phi has not received an invitation, an organization owner can invite `haohao2766-sudo` at Organization Settings → People → Invite member. He should accept and remain a Member, with permission to create repositories. Then, as repository owner, Phi uses game repository Settings → General → Danger Zone → Transfer ownership, selects `abyss-adventure`, and confirms `ABYSS-ADVENTURE`. An organization owner approves only if GitHub prompts for organizational approval. Do not elevate him to Owner for this transfer.

## Historical baseline

Before transfer the site used `https://henryparker37-vip.github.io/abyss-adventure/` and project Pages asset paths. The previous synthetic Lighthouse artifact is retained as `lighthouse-project-pages-baseline.json`; its embedded project-base URLs are historical measurements, not live paths.
