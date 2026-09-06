import React, { useEffect, useRef, useState } from "react";
import { testimonials as allTestimonials } from "../../data/content.js";
import "./Proof.css";

const MAX_TESTIMONIALS = 10; // hard safety cap — matches the agreed business limit
const testimonials = allTestimonials.slice(0, MAX_TESTIMONIALS);

export default function Proof() {
  const trackRef = useRef(null);
  const isStatic = testimonials.length <= 3; // desktop only: hides slider, shows static grid
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setAtStart(scrollLeft <= 1);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges(); // set initial state
    track.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(".proof-slide");
    const amount = slide ? slide.offsetWidth + 24 : track.offsetWidth; // 24 = gap in px
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="section" id="proof">
      <div className="s-label">Clinical outcomes</div>
      <h2 className="s-h2">
        Results that show up
        <br />
        <em>in your bloodwork.</em>
      </h2>
      <p className="s-body">
        Our social proof is before-and-after lab panels — documented metabolic
        improvements from real clients.
      </p>

      <div className={`proof-wrap ${isStatic ? "is-static" : ""}`}>
        <div className="proof-track" ref={trackRef}>
          {testimonials.map((t) => (
            <div className="proof-slide" key={t.name}>
              <div className="proof-card">
                <div className="proof-qm">"</div>
                <p className="proof-text">{t.text}</p>
                <div className="proof-badge">
                  <span className="proof-badge-num">{t.badgeNum}</span>
                  <span className="proof-badge-lbl">{t.badgeLbl}</span>
                </div>
                <div className="proof-name">{t.name}</div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 1 && (
          <div className="proof-nav">
            <button
              className="proof-arrow"
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="proof-arrow"
              onClick={() => scroll(1)}
              disabled={atEnd}
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
