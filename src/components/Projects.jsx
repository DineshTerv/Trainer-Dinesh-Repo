import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="section-sub">Tools, applications, and platforms developed for training and practical use</p>
        </div>
        <div className="projects-grid reveal">
          {projectsData.map((proj, idx) => (
            <div className={`project-card ${proj.featured ? 'featured' : ''}`} key={idx}>
              <div className="project-icon">
                {idx === 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ width: '24px', height: '24px' }}>
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
                  </svg>
                )}
                {idx === 1 && (
                  <img src="/assets/skills/trees-graphs.svg" style={{ width: '24px', height: '24px' }} alt="DSA Visualizer" />
                )}
                {idx === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ width: '24px', height: '24px' }}>
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ width: '24px', height: '24px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-meta">
                  <span>{proj.meta}</span>
                  {proj.featured && <span className="featured-badge">Featured</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
