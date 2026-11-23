import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Menu,
  X,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  FlaskConical,
  Palette,
  Music,
  Volleyball,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import "./styles.css";
import "./marquee.css";
import "./schoolfees.css";
import "./scroll-animation.css";
import Preloader from "./Preloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTiktok,
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// const schoolBanner = "/images/campus3.webp";

// const bannerImages = [
//   "/images/campus3.webp",
//   "/images/campus1.webp",
//   "/images/campus2.webp",
//   "/images/campus4.webp",
//   "/images/chariot.webp",
//   "/images/student15.webp",
//   "/images/black-stripes.webp",
// ];

// const img = {
//   badge: "/images/badge.webp",
//   campus1: "/images/campus1.webp",
//   campus: "/images/campus.webp",
//   class: "/images/student14.webp",
//   library:
//     "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
//   optional: "/images/optional.webp",
//   science:
//     "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
//   sports: "/images/basketball1.webp",
//   students: "/images/student10.webp",
//   students1: "/images/student11.webp",
//   students6: "/images/student6.webp",
//   student13: "/images/student13.webp",
//   graduation:
//     "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
//   art: "/images/student9.webp",
//   contact: "/images/contact.webp",
// };

const BASE_URL = import.meta.env.BASE_URL;

const pagePath = (filename = "") => `${BASE_URL}${filename}`;

const imagePath = (filename) => `${BASE_URL}images/${filename}`;

const schoolBanner = imagePath("campus3.webp");

const bannerImages = [
  imagePath("campus3.webp"),
  imagePath("campus1.webp"),
  imagePath("campus2.webp"),
  imagePath("campus4.webp"),
  imagePath("chariot.webp"),
  imagePath("student15.webp"),
  imagePath("black-stripes.webp"),
];

const img = {
  badge: imagePath("badge.webp"),
  campus1: imagePath("campus1.webp"),
  campus: imagePath("campus.webp"),
  class: imagePath("student14.webp"),
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
  optional: imagePath("optional.webp"),
  science:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  sports: imagePath("basketball1.webp"),
  students: imagePath("student10.webp"),
  students1: imagePath("student11.webp"),
  students6: imagePath("student6.webp"),
  student13: imagePath("student13.webp"),
  graduation:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
  art: imagePath("student9.webp"),
  contact: imagePath("contact.webp"),
};

