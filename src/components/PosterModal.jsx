import React, { useEffect } from 'react';

export default function PosterModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="poster-modal open" id="posterModal">
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
            src="/training_lead_poster.jpg"
            alt="Dinesh N - Training Team Lead Announcement by TERV &amp; Top Freshers"
            className="poster-img"
          />
        </div>
        <div className="poster-caption">
          <span className="poster-badge">&#127881; Official Announcement</span>
          <p>
            Dinesh N appointed as <strong>Training Team Lead</strong> at TERV &times; Top Freshers
          </p>
        </div>
      </div>
    </div>
  );
}
