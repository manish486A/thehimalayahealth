import React, { useState } from "react";
import { quizQuestions, waLink } from "../../data/content.js";
import "./CtaAudit.css";

export default function CtaAudit() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [activeOption, setActiveOption] = useState(null);
  const [finished, setFinished] = useState(false);

  const total = quizQuestions.length;
  const current = quizQuestions[questionIndex];

  const handleAnswer = (opt) => {
    setActiveOption(opt);
    // Small delay so the "active" highlight is visible before advancing —
    // mirrors the 280ms setTimeout in the original script.
    setTimeout(() => {
      if (questionIndex + 1 < total) {
        setQuestionIndex((i) => i + 1);
        setActiveOption(null);
      } else {
        setFinished(true);
      }
    }, 280);
  };

  return (
    <section
      className="section section-dark"
      id="cta"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "var(--fern)",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.08,
          top: -200,
          right: -100,
        }}
      ></div>

      <div className="cta-inner">
        <div className="s-label" style={{ justifyContent: "center" }}>
          Free metabolic audit
        </div>
        <h2 className="s-h2" style={{ textAlign: "center" }}>
          Where does your
          <br />
          <em>metabolism stand?</em>
        </h2>
        <p
          className="s-body"
          style={{
            textAlign: "center",
            margin: "0 auto 1rem",
            color: "rgba(255,255,255,.55)",
          }}
        >
          Answer 5 questions. Get a personalized Metabolic Risk Score. Takes 3
          minutes — free, no obligation.
        </p>

        <div className="quiz-box">
          {finished ? (
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "white",
                  marginBottom: ".6rem",
                  fontStyle: "italic",
                }}
              >
                Your audit is complete.
              </p>
              <p
                style={{
                  fontSize: ".83rem",
                  color: "rgba(255,255,255,.5)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Book your free consultation below — a physician will review your
                results with you directly on WhatsApp.
              </p>
            </div>
          ) : (
            <>
              <div className="quiz-q-text">{current.q}</div>
              <div className="quiz-opts">
                {current.opts.map((opt) => (
                  <button
                    key={opt}
                    className={`q-opt ${activeOption === opt ? "active" : ""}`}
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="quiz-dots">
                {quizQuestions.map((_, i) => (
                  <div
                    className={`qdot ${i <= questionIndex ? "done" : ""}`}
                    key={i}
                  ></div>
                ))}
              </div>
            </>
          )}
        </div>

        <a
          href={waLink(
            "Hi Healthynix! I just completed the Metabolic Health Audit and would like to book a free consultation.",
          )}
          target="_blank"
          rel="noreferrer"
          className="btn-wa"
        >
          <span className="wa-icon">💬</span> Book free consultation on WhatsApp
        </a>
        <p className="cta-note">
          Free 15-min discovery call with a physician · No obligation · Responds
          within 24hrs
        </p>
      </div>
    </section>
  );
}