const nav = [
  ["Home", pagePath("")],
  ["Our School", pagePath("about.html")],
  ["Academics", pagePath("academics.html")],
  ["School Life", pagePath("school-life.html")],
  ["Admissions", pagePath("admissions.html")],
  ["Contact", pagePath("contact.html")],
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const isHome =
    location.pathname === BASE_URL ||
    location.pathname === `${BASE_URL}index.html`;

  React.useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`topbar ${isHome ? "home-header" : ""} ${scrolled ? "scrolled" : ""}`}
    >
      <a className="brand" href={pagePath("")}>
        <img
          className="brand-badge"
          src={imagePath("stbadge.webp")}
          alt="St Stephen's Secondary School badge"
        />
        <span className="brand-name">
          ST STEPHEN'S<span>SECONDARY SCHOOL</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>
        {nav.map(([t, u]) => (
          <a
            key={u}
            href={u}
            onClick={() => setOpen(false)}
            className={
              (location.pathname === u ? "active " : "") +
              (u === pagePath("admissions.html") ? "nav-cta" : "")
            }
          >
            {t}
            {u === pagePath("admissions.html") && <ArrowUpRight size={16} />}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href={pagePath("")}>
        <img
          className="brand-badge"
          src={imagePath("badge.webp")}
          alt="St Stephen's Secondary School badge"
        />
        <span className="brand-name">
          ST STEPHEN'S<span>SECONDARY SCHOOL - MUKONO TOWN</span>
        </span>
      </a>
      <p>Labour for a better future.</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} St Stephen's Secondary School</span>
        <a href="#">Back to top ↑</a>
        <span>Learn with purpose. Lead with courage.</span>
      </div>
    </footer>
  );
}
function Button({ href, children, light = false }) {
  return (
    <a
      className={"button " + (light ? "button-light" : "button-dark")}
      href={href}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageClass = "",
  className = "",
}) {
  return (
    <section className={`page-hero ${className}`}>
      <div>
        <p className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p className="hero-description">{sub}</p>
      </div>

      <img className={imageClass} src={image} alt={eyebrow} />
    </section>
  );
}
function Home() {
  const [bannerIndex, setBannerIndex] = React.useState(0);

  // Rotate welcome banner images every 60 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((current) => (current + 1) % bannerImages.length);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Scroll reveal animation
  React.useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Preloader />
      <section
        className="school-banner"
        style={{
          "--banner-image": `url("${bannerImages[bannerIndex]}")`,
        }}
      >
        <div className="school-banner-overlay">
          <div className="hero-copy">
            <p className="eyebrow hero-home-eyebrow">
              EXCELLENCE <span>•</span> DISCIPLINE <span>•</span> OPPORTUNITY
            </p>

            <h1 className="hero-home">
              Building Bright
              <span>Futures Together</span>
            </h1>

            <p className="hero-description">
              At St Stephen’s Secondary School, we nurture responsible,
              confident and compassionate leaders for tomorrow.
            </p>

            <div className="hero-actions">
              <a href={pagePath("about.html")} className="hero-home-button">
                Learn More <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="school-marquee">
              <div className="marquee-track">
                <div className="marquee-content">
                  <span>📍 MUKONO-DANDIRA, UGANDA</span>
                  <span>✦</span>
                  <span>
                    📞 ADMISSIONS & ENQUIRIES: +256 xxx xxx xxx, +256 xxx xxx
                    xxx
                  </span>
                  <span>✦</span>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                    @ststephensdandira
                  </a>
                  <span>✦</span>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                    FACEBOOK
                  </a>
                  <span>✦</span>
                  <span>LABOUR FOR A BETTER FUTURE</span>
                </div>

                <div className="marquee-content" aria-hidden="true">
                  <span>📍 MUKONO-DANDIRA, UGANDA</span>
                  <span>✦</span>
                  <span>
                    📞 ADMISSIONS & ENQUIRIES: +256 xxx xxx xxx, +256 xxx xxx
                    xxx
                  </span>
                  <span>✦</span>
                  <span>www.stsss.com</span>
                  <span>✦</span>
                  <span>FACEBOOK</span>
                  <span>✦</span>
                  <span>LABOUR FOR A BETTER FUTURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" data-reveal>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> LABOUR FOR A BETTER FUTURE.
          </p>
          <h1>
            A brighter future
            <br />
            starts <em>here.</em>
          </h1>
          <p className="hero-description">
            A community of curious minds, courageous ideas, and limitless
            potential. Discover an education that prepares students for life.
          </p>
          <div className="hero-actions">
            <Button href={pagePath("academics.html")}>
              Discover our school
            </Button>
            <a className="text-link" href={pagePath("academics.html")}>
              Explore academics ↗
            </a>
          </div>
          <div className="hero-note">
            <span className="note-dot" /> Admissions information for the new
            school year
          </div>
        </div>
        <div className="hero-visual">
          <img src={img.campus1} alt="School campus" />
          <div className="image-label">
            <span>01 / OUR COMMUNITY</span>
            <span>Curiosity lives here ↗</span>
          </div>
          <div className="hero-stamp">
            <span>EVER</span>
            <strong>
              SINCE
              <br />
              1993
            </strong>
            <span className="stamp-star">+30</span>
          </div>
        </div>
        <div className="hero-index">
          <span>SCROLL TO EXPLORE</span>
          <span className="index-line" />
        </div>
      </section>
      <section className="stats" data-reveal>
        <div>
          <BookOpen />
          <span>
            <strong>Quality learning</strong>
            <small>Knowledge with purpose</small>
          </span>
        </div>
        <div>
          <Users />
          <span>
            <strong>One community</strong>
            <small>Every student belongs</small>
          </span>
        </div>
        <div>
          <Trophy />
          <span>
            <strong>Beyond the classroom</strong>
            <small>Skills for a changing world</small>
          </span>
        </div>
        <div>
          <GraduationCap />
          <span>
            <strong>Future ready</strong>
            <small>Confidence to lead</small>
          </span>
        </div>
      </section>
      <section className="headteacher-section" data-reveal>
        <div className="headteacher-image">
          <img
            src={imagePath("headteacher.webp")}
            alt="Headteacher of St Stephen's Secondary School"
            loading="lazy"
          />
        </div>

        <div className="headteacher-message">
          <p className="section-kicker">A MESSAGE FROM OUR LEADERSHIP</p>

          <h2>
            A word from
            <br />
            <em>the Headteacher.</em>
          </h2>

          <span className="quote-mark">“</span>

          <blockquote>
            At St Stephen's Secondary School, we believe that every learner has
            the potential to achieve greatness. Our responsibility goes beyond
            academic instruction; we are committed to nurturing disciplined,
            confident and compassionate individuals who are prepared to make a
            positive difference in society as it has been for the past 33 years.
            <br />
            <br />
            We encourage our students to embrace learning, uphold good
            character, respect one another and pursue excellence in all that
            they do. Together with our dedicated staff and supportive parents,
            we continue to build an environment where every learner is valued,
            challenged and inspired to succeed.
            <br />
            <br />I welcome you to be part of the St Stephen's family.
          </blockquote>

          <div className="headteacher-signature">
            <span className="signature-line"></span>
            <div>
              <h3>Mr. Mawanda Jonathan</h3>
              <p>Headteacher, St Stephen's Secondary School</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" data-reveal>
        <div className="section-kicker">01 — WHO WE ARE</div>
        <div className="about-content">
          <h2>
            More than a school.
            <br />
            <em>A place to become.</em>
          </h2>
          <div className="about-text">
            <p className="lead">
              We believe every learner has something remarkable to contribute.
            </p>
            <p>
              Dedicated teachers, a supportive community, and meaningful
              learning experiences help every student find their strengths and
              shape their future.
            </p>
            <a className="underlined-link" href={pagePath("about.html")}>
              Get to know us <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="about-image">
          <img
            src={img.class}
            alt="Teacher supporting students in a classroom"
            loading="lazy"
          />
          <div className="image-caption">
            A supportive environment. Ambitious learning. A future full of
            possibility.
          </div>
        </div>
      </section>

      <section className="academics section-pad" data-reveal>
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 — LEARNING THAT LASTS</div>
            <h2>
              Find your <em>potential.</em>
            </h2>
          </div>
          <p>
            Strong foundations. Fresh perspectives.
            <br />
            Learning that opens doors.
          </p>
        </div>
        <div className="program-grid">
          {[
            [
              "01",
              "Sciences",
              "Practical learning, experiments, and discovery.",
              FlaskConical,
              "sciences",
            ],
            [
              "02",
              "Arts & Humanities",
              "History, literature, creativity, and critical thinking.",
              BookOpen,
              "arts",
            ],
            [
              "03",
              "Co-curricular",
              "Sports, clubs, teamwork, and creative activities.",
              Trophy,
              "co-curricular",
            ],
          ].map(([n, t, d, I, section]) => (
            <article className="program-card" key={n}>
              <div className="program-top">
                <span>{n}</span>
                <I size={24} />
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
              <a
                href={`/academics.html#${"sciences"}`}
                aria-label={`Explore ${t}`}
              >
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Button href={pagePath("academics.html")}>
            Explore all academics
          </Button>
        </div>
      </section>
      <section className="identity-section" data-reveal>
        <div className="identity-photo">
          <img
            src={imagePath("student15.webp")}
            alt="St Stephen's school church"
            loading="lazy"
          />
          <div className="identity-photo-caption">
            FAITH • CHARACTER • COMMUNITY
          </div>
        </div>

        <div className="identity-content">
          <div className="section-kicker">03 — WHAT DEFINES US</div>

          <div className="identity-heading">
            <h2>
              The values that
              <br />
              <em>shape our future.</em>
            </h2>

            <p>
              Beyond academic achievement, we believe in developing individuals
              with purpose, character and strong moral foundations.
            </p>
          </div>

          <div className="identity-grid">
            <article className="identity-card">
              <span className="identity-number">01 / PURPOSE</span>
              <h3>Our Mission</h3>
              <p>
                To provide quality education that nurtures disciplined,
                confident and compassionate learners equipped to make a
                meaningful contribution to society.
              </p>
            </article>

            <article className="identity-card">
              <span className="identity-number">02 / ASPIRATION</span>
              <h3>Our Vision</h3>
              <p>
                To be a centre of excellence that develops knowledgeable,
                responsible and innovative individuals prepared to shape a
                better future.
              </p>
            </article>

            <article className="identity-card">
              <span className="identity-number">03 / CHARACTER</span>
              <h3>Our Core Values & Faith</h3>
              <p>
                We uphold discipline, integrity, respect, compassion and
                responsibility. We welcome learners of all religious backgrounds
                and encourage tolerance, peaceful coexistence and mutual
                understanding.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="home-life" data-reveal>
        <img
          src={img.students6}
          alt="Students learning together"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">MORE THAN LESSONS</p>
          <h2>
            Room to grow.
            <br />
            <em>Space to shine.</em>
          </h2>
          <p>
            From sports and creative clubs to leadership opportunities, students
            discover new interests and build lasting friendships.
          </p>
          <Button href={pagePath("school-life.html")}>
            Explore school life
          </Button>
        </div>
      </section>

      <section className="admissions">
        <div className="admissions-mark">
          ST. STEPHEN'S<span>SECONDARY SCHOOL</span>
        </div>
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER BEGINS HERE</p>
          <h2>
            Ready to take
            <br />
            <em>the next step?</em>
          </h2>
        </div>
        <div className="admissions-right">
          <p>
            We'd love to welcome your family. Contact us to learn about
            admissions, requirements, and school visits.
          </p>
          <Button href={pagePath("admissions.html")} light>
            Admissions information
          </Button>
        </div>
      </section>
    </>
  );
}
function About() {
  return (
    <>
      <PageHero
        eyebrow="OUR SCHOOL"
        title={
          <>
            A place to learn.
            <br />
            <em>A place to belong.</em>
          </>
        }
        sub="St Stephen Secondary School is built around curiosity, character, and the belief that every learner deserves the opportunity to thrive."
        image={img.badge}
        imageClass="ourschool-badge"
        className="ourschool-hero"
      />
      <section className="school-history">
        <div className="history-image">
          <img src={img.campus} alt="St Stephen's Secondary School" />
        </div>

        <div className="history-content">
          <p className="section-kicker">OUR STORY</p>

          <h2>
            The story behind
            <br />
            <em>St Stephen's.</em>
          </h2>

          <p>
            St Stephen's Secondary School was established in 1993 with the aim
            of providing quality education and nurturing responsible, confident
            and disciplined learners.
          </p>

          <p>
            Since its establishment, the school has continued to grow, guided by
            its commitment to academic excellence, character development and the
            holistic growth of every learner.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="about-content">
          <h2>
            Our purpose is
            <br />
            <em>your potential.</em>
          </h2>
          <div className="about-text">
            <p className="lead">
              We aim to prepare confident, capable young people for a changing
              world.
            </p>
            <p>
              Our school brings together committed educators, purposeful
              learning, and a caring environment. We encourage students to ask
              questions, work together, and take responsibility for their
              growth.
            </p>
          </div>
        </div>
        <div className="value-grid" data-reveal>
          {[
            [
              "Curiosity",
              "We encourage thoughtful questions and a love of learning.",
            ],
            ["Integrity", "We practise respect, honesty, and responsibility."],
            [
              "Community",
              "We learn from one another and help each other succeed.",
            ],
          ].map(([a, b]) => (
            <article className="value-card" key={a}>
              <CheckCircle2 />
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="image-feature" data-reveal>
        <img src={img.library} alt="Library and study space" />
        <div>
          <p className="section-kicker">OUR APPROACH</p>
          <h2>
            Every learner
            <br />
            has a <em>future.</em>
          </h2>
          <p>
            We support academic progress alongside confidence, creativity, and
            good character.
          </p>
        </div>
      </section>
    </>
  );
}
function Academics() {
  return (
    <>
      <PageHero
        eyebrow="ACADEMICS"
        title={
          <>
            Learning with
            <br />
            <em>purpose.</em>
          </>
        }
        sub="A broad, engaging learning experience helps students develop knowledge, practical skills, and the confidence to keep asking questions."
        image={img.student13}
      />

      <section className="section-pad academic-details">
        <div className="section-heading">
          <div>
            <div className="section-kicker">OUR LEARNING AREAS</div>
            <h2>
              Discover your <em>strengths.</em>
            </h2>
          </div>
          <p>
            Explore the subjects, skills and experiences that make learning at
            St Stephen's meaningful.
          </p>
        </div>

        {/* SCIENCES */}
        <section className="academic-detail" id="sciences">
          <div className="academic-detail-image">
            <img src={img.science} alt="Science learning" loading="lazy" />
          </div>
          <div className="academic-detail-content">
            <span className="section-kicker">01 / SCIENCES</span>
            <h2>
              Understanding the <em>world around us.</em>
            </h2>
            <p>
              Our science learning encourages curiosity, investigation and
              practical understanding. Learners develop the ability to observe,
              question, experiment and apply scientific knowledge to everyday
              life.
            </p>
            <ul>
              <li>Biology</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>Mathematics</li>
            </ul>
          </div>
        </section>

        {/* ARTS AND HUMANITIES */}
        <section className="academic-detail reverse" id="arts" data-reveal>
          <div className="academic-detail-image">
            <img
              src={img.library}
              alt="Arts and humanities learning"
              loading="lazy"
            />
          </div>
          <div className="academic-detail-content">
            <span className="section-kicker">02 / ARTS & HUMANITIES</span>
            <h2>
              Ideas, expression and <em>perspective.</em>
            </h2>
            <p>
              Through languages, humanities and creative expression, learners
              develop communication skills, cultural awareness, critical
              thinking and an appreciation of the world around them.
            </p>
            <ul>
              <li>English Language and Literature</li>
              <li>History</li>
              <li>Geography</li>
              <li>Literature and creative expression</li>
            </ul>
          </div>
        </section>

        {/* CO-CURRICULAR */}

        {/* OPTIONAL SUBJECTS */}
        <section className="academic-detail" id="optional-subjects" data-reveal>
          <div className="academic-detail-image">
            <img
              src={img.optional}
              alt="Students exploring different subjects"
              loading="lazy"
            />
          </div>

          <div className="academic-detail-content">
            <span className="section-kicker">03 / OPTIONAL SUBJECTS</span>

            <h2>
              Skills for life. <em>Knowledge for the future.</em>
            </h2>

            <p>
              Beyond the core subjects, learners have opportunities to explore
              additional areas of study that develop practical skills,
              creativity, cultural understanding and personal growth.
            </p>

            <ul>
              <li>Computer Studies</li>
              <li>Agriculture</li>
              <li>Entrepreneurship</li>
              <li>Religious Education</li>
              <li>Physical Education (PE)</li>
              <li>Luganda</li>
              <li>Kiswahili</li>
            </ul>
          </div>
        </section>

        {/* CO-CURRICULAR ACTIVITIES */}
        <section
          className="academic-detail reverse"
          id="co-curricular"
          data-reveal
        >
          <div className="academic-detail-image">
            <img
              src={img.sports}
              alt="Students participating in co-curricular activities"
              loading="lazy"
            />
          </div>

          <div className="academic-detail-content">
            <span className="section-kicker">
              04 / CO-CURRICULAR ACTIVITIES
            </span>

            <h2>
              Learning beyond the <em>classroom.</em>
            </h2>

            <p>
              Education extends beyond textbooks. Our co-curricular activities
              give learners opportunities to discover talents, build
              friendships, develop leadership and practise teamwork.
            </p>

            <ul>
              <li>Sports and athletics</li>
              <li>Clubs and societies</li>
              <li>Music, dance and drama</li>
              <li>Leadership and student activities</li>
            </ul>
          </div>
        </section>
      </section>

      <section className="section-pad explore-interests" data-reveal>
        <div className="section-heading">
          <div>
            <div className="section-kicker">OUR LEARNING AREAS</div>
            <h2>
              Explore your <em>interests.</em>
            </h2>
          </div>
          <p>Build strong foundations and discover new strengths.</p>
        </div>
        <div className="feature-grid">
          {[
            [
              img.science,
              "Sciences",
              "Explore scientific ideas through investigation, observation, and practical activities.",
              FlaskConical,
            ],
            [
              img.library,
              "Languages & Humanities",
              "Develop communication, cultural awareness, reading, and critical thinking.",
              BookOpen,
            ],
            [
              img.art,
              "Creative Arts",
              "Make, perform, and express ideas through creative projects.",
              Palette,
            ],
          ].map(([im, t, d, I]) => (
            <article className="feature-card" key={t}>
              <img src={im} alt={t} loading="lazy" />
              <div>
                <I />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="note-panel">
          <GraduationCap />
          <div>
            <h3>Need more information?</h3>
            <p>
              Contact the school for details about subjects offered, class
              levels, and the current curriculum.
            </p>
          </div>
          <Button href={pagePath("contact.html")}>Contact the school</Button>
        </div>
      </section>
    </>
  );
}
function SchoolLife() {
  return (
    <>
      <PageHero
        eyebrow="SCHOOL LIFE"
        title={
          <>
            Discover more
            <br />
            of <em>yourself.</em>
          </>
        }
        sub="School life is about more than the classroom. Build friendships, develop interests, practise teamwork, and make memories."
        image={img.students}
      />
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="section-kicker">LEARN, PLAY, CONNECT</div>
            <h2>
              Find your <em>people.</em>
            </h2>
          </div>
          <p>Opportunities to take part, try something new, and grow.</p>
        </div>
        <div className="feature-grid">
          {[
            [
              img.sports,
              "Sports & teamwork",
              "Build fitness, resilience, and collaboration through sporting activities.",
              Volleyball,
            ],
            [
              img.art,
              "Creative clubs",
              "Explore visual arts, music, and other creative interests.",
              Music,
            ],
            [
              img.graduation,
              "Leadership & events",
              "Take part in school events and practise communication and leadership.",
              CalendarDays,
            ],
          ].map(([im, t, d, I]) => (
            <article className="feature-card" key={t}>
              <img src={im} alt={t} loading="lazy" />
              <div>
                <I />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageHero
        eyebrow="PROM PARTY"
        title={
          <>
            A Day
            <br />
            to <em>remember.</em>
          </>
        }
        sub="An unforgettable evening of elegance, celebration, and lasting memories as our students come together to celebrate their school journey."
        image={img.students1}
      />

      <section className="admissions">
        <div className="admissions-mark">
          ST. STEPHENS<span>SECONDARY SCHOOL</span>
        </div>
        <div>
          <p className="eyebrow">BE PART OF THE COMMUNITY</p>
          <h2>
            Make your
            <br />
            <em>mark.</em>
          </h2>
        </div>
        <div className="admissions-right">
          <p>
            Ask us about school activities, clubs, and opportunities for
            students to get involved.
          </p>
          <Button href={pagePath("contact.html")} light>
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="ADMISSIONS"
        title={
          <>
            Your next chapter
            <br />
            <em>starts here.</em>
          </>
        }
        sub="We are glad you are considering St Stephen's Secondary School. Contact our team to learn about the school, requirements, and how to begin."
        image={img.graduation}
      />
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="section-kicker">HOW TO GET STARTED</div>
            <h2>
              Join our <em>community.</em>
            </h2>
          </div>
          <p>Our team can guide you through the admissions process.</p>
        </div>
        <div className="steps-grid">
          {[
            [
              "01",
              "Contact the school",
              "Ask about available places, entry requirements, and the relevant class level.",
            ],
            [
              "02",
              "Prepare documents",
              "Confirm which application forms and supporting documents are required.",
            ],
            [
              "03",
              "Speak with our team",
              "Arrange a visit or discussion to understand the school and next steps.",
            ],
          ].map(([n, t, d]) => (
            <article className="step-card" key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>

        {/* ACADEMIC ENTRY REQUIREMENTS */}
        <div className="academic-entry" data-reveal>
          <div className="academic-entry-heading">
            <span className="section-kicker">ACADEMIC ENTRY</span>
            <h3>
              Entry Academic requirements by <em>level.</em>
            </h3>
          </div>

          <div className="academic-entry-grid">
            <div className="academic-entry-card">
              <span>O-LEVEL</span>
              <h4>Senior 1 – Senior 4</h4>
              <p>
                Senior 1 applicants should prepare relevant primary school
                academic records. Applicants joining Senior 2 to Senior 4 should
                provide previous secondary school reports and transfer
                documents, where applicable.
              </p>
            </div>

            <div className="academic-entry-card">
              <span>A-LEVEL</span>
              <h4>Senior 5 – Senior 6</h4>
              <p>
                Applicants should prepare their Uganda Certificate of Education
                (UCE) results or equivalent qualifications, together with
                relevant previous school records.
              </p>
            </div>
          </div>

          <p className="academic-entry-note">
            <strong>Note:</strong> These are proposed guidelines. Please confirm
            the official admission requirements with the school administration.
          </p>
        </div>

        {/* ONLINE ADMISSIONS ENQUIRY */}
        <section className="admission-enquiry" data-reveal>
          <div className="section-heading-admissions">
            <div>
              <div className="section-kicker">TAKE THE NEXT STEP</div>
              <h2>
                Begin your <em>admission enquiry.</em>
              </h2>
            </div>

            <p>
              Complete the form below to express interest in joining St
              Stephen's Secondary School.
            </p>
          </div>

          <AdmissionsEnquiryForm />
        </section>

        {/* SCHOOL FEES STRUCTURE */}
        <section className="fees-section" data-reveal>
          <div className="section-heading">
            <div>
              <div className="section-kicker">SCHOOL FEES & PAYMENTS</div>
              <h2>
                School fees <em>structure.</em>
              </h2>
            </div>
            <p>
              A guide to the school fees for our O-Level and A-Level learners.
            </p>
          </div>

          <div className="fees-intro">
            <h3>Fees per term</h3>
            <p>
              The following is a draft fees structure. Please confirm the
              amounts with the school before making payment.
            </p>
          </div>

          <div className="fees-table-wrap">
            <table className="fees-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Day Students (UGX)</th>
                  <th>Boarding Students (UGX)</th>
                </tr>
              </thead>

              <tbody>
                <tr className="fees-level">
                  <td colSpan="3">O-LEVEL</td>
                </tr>

                {["Senior 1", "Senior 2", "Senior 3", "Senior 4"].map(
                  (level) => (
                    <tr key={level}>
                      <td>{level}</td>
                      <td>To be confirmed</td>
                      <td>To be confirmed</td>
                    </tr>
                  ),
                )}

                <tr className="fees-level">
                  <td colSpan="3">A-LEVEL</td>
                </tr>

                {["Senior 5", "Senior 6"].map((level) => (
                  <tr key={level}>
                    <td>{level}</td>
                    <td>To be confirmed</td>
                    <td>To be confirmed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fees-note">
            <p>
              <strong>Important:</strong> For the most accurate and up-to-date
              information regarding school fees, payment arrangements and other
              charges, please contact the school administration.
            </p>
            <Button href={pagePath("contact.html")}>
              Enquire about school fees
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}

function AdmissionsEnquiryForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      className="contact-form admission-enquiry-form"
      onSubmit={handleSubmit}
    >
      <label>
        Parent / Guardian Name
        <input
          type="text"
          name="guardianName"
          placeholder="Enter parent or guardian name"
          required
        />
      </label>

      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          placeholder="+256 7XX XXX XXX"
          required
        />
      </label>

      <label>
        Email Address
        <input type="email" name="email" placeholder="Enter email address" />
      </label>

      <label>
        Student's Full Name
        <input
          type="text"
          name="studentName"
          placeholder="Enter student's full name"
          required
        />
      </label>

      <label>
        Student Category
        <select name="studentCategory" defaultValue="" required>
          <option value="" disabled>
            Select category
          </option>
          <option>Day Scholar</option>
          <option>Boarding Student</option>
        </select>
      </label>

      <label>
        Class Applying For
        <select name="classApplying" defaultValue="" required>
          <option value="" disabled>
            Select class
          </option>
          <option>Senior 1</option>
          <option>Senior 2</option>
          <option>Senior 3</option>
          <option>Senior 4</option>
          <option>Senior 5</option>
          <option>Senior 6</option>
        </select>
      </label>

      <label>
        Previous School
        <input
          type="text"
          name="previousSchool"
          placeholder="Enter previous school"
        />
      </label>

      <label className="form-full">
        Additional Information
        <textarea
          name="message"
          rows="5"
          placeholder="Write any additional information or questions..."
        />
      </label>

      <button className="button button-dark form-full" type="submit">
        Submit Admission Enquiry <ArrowUpRight size={17} />
      </button>

      {submitted && (
        <p className="success-message form-full">
          Your enquiry form has been completed successfully. This is currently a
          demonstration and has not been sent to the school.
        </p>
      )}
    </form>
  );
}

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Full name
        <input required placeholder="Your name" />
      </label>
      <label>
        Email address
        <input required type="email" placeholder="you@example.com" />
      </label>
      <label>
        What can we help with?
        <select defaultValue="Admissions">
          <option>Admissions</option>
          <option>Academics</option>
          <option>School life</option>
          <option>General enquiry</option>
        </select>
      </label>
      <label>
        Message
        <textarea required rows="4" placeholder="Write your message..." />
      </label>
      <button className="button button-dark" type="submit">
        Send enquiry <ArrowUpRight size={17} />
      </button>
      {sent && (
        <p className="success-message">
          Thank you. This demo has captured your message on this page, but does
          not send an email yet. Please contact the school directly until email
          delivery is configured.
        </p>
      )}
    </form>
  );
}
function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title={
          <>
            Let's start a<br />
            <em>conversation.</em>
          </>
        }
        sub="Have a question about admissions, academics, or school life? Get in touch and our team can help."
        image={img.contact}
      />
      <section className="section-pad">
        <div className="contact-grid">
          <div>
            <div className="section-kicker">WE'RE HERE TO HELP</div>
            <h2>
              Come say <em>hello.</em>
            </h2>
            <p className="contact-intro">
              Replace the sample details below with the school's confirmed
              contact information before publishing.
            </p>
          </div>
          <div className="contact-details">
            <div>
              <MapPin />
              <span>
                <strong>Visit us</strong>
                <small>Add the school's physical address</small>
              </span>
            </div>
            <div>
              <Phone />
              <span>
                <strong>Call us</strong>
                <small>+256 (0) XX XXX XXXX</small>
              </span>
            </div>
            <div>
              <Mail />
              <span>
                <strong>Email us</strong>
                <small>info@stsss.ac.ug</small>
              </span>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          <h3>Send an enquiry</h3>
          <p>
            This sample form does not send email until connected to a form
            service.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
function App() {
  const p = location.pathname;
  React.useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  const page = p.includes("about") ? (
    <About />
  ) : p.includes("academics") ? (
    <Academics />
  ) : p.includes("school-life") ? (
    <SchoolLife />
  ) : p.includes("admissions") ? (
    <Admissions />
  ) : p.includes("contact") ? (
    <Contact />
  ) : (
    <Home />
  );
  return (
    <div className="site-shell">
      <Header />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
