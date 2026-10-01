import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'dsa', label: 'DSA' },
    { id: 'web', label: 'Web Dev' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I Teach &amp; Use</span>
          <h2 className="section-title">
            My <span className="accent-text">Skills</span>
          </h2>
          <p className="section-sub">A blend of technical depth and teaching expertise across domains</p>
        </div>

        {/* TABS */}
        <div className="skill-tabs reveal">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CARDS GRID */}
        <div className="skill-cards-grid reveal">
          {filteredSkills.map((skill) => (
            <div className="sk-card" key={skill.name} data-cat={skill.category}>
              <div className="sk-card-top">
                <div className={`sk-icon ${skill.iconClass}`}>
                  <img src={skill.logo} alt={skill.name} className="sk-svg-icon" />
                </div>
                <div className="sk-info">
                  <span className="sk-name">{skill.name}</span>
                  <span className="sk-cat-tag">{skill.catLabel}</span>
                </div>
                <span className="sk-percent">{skill.percent}%</span>
              </div>
              <p className="sk-desc">{skill.desc}</p>
              <div className="sk-bar">
                <div
                  className="sk-fill"
                  style={{ width: `${skill.percent}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
              <span className={`sk-badge ${skill.badge.toLowerCase()}`}>{skill.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
