import { useEffect, useState } from "react";
import "./preloader.css";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let revealTimer;
    let removeTimer;

    const revealSite = () => {
      // Allow the line and school name to finish animating.
      revealTimer = setTimeout(() => {
        setLeaving(true);

        removeTimer = setTimeout(() => {
          setVisible(false);
        }, 500);
      }, 2200);
    };

    if (document.readyState === "complete") {
      revealSite();
    } else {
      window.addEventListener("load", revealSite, { once: true });
    }

    return () => {
      window.removeEventListener("load", revealSite);
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`school-preloader ${leaving ? "preloader-leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        <img
          src={`${import.meta.env.BASE_URL}images/badge.webp`}
          alt="St Stephen's Secondary School badge"
          className="preloader-badge"
        />

        <div className="preloader-line"></div>

        <div className="preloader-word">
          <h2>ST STEPHEN'S</h2>
          <p>SECONDARY SCHOOL</p>
          <span>LABOUR FOR A BETTER FUTURE</span>
        </div>
      </div>
    </div>
  );
}
