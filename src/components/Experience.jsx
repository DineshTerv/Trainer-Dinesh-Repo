import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ onOpenPoster }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Experience <span className="accent-text">Timeline</span>
          </h2>
        </div>
        <div className="timeline">
          {experienceData.map((item) => (
            <div className="timeline-item reveal" id={item.id} key={item.id}>
              <div className={`timeline-dot ${item.active ? 'active' : ''}`}></div>
              <div className={`timeline-card ${item.active ? 'active' : ''}`}>
                <div className="timeline-header">
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-period">{item.period}</div>
                </div>
                <div className="timeline-org">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    style={{ width: '14px', height: '14px', display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {item.location}
                </div>
                <ul className="timeline-points">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {item.hasPoster && (
                  <button className="announcement-btn" id="openPosterBtn" onClick={onOpenPoster}>
                    <span className="announce-pulse"></span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      style={{ width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                    </svg>
                    View My Official Announcement
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
