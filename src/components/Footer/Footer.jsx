import React from 'react';
import './Footer.scss';
import { FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com/favelaecos', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com/favelaecos', label: 'YouTube' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/favelaecos', label: 'LinkedIn' },
    { icon: <FaTiktok />, url: 'https://tiktok.com/@favelaecos', label: 'TikTok' },
    { icon: <FaTwitter />, url: 'https://twitter.com/favelaecos', label: 'Twitter' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/5511999999999', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Impacto Social', path: '/impacto' },
    { name: 'Seja Parceiro', path: '/parceiros' },
    { name: 'Para Investidores', path: '/investidores' },
  ];

  const projects = [
    { name: 'Favela Ecos Bank', path: '/projetos#bank' },
    { name: 'Do Lixo ao Luxo', path: '/projetos#lixo-luxo' },
    { name: 'Intercâmbio BR ↔ AF', path: '/brasil-africa' },
    { name: 'Cria Lab 360', path: '/projetos#cria-lab' },
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    console.log('Newsletter signup:', email);
    alert('Obrigado por se inscrever!');
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">FAVELA ECOS</h3>
            <p className="footer__description">
              Ecossistema de Impacto Social, Tecnologia e Economia Comunitária. 
              Transformando periferias em polos de inovação e desenvolvimento sustentável.
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Links Rápidos</h4>
            <ul className="footer__links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Projetos</h4>
            <ul className="footer__links">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link to={project.path} className="footer__link">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Contato</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <MdEmail className="footer__contact-icon" />
                <a href="mailto:favelaecos@gmail.com">favelaecos@gmail.com</a>
              </div>
              <div className="footer__contact-item">
                <MdPhone className="footer__contact-icon" />
                <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
              </div>
              <div className="footer__contact-item">
                <MdLocationOn className="footer__contact-icon" />
                <span>São Paulo, Brasil | África</span>
              </div>
            </div>
            
            <div className="footer__newsletter">
              <h5 className="footer__newsletter-title">Newsletter</h5>
              <form className="footer__newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn">
                  Inscrever
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Favela Ecos. Todos os direitos reservados.</p>
          <div className="footer__bottom-links">
            <Link to="/privacidade">Política de Privacidade</Link>
            <Link to="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;