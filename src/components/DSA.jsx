import React from 'react';

export default function DSA() {
  const dsaStats = [
    { label: "Students Trained in DSA", target: 15000, icon: "./assets/skills/training.svg" },
    { label: "Colleges Covered", target: 1200, iconType: "svg" },
    { label: "Training Days", target: 500, iconType: "cal" },
    { label: "Problems Curated", target: 300, iconType: "bulb" }
  ];

  const dsaTopics = [
    { name: "Java", fill: "95%", icon: "./assets/skills/java.svg", desc: "Core Java, OOP, Collections, Multithreading, Design Patterns, JVM internals" },
    { name: "Python", fill: "82%", icon: "./assets/skills/python.svg", desc: "Python basics, OOP, file handling, modules, automation scripts" },
    { name: "C / C++", fill: "78%", icon: "./assets/skills/cpp.svg", desc: "Pointers, memory management, structures, arrays, competitive coding" },
    { name: "LeetCode", fill: "88%", icon: "./assets/skills/linear-dsa.svg", desc: "Easy to Hard problems, interview patterns, sliding window, two pointer, BFS/DFS" },
    { name: "Interview Prep", fill: "90%", icon: "./assets/skills/training.svg", desc: "Mock interviews, time complexity analysis, system design basics, coding rounds" },
    { name: "Coding Challenges", fill: "85%", icon: "./assets/skills/dp.svg", desc: "HackerRank, CodeChef, Codeforces contests, hackathons & competitive coding" }
  ];

  return (
    <section className="section section-alt" id="dsa">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Problem Solving Mastery</span>
          <h2 className="section-title">
            DSA &amp; <span className="accent-text">Training Impact</span>
          </h2>
          <p className="section-sub">Making competitive programming accessible and placement-ready for every student</p>
        </div>

        <div className="dsa-stats reveal">
          {dsaStats.map((st, i) => (
            <div className="dsa-stat-card" key={i}>
              <div className="dsa-icon">
                {st.icon && <img src={st.icon} style={{ width: '28px', height: '28px' }} alt={st.label} />}
                {st.iconType === 'svg' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ width: '28px', height: '28px' }}>
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
                  </svg>
                )}
                {st.iconType === 'cal' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ width: '28px', height: '28px' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )}
                {st.iconType === 'bulb' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ width: '28px', height: '28px' }}>
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <div className="dsa-number">{st.target.toLocaleString()}</div>
              <div className="dsa-plus">+</div>
              <div className="dsa-label">{st.label}</div>
            </div>
          ))}
        </div>

        <div className="dsa-topics reveal">
          {dsaTopics.map((top) => (
            <div className="dsa-topic-card" key={top.name}>
              <div className="topic-header">
                <span className="topic-icon">
                  <img src={top.icon} style={{ width: '20px', height: '20px', display: 'inline-block', verticalAlign: 'middle' }} alt={top.name} />
                </span>
                <h3>{top.name}</h3>
              </div>
              <p>{top.desc}</p>
              <div className="topic-bar">
                <div className="topic-fill" style={{ width: top.fill }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
