import React from "react";
import { services } from "../../data/content.js";
import "./Services.css";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="s-label">Our programs</div>
      <h2 className="s-h2">
        Two pathways.
        <br />
        <em>One mission.</em>
      </h2>
      <p className="s-body">
        Whether you have early warning signs or an established diagnosis, we
        have the right clinical pathway for you.
      </p>

      <div className="services-wrap">
        {services.map((svc) => (
          <div
            className={`svc ${svc.variant === "dark" ? "svc-1" : "svc-2"}`}
            key={svc.id}
          >
            <span className="svc-tag">{svc.tag}</span>
            <h3 className="svc-title">
              {svc.title[0]}
              <br />
              {svc.title[1]}
            </h3>
            <p className="svc-desc">{svc.desc}</p>
            <ul className="svc-list">
              {svc.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="svc-num">{svc.num}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
