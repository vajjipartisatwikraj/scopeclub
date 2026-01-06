import "./Team.css";
import "../../App.css";
import React, { useEffect, useRef } from "react";

import TeamCard from "./TeamCard";

import { bod } from "../../Assets/Data/TeamData";
import { t22 } from "../../Assets/Data/TeamData22";
import { t23 } from "../../Assets/Data/TeamData23";
import { t24 } from "../../Assets/Data/TeamData24";
import { t25 } from "../../Assets/Data/TeamData25";
import { t26 } from "../../Assets/Data/TeamData26";
import { t27 } from "../../Assets/Data/TeamData27";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
  const headingsRef = useRef([]);
  const scrollRefs = useRef({});

  /* ================= PAGE LOAD ================= */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ================= HEADING LETTER ANIMATION ================= */
  useEffect(() => {
    headingsRef.current.forEach((heading) => {
      if (!heading) return;

      const text = heading.innerText;
      heading.innerHTML = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        span.style.display = "inline-block";
        heading.appendChild(span);
      });

      gsap.fromTo(
        heading.children,
        { opacity: 0, y: -40, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  /* ================= SCROLL HELPERS ================= */
  const scrollTeam = (id, dir) => {
    const el = scrollRefs.current[id];
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const handleScroll = (id) => {
    const el = scrollRefs.current[id];
    if (!el) return;

    const leftBtn = document.getElementById(`${id}-left`);
    const rightBtn = document.getElementById(`${id}-right`);

    if (leftBtn)
      leftBtn.style.opacity = el.scrollLeft <= 5 ? "0" : "1";

    if (rightBtn)
      rightBtn.style.opacity =
        el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
          ? "0"
          : "1";
  };

  /* ================= KEYBOARD SUPPORT ================= */
  useEffect(() => {
    const handler = (e) => {
      const active = document.activeElement;
      if (!active || !active.classList.contains("scrollable")) return;

      if (e.key === "ArrowRight")
        active.scrollBy({ left: 320, behavior: "smooth" });

      if (e.key === "ArrowLeft")
        active.scrollBy({ left: -320, behavior: "smooth" });
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ================= GSAP ARROW ANIMATION ================= */
  useEffect(() => {
    gsap.fromTo(
      ".scroll-btn",
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  /* ================= REUSABLE TEAM SECTION ================= */
  const TeamSection = (title, data, idx, id) => (
    <>
      <h2 ref={(el) => (headingsRef.current[idx] = el)} className="team-p">
        {title}
      </h2>

      <div className="team-scroll-wrapper">
        <button
          id={`${id}-left`}
          className="scroll-btn left"
          onClick={() => scrollTeam(id, "left")}
        >
          ‹
        </button>

        <div
          className="bod scrollable"
          ref={(el) => (scrollRefs.current[id] = el)}
          onScroll={() => handleScroll(id)}
          tabIndex={0}
        >
          {data.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>

        <button
          id={`${id}-right`}
          className="scroll-btn right"
          onClick={() => scrollTeam(id, "right")}
        >
          ›
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* ================= HERO SECTION (IMAGE YOU SHARED) ================= */}
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">
              Hello, World<span className="fontChange">!</span>
            </p>
            <div className="hw-arrow"></div>
          </div>

          <h1
            ref={(el) => (headingsRef.current[0] = el)}
            className="head"
          >
            Meet our Team <span className="highlighted">Scope</span>.
          </h1>

          <p className="caption">
            "Coming together is a beginning, staying together is progress,
            and working together is success." – Henry Ford
          </p>
        </div>

        <div className="inner-container">
          <div className="grid-image-left"></div>
          <div className="circle-light"></div>
          <div className="grid-image-right"></div>
          <div className="circles">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
      </div>

      {/* ================= TEAM CONTENT ================= */}
      <div className="head">
        <h3 className="team-q"></h3>

        <h2
          ref={(el) => (headingsRef.current[1] = el)}
          className="team-p"
        >
          Board of Directors
        </h2>

        <div className="bodd">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>

        {TeamSection("Team 2k27", t27, 2, "team27")}
        {TeamSection("Team 2k26", t26, 3, "team26")}
        {TeamSection("Team 2k25", t25, 4, "team25")}
        {TeamSection("Team 2k24", t24, 5, "team24")}
        {TeamSection("Team 2k23", t23, 6, "team23")}
        {TeamSection("Team 2k22", t22, 7, "team22")}
      </div>
    </>
  );
}

export default Team;
