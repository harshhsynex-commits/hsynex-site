import '../assets/css/SectionHeader.css';

export default function SectionHeader({ title, subtitle, description, centered = true }) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      {subtitle && (
        <span className="subtitle-badge">
          <span className="subtitle-dot"></span>
          {subtitle}
        </span>
      )}
      {title && <h2 className="section-title-heading">{title}</h2>}
      {description && <p className="section-desc-text">{description}</p>}
      <div className="accent-glow-line"></div>
    </div>
  );
}
