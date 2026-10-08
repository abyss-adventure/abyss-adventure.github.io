import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  copy,
  creatorStory,
  downloadUrl,
  release,
  releaseUrl,
  type Lang,
} from "./content";
import "./style.css";
import dimensions from "./image-dimensions.json";
gsap.registerPlugin(ScrollTrigger);
const media = (name: string) => `${import.meta.env.BASE_URL}media/${name}.webp`;
function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      style={down ? { transform: "rotate(90deg)" } : undefined}
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
function Sound({ on }: { on: boolean }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      {on ? (
        <>
          <path d="M16 8q5 4 0 8M19 5q8 7 0 14" />
        </>
      ) : (
        <path d="m17 9 5 6m0-6-5 6" />
      )}
    </svg>
  );
}
function Globe() {
  return (
    <svg
      className="language-icon"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.3 2.5 3.4 5.5 3.4 9s-1.1 6.5-3.4 9c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3Z" />
    </svg>
  );
}
function Art({
  name,
  alt = "",
  className = "",
  eager = false,
  responsive = false,
}: {
  name: string;
  alt?: string;
  className?: string;
  eager?: boolean;
  responsive?: boolean;
}) {
  return (
    <img
      className={className}
      width={dimensions[name as keyof typeof dimensions]?.[0]}
      height={dimensions[name as keyof typeof dimensions]?.[1]}
      src={media(name)}
      srcSet={
        responsive
          ? `${media(name + "-small")} 800w, ${media(name)} 1600w`
          : undefined
      }
      sizes={responsive ? "100vw" : undefined}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}
export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem("abyss-site-language") === "vi" ? "vi" : "en";
    } catch {
      return "en";
    }
  });
  const t = copy[lang];
  const [world, setWorld] = useState(0),
    [character, setCharacter] = useState(0),
    [gear, setGear] = useState(0),
    [system, setSystem] = useState(0);
  const [sound, setSound] = useState(false),
    [audioError, setAudioError] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const soundWanted = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const scrollBeforeLanguageChange = useRef<number | null>(null);
  function switchLanguage() {
    scrollBeforeLanguageChange.current = window.scrollY;
    setLang((current) => (current === "en" ? "vi" : "en"));
  }
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("abyss-site-language", lang);
    } catch {}
    const previousScroll = scrollBeforeLanguageChange.current;
    if (previousScroll !== null) {
      ScrollTrigger.refresh();
      window.scrollTo({ top: previousScroll, behavior: "instant" });
      scrollBeforeLanguageChange.current = null;
      return;
    }
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [lang]);
  useEffect(() => {
    let active = true;
    document.fonts.ready.then(() => {
      if (!active || !location.hash) return;
      requestAnimationFrame(() => {
        if (!active) return;
        ScrollTrigger.refresh();
        try {
          document
            .getElementById(decodeURIComponent(location.hash.slice(1)))
            ?.scrollIntoView({ behavior: "instant" });
        } catch {}
      });
    });
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    const a = new Audio(`${import.meta.env.BASE_URL}media/ambience.mp3`);
    a.loop = true;
    a.volume = 0.28;
    a.preload = "none";
    audio.current = a;
    const visibility = () => {
      if (document.hidden) a.pause();
      else if (soundWanted.current)
        a.play().catch(() => {
          setAudioError(true);
          setSound(false);
          soundWanted.current = false;
        });
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      a.pause();
      a.removeAttribute("src");
      a.load();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  async function toggleSound() {
    const a = audio.current;
    if (!a) return;
    setAudioError(false);
    if (soundWanted.current) {
      a.pause();
      soundWanted.current = false;
      setSound(false);
    } else {
      try {
        await a.play();
        soundWanted.current = true;
        setSound(true);
      } catch {
        setAudioError(true);
      }
    }
  }
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const mobile = window.innerWidth < 760;
      const ctx = gsap.context(() => {
        const opening = gsap.timeline({
          scrollTrigger: {
            trigger: ".surface",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
        opening
          .to(
            ".hero-title",
            { scale: mobile ? 1.4 : 1.8, opacity: 0, y: -70, ease: "none" },
            0,
          )
          .to(
            ".hero-environment",
            { scale: 1.12, yPercent: 4, ease: "none" },
            0,
          )
          .to(".hero-bottom", { opacity: 0, ease: "none" }, 0);
        gsap.fromTo(
          ".evolution-game",
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: ".evolution",
              start: "top 30%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          },
        );
        gsap.to(".evolution-source", {
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".evolution",
            start: "top 30%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        });
        gsap.fromTo(
          ".class-portrait",
          { y: 35 },
          {
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: ".class-scene",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
        gsap.to(".descent-line", {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  const place = t.worlds[world],
    hero = t.classes[character],
    item = t.gear[gear],
    feature = t.systems[system];
  return (
    <div ref={root}>
      <a className="skip" href="#world">
        {t.skip}
      </a>
      <div className="descent-line" aria-hidden="true" />
      <header className="header">
        <a className="brand" href="#surface" aria-label="Abyss Adventure">
          <Art name="logo" eager />
        </a>
        <nav aria-label={t.mainNavigation}>
          <a href="#world">{t.world}</a>
          <a href="#creator">{t.creator}</a>
        </nav>
        <div className="header-actions">
          <button
            className="language"
            onClick={switchLanguage}
            aria-label={lang === "en" ? t.switchToVietnamese : t.switchToEnglish}
            title={lang === "en" ? t.switchToVietnamese : t.switchToEnglish}
          >
            <Globe />
            {lang === "en" ? "EN" : "VI"}
            <span className="language-separator" aria-hidden="true"> / </span>
            <span className="inactive">{lang === "en" ? "VI" : "EN"}</span>
          </button>
          <button
            className="sound"
            onClick={toggleSound}
            aria-label={sound ? t.soundOn : t.soundOff}
            aria-pressed={sound}
          >
            <Sound on={sound} />
            <span>{sound ? t.soundOn : t.soundOff}</span>
          </button>
          <a className="nav-download" href="#download">
            {t.play}
            <Arrow />
          </a>
        </div>
      </header>
      {audioError && (
        <p className="audio-error" role="status">
          {t.soundError}
        </p>
      )}
      <main>
        <section className="surface" id="surface" aria-labelledby="hero-title">
          <div className="surface-sticky">
            <Art name="raid" className="hero-environment" eager responsive />
            <div className="hero-shade" />
            <div className="hero-title">
              <h1 id="hero-title">
                ABYSS<span>ADVENTURE</span>
              </h1>
              <p>{t.heroLine}</p>
            </div>
            <div className="hero-bottom">
              <p>{t.heroSub}</p>
              <a href="#world">
                {t.descend}
                <Arrow down />
              </a>
              <span>EN / VI · ANDROID</span>
            </div>
            <div className="edge-coordinate" aria-hidden="true">
              ABYSS ADVENTURE / PHI NGUYỄN × HENRY PARKER
            </div>
          </div>
        </section>
        <section
          className="world section"
          id="world"
          aria-labelledby="world-title"
        >
          <div className="section-heading">
            <h2 id="world-title">{t.worldTitle}</h2>
            <p>{t.worldIntro}</p>
          </div>
          <div className="world-stage">
            <Art
              name={place.image}
              alt={place.name}
              className="world-art"
              responsive
            />
            <div className="world-vignette" />
            <div className="world-caption" aria-live="polite">
              <span className="map-index">
                {place.index}
                <span> / 10</span>
              </span>
              <div>
                <h3>{place.name}</h3>
                <p>{place.detail}</p>
              </div>
            </div>
            <div
              className="world-route"
              role="group"
              aria-label={t.chooseLocation}
            >
              {t.worlds.map((w, i) => (
                <button
                  key={w.name}
                  onClick={() => setWorld(i)}
                  aria-pressed={world === i}
                >
                  <span className="route-dot" />
                  {w.name}
                </button>
              ))}
            </div>
          </div>
          <p className="caption">{t.originalArt}</p>
        </section>
        <section
          className="creator section"
          id="creator"
          aria-labelledby="creator-title"
        >
          <div className="creator-heading">
            <h2 id="creator-title">{t.creatorTitle}</h2>
            <div>
              <p className="creator-name">{t.creatorLine}</p>
              <p>{t.creatorIntro}</p>
            </div>
          </div>
          <div className="evolution">
            <div className="evolution-sticky">
              <div className="evolution-visual">
                <div className="evolution-source">
                  <span>{t.sourceLabel}</span>
                  <pre>
                    <code>{`classPaths: [\n  ["Warrior", "Knight",\n   "Paladin", "Guardian"],\n\n  ["Mage", "Wizard",\n   "Summoner", "Necromancer"],\n\n  ["Rogue", "Assassin"]\n]`}</code>
                  </pre>
                  <span>
                    packages/content/data.json ·{" "}
                    {t.excerpt}
                  </span>
                </div>
                <div className="evolution-game">
                  <Art name="game-world" alt={t.screenAlt} />
                  <span>{t.gameLabel}</span>
                </div>
              </div>
              <div className="evolution-copy">
                <h3>{t.buildQuote}</h3>
                <p>{t.buildNote}</p>
              </div>
            </div>
          </div>
          <div className="milestones">
            <h3>{t.milestoneTitle}</h3>
            {t.milestones.map((m, i) => (
              <article key={m.title}>
                <time dateTime={i === 0 ? "2026-10-06" : "2026-10-07"}>
                  {m.date}
                </time>
                <h4>{m.title}</h4>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
          {(creatorStory.quote ||
            creatorStory.origin ||
            creatorStory.started ||
            creatorStory.milestones ||
            creatorStory.links.length > 0) && (
            <div className="creator-notebook">
              {creatorStory.quote && (
                <blockquote>{creatorStory.quote}</blockquote>
              )}
              {[
                creatorStory.origin,
                creatorStory.started,
                creatorStory.milestones,
              ]
                .filter(Boolean)
                .map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              {creatorStory.links.map((link) => (
                <a className="text-link" key={link.url} href={link.url}>
                  {link.label}
                  <Arrow />
                </a>
              ))}
            </div>
          )}
        </section>
        <section
          className="classes section"
          id="characters"
          aria-labelledby="classes-title"
        >
          <div className="section-heading">
            <h2 id="classes-title">{t.classesTitle}</h2>
            <p>{t.classesIntro}</p>
          </div>
          <div className="class-scene">
            <span className="class-watermark" aria-hidden="true">
              {hero.base}
            </span>
            <div className="class-art">
              <Art
                name={hero.image}
                alt={hero.name}
                className="class-portrait"
              />
            </div>
            <div className="class-detail" aria-live="polite">
              <h3>{hero.name}</h3>
              <p className="class-path">{hero.path}</p>
              <p>{hero.detail}</p>
              <div className="skill-detail">
                <span>{t.skill}</span>
                <strong>{hero.skill}</strong>
              </div>
            </div>
          </div>
          <div className="class-select" role="group" aria-label={t.chooseClass}>
            {t.classes.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setCharacter(i)}
                aria-pressed={i === character}
              >
                <span>{c.base}</span>
                <Arrow />
              </button>
            ))}
          </div>
        </section>
        <section className="equipment section" aria-labelledby="gear-title">
          <div className="gear-heading">
            <h2 id="gear-title">{t.gearTitle}</h2>
            <p>{t.gearIntro}</p>
          </div>
          <div className="equipment-stage">
            <div className="artifacts" role="group" aria-label={t.chooseGear}>
              {t.gear.map((g, i) => (
                <button
                  key={g.name}
                  className={`artifact artifact-${i}`}
                  aria-pressed={gear === i}
                  onClick={() => setGear(i)}
                  aria-label={g.name}
                >
                  <Art name={g.image} />
                  <span className="artifact-mark" />
                </button>
              ))}
            </div>
            <div className="gear-info" aria-live="polite">
              <h3>{item.name}</h3>
              <dl>
                <div>
                  <dt>{t.category}</dt>
                  <dd>{item.category}</dd>
                </div>
                <div>
                  <dt>{t.property}</dt>
                  <dd>{item.property}</dd>
                </div>
              </dl>
              <p>{t.rarity}</p>
            </div>
          </div>
        </section>
        <section
          className="systems section"
          id="systems"
          aria-labelledby="systems-title"
        >
          <div className="section-heading">
            <h2 id="systems-title">{t.systemsTitle}</h2>
            <p>{t.systemsIntro}</p>
          </div>
          <div
            className="system-select"
            role="group"
            aria-label={t.chooseSystem}
          >
            {t.systems.map((s, i) => (
              <button
                key={i}
                onClick={() => setSystem(i)}
                aria-pressed={i === system}
              >
                {s.name}
                {i < 4 && <Arrow />}
              </button>
            ))}
          </div>
          <div
            className={`system-stage ${feature.kind === "capture" ? "is-capture" : ""}`}
          >
            <Art
              name={feature.image}
              alt={feature.kind === "capture" ? t.screenAlt : ""}
            />
            <div className="system-copy" aria-live="polite">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <span className="caption">
                {feature.kind === "capture" ? t.gameLabel : t.originalArt}
              </span>
            </div>
          </div>
        </section>
        <section className="gameplay section" aria-labelledby="gameplay-title">
          <div className="section-heading">
            <h2 id="gameplay-title">{t.galleryTitle}</h2>
            <p>{t.galleryIntro}</p>
          </div>
          <div className="gameplay-planes">
            <figure>
              <Art
                name="game-inventory"
                alt={`${t.screenAlt}: ${t.inventory}`}
              />
              <figcaption>
                {t.inventory} <span>1.2.1 · ANDROID</span>
              </figcaption>
            </figure>
            <figure>
              <Art name="game-raid" alt={`${t.screenAlt}: ${t.raid}`} />
              <figcaption>
                {t.raid}
                <span>1.2.1 · ANDROID</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="download section"
          id="download"
          aria-labelledby="download-title"
        >
          <Art name="ruins" className="download-background" responsive />
          <div className="download-inner">
            <h2 id="download-title">{t.finalTitle}</h2>
            <Art name="logo" className="download-logo" />
            <div className="release-panel">
              <div className="android-release">
                <h3>{t.preview}</h3>
                <p className="release-meta">
                  v{release.version} ({release.build}) <span>·</span>{" "}
                  {t.requirement} <span>·</span>{" "}
                  {(release.bytes / 1e6).toFixed(1)} MB
                </p>
                <a className="primary-download" href={downloadUrl}>
                  {t.download}
                  <Arrow down />
                </a>
                <p className="preview-note">{t.previewNote}</p>
                <a className="text-link" href={releaseUrl}>
                  {t.releaseNotes}
                  <Arrow />
                </a>
                <details className="technical">
                  <summary>{t.technical}</summary>
                  <dl>
                    <div>
                      <dt>{t.version}</dt>
                      <dd>{release.version}</dd>
                    </div>
                    <div>
                      <dt>{t.built}</dt>
                      <dd>
                        {release.build} · {release.date}
                      </dd>
                    </div>
                    <div>
                      <dt>{t.commitLabel}</dt>
                      <dd>
                        <code>{release.commit}</code>
                      </dd>
                    </div>
                    <div>
                      <dt>{t.checksum}</dt>
                      <dd>
                        <code>{release.sha256}</code>
                      </dd>
                    </div>
                  </dl>
                </details>
              </div>
              <div className="ios-release">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <rect x="5" y="1" width="16" height="28" rx="3" />
                  <path d="M10 5h6m-5 20h4" />
                </svg>
                <h3>{t.ios}</h3>
                <span className="soon">{t.soon}</span>
                <p>{t.iosNote}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <strong>
            {t.projectCreditLead}
            <a
              href="https://github.com/haohao2766-sudo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.phiProfileLabel}
              title={t.openGithubProfile}
            >
              Phi Nguyễn
            </a>
            {t.projectCreditJoin}
            <a
              href="https://github.com/HenryParker37-VIP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.henryProfileLabel}
              title={t.openGithubProfile}
            >
              Henry Parker
            </a>
          </strong>
          <span>
            {t.websiteCreditLead}
            <a
              href="https://github.com/HenryParker37-VIP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.websiteProfileLabel}
              title={t.openGithubProfile}
            >
              {t.websiteCreditName}
            </a>
          </span>
        </div>
        <a href={release.source}>
          {t.source}
          <Arrow />
        </a>
        <a href="#surface">
          {t.back}
          <Arrow />
        </a>
        <p>{t.mute}</p>
      </footer>
    </div>
  );
}
