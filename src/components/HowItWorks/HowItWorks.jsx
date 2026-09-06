import React from "react";
import { steps } from "../../data/content.js";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="section section-foam" id="how">
      <div className="s-label">The process</div>
      <h2 className="s-h2">
        From audit to
        <br />
        <em>transformation.</em>
      </h2>
      <p className="s-body">
        Three steps from your first click to a personalized clinical plan in
        your hands.
      </p>

      <div className="steps-row">
        {steps.map((step) => (
          <div className="step" key={step.num}>
            <div className="step-circle">{step.num}</div>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
