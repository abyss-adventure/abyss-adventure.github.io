# Website acceptance

## Candidate and boundaries

Website is a dedicated repository. Game commit remains `d0bcd5a07f11482c97591deda95357090efb358e`. The exact APK was checksum-verified, not rebuilt. Game source, runtime, save, balance, art originals and platform host projects were not edited.

## Organization-root migration

Rebuilt with `/`, transferred release link and organization canonical metadata. The former project-pages Lighthouse artifact is explicitly retained only as historical evidence in `lighthouse-project-pages-baseline.json`.

## Evidence

- 403 content/localization/canonical-name/asset/base-path/organization-metadata assertions, including central-catalog checks for generic accessibility/release labels.
- TypeScript and Vite production build.
- Chrome and WebKit interactions: see `runtime-qa.json` for completed cases.
- Axe WCAG2A/AA and2.1AA scan: zero violations in desktop EN and mobile VI (`accessibility.json`). Automated scanning is not a claim of complete accessibility conformance.
- Keyboard skip link and scroll-driven title transform; direct `#download` reload: `navigation-qa.json`.
- Language switcher QA: `language-qa.json` covers EN↔VI, reload persistence in both languages, unchanged scroll/selection/opening-animation state, uninterrupted ambience, keyboard and touch access, and five responsive viewports.
- Audio duration144s, no autoplay, one active instance through language/navigation, mute, seek-to-loop-boundary and simulated visibility pause/resume: `audio-qa.json`. Physical speaker audibility and a continuous144s listening session were not claimed.
- Independent creative review: ship; see `CREATIVE-REVIEW.md`.
- Local Lighthouse:84/100/100/100; see `PERFORMANCE.md`.

## Specific issues resolved during QA

1. Initial hash anchors could be missed because the React scene did not exist during first HTML navigation. After fonts/layout are ready, the initial hash target is resolved and scrolled into view. Native in-page links remain native.
2. Screenshot automation initially captured two lazy images before decoding; corrected evidence waits for decode. Images were present and render correctly.
3. WebKit touch interaction repeatedly failed for the last option in the horizontally overflowing mobile system selector at412px. The same sequence passed after changing only that selector to wrap. The mobile selector now wraps, with a minimum44px target width; the final suite exercises actual touch input.

## Honest limits

Safari27 is installed, but SafariDriver refused the session because Allow Remote Automation is disabled. Its setting was not changed. WebKit26.6 engine QA is separate from native Safari testing. Chrome supplies Chromium coverage; Microsoft Edge is not installed. Mobile checks use browser touch/viewports, not a physical iPhone or Android install.

## Creator content

User confirmed no approved quote, origin story, start reason/date, personal milestones/struggles or social links. Internal configuration holds empty fields and no obvious placeholders appear publicly. Current visible development trail describes verified repository commits. Source-to-world scene is explicitly a promotional explanation, not a historical before/after.

## Deployment

See `DEPLOYMENT.md` for final clean-checkout and live Pages checks. GitHub Releases distributes the explicitly marked Android preview; iOS has no download link.

Live organization-root acceptance completed after workflow `37714553488`: root and all eight Chrome/WebKit desktop/phone/Android-sized/compact cases passed; mobile landscape passed. Desktop EN and mobile VI survive a reload. The exact deployed JS and CSS bytes match the local production build. Canonical, OpenGraph, SEO title, social image (HTTP200), release URL, original game art and zero legacy Pages asset prefix were verified. Full evidence: `live-verification.json`.
