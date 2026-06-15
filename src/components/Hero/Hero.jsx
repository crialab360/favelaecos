import React from 'react';
import './Hero.scss';
import { FaArrowRight, FaChartLine, FaRecycle, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, description, ctaText, ctaLink }) => {
  const stats = [
    { icon: <FaUsers />, number: '5000+', label: 'Empregos Gerados' },
    { icon: <FaChartLine />, number: 'R$50M+', label: 'Renda Movimentada' },
    { icon: <FaRecycle />, number: '10K+', label: 'Toneladas Recicladas' },
  ];

  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          {title || 'FAVELA ECOS'}
        </h1>
        <h2 className="hero__subtitle">
          {subtitle || 'Ecossistema de Impacto Social, Tecnologia e Economia Comunitária'}
        </h2>
        <p className="hero__description">
          {description || 'Transformando periferias em ecossistemas de inovação, conectando Brasil e África através da tecnologia, sustentabilidade e economia comunitária.'}
        </p>
        {ctaText && (
          <Link to={ctaLink} className="hero__cta">
            {ctaText}
            <FaArrowRight className="hero__cta-icon" />
          </Link>
        )}
      </div>
      <div className="hero__stats">
        {stats.map((stat, index) => (
          <div key={index} className="hero__stat">
            <div className="hero__stat-icon">{stat.icon}</div>
            <span className="hero__stat-number">{stat.number}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="hero__scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;