import React from "react";
import { team } from "../../data/content.js";
import "./Team.css";

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="s-label">Our team</div>
      <h2 className="s-h2">
        Clinicians who treat
        <br />
        <em>the whole picture.</em>
      </h2>
      <p className="s-body">
        Every client gets a dedicated three-person team who collaborate on your
        case continuously — not episodically.
      </p>

      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <div className="tc-photo">
              <img src={member.photo} alt={member.name} className="tc-img" />
            </div>
            <div className="tc-info">
              <div className="tc-name">{member.name}</div>
              <div className="tc-role">{member.role}</div>
              <div className="tc-bio">{member.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
