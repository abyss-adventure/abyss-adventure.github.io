# Performance and scope

Local production preview, Chrome Lighthouse simulated mobile run,7 October2026 UTC (8 October local completion).

| Category | Score |
|---|---:|
| Performance |84|
| Accessibility |100|
| Best practices |100|
| SEO |100|

Measured: FCP2.11s, LCP3.77s, total blocking time190ms, CLS0. This is a local synthetic run, not a real-user field percentile or a guaranteed physical-phone frame rate. Raw data: `lighthouse-mobile.json`.

Production JS approximately365kB raw /124kB gzip; CSS22kB raw /5.3kB gzip. Main runtime is React plus GSAP/ScrollTrigger. No WebGL, animation framework duplication, custom scroll engine, third-party fonts or tracking scripts.

Hero artwork is eager/high-priority with responsive800/1600 variants. Other artwork is lazy, with intrinsic dimensions. Audio is2.8MB but preload=none and requested only after opt-in. Total media directory6.1MB includes unused inspected originals kept for editorial use; those images are not loaded by the page. The138.8MB APK is hosted on GitHub Releases and never requested until download.

Reduced motion removes strong zoom/parallax and reveal pinning. Mobile uses shorter sticky scenes, stacked narrative and touch selection. Only decorative layers transform; text remains readable.

Potential future optimization: split motion code from initial React bootstrap or further reduce hero image delivery if field data shows slow LCP. No unsupported claim of universal60fps is made.
