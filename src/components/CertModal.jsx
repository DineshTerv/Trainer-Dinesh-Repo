import React, { useEffect } from 'react';

export default function CertModal({ certData, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && certData) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certData, onClose]);

  if (!certData) return null;

  return (
    <div className="poster-modal open" id="certModal">
      <div className="poster-modal-overlay" onClick={onClose}></div>
      <div className="poster-modal-content">
        <button className="poster-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="poster-image-wrap">
          <img
            src={certData.src}
            alt={certData.title}
            className="poster-img"
          />
        </div>
        <div className="poster-caption">
          <span className="poster-badge">&#10003; Verified Credential</span>
          <h4 style={{ color: '#fff', margin: '8px 0 4px', fontSize: '1.15rem', fontWeight: 700 }}>
            {certData.title}
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', margin: 0 }}>
            {certData.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
