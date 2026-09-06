import React from "react";
import { faqs } from "../../data/content.js";
import "./Faq.css";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="s-label">Questions</div>
      <h2 className="s-h2">
        Everything you need
        <br />
        <em>to know.</em>
      </h2>

      <div className="faq-grid">
        {faqs.map((f) => (
          <div className="faq-item" key={f.q}>
            <div className="faq-q">
              {f.q} <span className="faq-icon">+</span>
            </div>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
