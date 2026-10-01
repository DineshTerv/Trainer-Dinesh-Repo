import React from 'react';
import { certsData } from '../data/portfolioData';

export default function Certifications({ onOpenCert }) {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Credentials &amp; Achievements</span>
          <h2 className="section-title">
            Certifications &amp; <span className="accent-text">Achievements</span>
          </h2>
          <p className="section-sub">Verified industry credentials, problem-solving honors, and leadership awards</p>
        </div>
        <div className="certs-grid reveal">
          {certsData.map((cert) => (
            <div
              className="cert-card"
              key={cert.id}
              id={cert.id}
              onClick={() => onOpenCert(cert.image, cert.title, cert.subtitle)}
            >
              <div className="cert-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-img" loading="lazy" />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    View Full Certificate
                  </span>
                </div>
              </div>
              <div className="cert-ribbon"></div>
              <div className="cert-header-row">
                <div className={`cert-logo ${cert.logoClass}`}>{cert.logoText}</div>
                <div className="cert-verify">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified
                </div>
              </div>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p>{cert.org}</p>
                <span className="cert-year">{cert.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
