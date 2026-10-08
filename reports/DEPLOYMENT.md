# Deployment verification

Verified8 October2026, Asia/Ho_Chi_Minh.

- Live site: https://henryparker37-vip.github.io/abyss-adventure/
- Dedicated repository: https://github.com/HenryParker37-VIP/abyss-adventure
- Application source commit: `fa4816f3c404381d0432ab8ef9fe3c1394497889`.
- Successful Pages workflow: https://github.com/HenryParker37-VIP/abyss-adventure/actions/runs/37705896548
- A separate fresh remote clone completed `npm ci`, production build/typecheck,380 checks and `git diff --check` with zero dependency vulnerabilities.
- Live production JS bytes exactly match the local tested build; see `live-verification.json`.
- All eight viewport/browser cases also passed against the public URL using `QA_URL=https://henryparker37-vip.github.io/abyss-adventure/ node scripts/qa.mjs`: Chrome and WebKit,1440px desktop,390px iPhone,412px Android,320px reduced-motion; mobile landscape is exercised in the iPhone cases. No page exceptions or HTTP asset failures.
- `live-desktop.png` records the public page.

## Android preview

https://github.com/HenryParker37-VIP/abyss-adventure/releases/tag/android-preview-1.2.1-57-d0bcd5a

Public prerelease, not draft, exactly one APK. GitHub's uploaded-asset digest matches the prescribed SHA-256. The final download check is in `published-apk.json`.

Game commit: `d0bcd5a07f11482c97591deda95357090efb358e`.
APK SHA-256: `916108e500cf96e436efad29bb31a96c1164faa4f490fc7cdf4aad5f6cb47933`.
Bytes:138786779. No APK rebuild or binary modification.

The first push was rejected by GitHub's private-email protection. This website's local commit identity was changed to the account's no-reply address and the unpublished commit amended; privacy protection was not disabled.

Native Safari automation remains unavailable because Allow Remote Automation is off; WebKit results do not claim native Safari or physical-device QA. Missing creator personal details remain internal, gracefully hidden configuration.
