import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" style={{ paddingTop: 70 }}>
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span> Nepal's online longevity
          clinic
        </div>
        <h1 className="hero-h1">
          Healthcare shouldn't
          <br />
          start when you
          <br />
          <em>get sick.</em>
        </h1>
        <p className="hero-p">
          We intercept metabolic disease before it takes hold — with a dedicated
          doctor, dietician, and health coach working together around you.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary">
            Take free metabolic audit
          </a>
          <a href="#services" className="btn-ghost">
            See how it works
          </a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <div className="trust-num">3M+</div>
            <div className="trust-label">Nepalis with diabetes</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">60%</div>
            <div className="trust-label">Undiagnosed</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">100%</div>
            <div className="trust-label">Online & accessible</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-bg-orb hero-bg-orb-1"></div>
        <div className="hero-bg-orb hero-bg-orb-2"></div>
        <div className="hero-right-content">
          <div className="hero-card">
            <div className="hero-card-label">Your metabolic score</div>
            <div className="hero-card-val">Elevated Risk</div>
            <div className="hero-card-sub">
              HbA1c trending — intervention window open
            </div>
          </div>
          <div className="hero-mini-cards">
            <div className="hero-mini">
              <div className="hero-mini-icon">🩺</div>
              <div className="hero-mini-title">Doctor assigned</div>
              <div className="hero-mini-desc">
                Preventive medicine specialist on your case
              </div>
            </div>
            <div className="hero-mini">
              <div className="hero-mini-icon">🥗</div>
              <div className="hero-mini-title">Diet plan active</div>
              <div className="hero-mini-desc">
                Personalized South Asian nutrition protocol
              </div>
            </div>
            <div className="hero-mini">
              <div className="hero-mini-icon">💪</div>
              <div className="hero-mini-title">Gym program</div>
              <div className="hero-mini-desc">
                Zone 2 + strength — 4 days/week
              </div>
            </div>
            <div className="hero-mini">
              <div className="hero-mini-icon">📈</div>
              <div className="hero-mini-title">Day 47 progress</div>
              <div className="hero-mini-desc">HbA1c ↓ 0.4 · Weight ↓ 5.2kg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
