import React from 'react';
import '../assets/css/SectionHeader.css';

export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      <span className="subtitle-badge">{subtitle}</span>
      <h2 className="title">{title}</h2>
      <div className="accent-bar"></div>
    </div>
  );
}
