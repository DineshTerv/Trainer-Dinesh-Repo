import React, { useState, useEffect, useRef } from 'react';
import { aboutStats } from '../data/portfolioData';

export default function About() {
  const [counts, setCounts] = useState(aboutStats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts(
              aboutStats.map((stat) => {
                if (currentStep >= steps) return stat.value;
                return Math.floor(stat.value * Math.min(progress, 1));
              })
            );

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">
            About <span className="accent-text">Me</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-lead">
              I'm <strong>Dinesh N</strong>, a passionate <strong>Technical Trainer &amp; Training Team Lead</strong> based in Namakkal, Tamil Nadu, dedicated to bridging the gap between college education and real-world tech industry demands.
            </p>
            <p className="about-body">
              With hands-on expertise in <strong>Java, DSA, Python, Full Stack Development</strong> and <strong>Problem Solving</strong>, I have trained thousands of engineering students across 1,200+ colleges. I specialize in making complex topics simple, engaging, and industry-relevant.
            </p>
            <p className="about-body">
              My journey started as a Technical Trainer, grew into a Master Technical Trainer, then Senior Master Technical Trainer, and now I lead training teams, design curriculum, and coordinate with college placement cells to deliver maximum placement impact.
            </p>
            <p className="about-body">
              I believe every student deserves <strong>quality technical education</strong>, and I make it happen, one batch at a time.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Live Classroom &amp; Online Training
              </div>
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Curriculum Design &amp; Content Creation
              </div>
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Placement-Oriented DSA &amp; Problem Solving
              </div>
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Trainer Mentoring &amp; Team Leadership
              </div>
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Assessment Design &amp; Technical Evaluation
              </div>
            </div>
          </div>

          <div className="stats-grid reveal">
            {aboutStats.map((stat, idx) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-number">{counts[idx].toLocaleString()}</div>
                {stat.plus && <div className="stat-plus">+</div>}
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
