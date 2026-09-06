import React from 'react';
import { problemItems } from '../../data/content.js';
import './Problem.css';

export default function Problem() {
  return (
    <section className="section section-alt" id="problem">
      <div className="s-label">The problem</div>
      <h2 className="s-h2">
        Modern medicine is
        <br />
        <em>reactive by design.</em>
      </h2>
      <p className="s-body">
        The system waits for disease to become obvious. We intercept it years before that —
        when you still have the power to reverse it.
      </p>

      <div className="problem-grid">
        <div className="problem-items">
          {problemItems.map((item) => (
            <div className="pi" key={item.title}>
              <div className="pi-icon">{item.icon}</div>
              <div>
                <div className="pi-title">{item.title}</div>
                <div className="pi-text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="stat-showcase">
          <div className="ss-num">1 in 10</div>
          <div className="ss-label">
            adults in Nepal has diabetes — most were pre-diabetic for years with no structured
            intervention ever offered.
          </div>
          <div className="ss-div"></div>
          <div className="ss-num2">60%+</div>
          <div className="ss-label">
            of all deaths in Nepal are caused by NCDs — most are metabolically driven and
            lifestyle-reversible.
          </div>
          <div className="ss-div"></div>
          <p style={{
            fontSize: '.85rem',
            color: 'rgba(255,255,255,.45)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}>
            "The best treatment for a disease is to have never developed it in the first place."
          </p>
        </div>
      </div>
    </section>
  );
}
