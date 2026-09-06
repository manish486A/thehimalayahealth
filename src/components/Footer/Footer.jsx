import React from "react";
import "./Footer.css";
import { socialLinks } from "../../data/content.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">The Himalaya Health</div>
          <p className="footer-tagline">
            Nepal's longevity and preventive medicine clinic — online, built for
            people who want to stay ahead of disease rather than chase it.
          </p>
          <div className="footer-contact">
            📞 +977 9869838254
            <br />
            💬 WhatsApp: wa.me/9779869838254
            <br />
            📍 Kathmandu, Nepal & Online
          </div>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <a href="#services">Intervention Hub</a>
            </li>
            <li>
              <a href="#services">Treatment Portal</a>
            </li>
            <li>
              <a href="#cta">Free Metabolic Audit</a>
            </li>
            <li>
              <a href="#">Corporate Program</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#team">Our team</a>
            </li>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#proof">Outcome</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Follow us</h5>
          <ul>
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © 2025 The Himalaya Health. All rights reserved.
        </p>
        <p className="footer-disc">
          This platform provides general health information and does not replace
          a formal medical consultation. All clinical services are provided by
          licensed medical professionals.
        </p>
      </div>
    </footer>
  );
}
