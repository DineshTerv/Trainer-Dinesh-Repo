import React from 'react';
import { collegesData } from '../data/portfolioData';

export default function Colleges() {
  return (
    <section className="section section-alt" id="colleges">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Where I've Trained</span>
          <h2 className="section-title">
            College <span className="accent-text">Experience</span>
          </h2>
          <p className="section-sub">Proud to have delivered training across these institutions in Tamil Nadu &amp; nationwide</p>
        </div>

        {/* REAL COLLEGE TRAINING SESSION BANNER */}
        <div className="college-live-banner reveal">
          <div className="college-banner-img-wrap">
            <img
              src="/college_training_session.jpg"
              alt="Dinesh N Conducting Live Technical Training Session in College"
              className="college-banner-img"
              loading="lazy"
            />
            <div className="college-banner-overlay">
              <div className="banner-badge">
                <span className="badge-dot"></span>Live Campus Masterclass
              </div>
              <h3>Empowering Engineering Students Across Tamil Nadu</h3>
              <p>
                Delivering high-energy hands-on coding bootcamps, placement training, Java &amp; DSA problem-solving workshops across 1,200+ top institutions.
              </p>
            </div>
          </div>
        </div>

        {/* COLLEGES GRID */}
        <div className="colleges-grid reveal">
          {collegesData.map((col, idx) => (
            <div className="college-card" key={idx}>
              <div className="college-abbr">{col.abbr}</div>
              <div className="college-info">
                <h3>{col.name}</h3>
                <p>
                  {col.location} &bull; B.E / B.Tech
                </p>
                <div className="college-tags">
                  {col.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
