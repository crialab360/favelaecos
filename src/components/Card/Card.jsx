import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  icon, 
  color = 'green',
  link,
  onClick,
  children,
  stats,
  badge
}) => {
  const colorClass = `card--${color}`;

  return (
    <div className={`card ${colorClass}`} onClick={onClick}>
      {badge && <span className="card__badge">{badge}</span>}
      {icon && <div className="card__icon">{icon}</div>}
      {title && <h3 className="card__title">{title}</h3>}
      {description && <p className="card__description">{description}</p>}
      {stats && (
        <div className="card__stats">
          {stats.map((stat, index) => (
            <div key={index} className="card__stat">
              <span className="card__stat-number">{stat.number}</span>
              <span className="card__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
      {children}
      {link && (
        <Link to={link} className="card__link">
          Saiba mais →
        </Link>
      )}
    </div>
  );
};

export default Card;