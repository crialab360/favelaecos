import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import './styles/global.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

// Componente de Scroll to Top
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top ${isVisible ? 'scroll-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
};

// Componente de Cookie Consent
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-banner cookie-banner--visible`}>
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Utilizamos cookies para melhorar sua experiência. 
          <a href="/privacidade"> Saiba mais</a>
        </p>
        <div className="cookie-banner__buttons">
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={acceptCookies}>
            Aceitar
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={declineCookies}>
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

// Páginas placeholder
const Home = () => (
  <div className="app">
    <Hero />
    <div className="container section">
      <h2 className="section-title">Projetos em Destaque</h2>
      <div className="grid grid--3">
        <Card 
          title="Favela Ecos Bank"
          description="Banco comunitário e plataforma de inclusão financeira com conta digital e microcrédito para empreendedores locais."
          color="gold"
          link="/projetos"
          badge="Em destaque"
        />
        <Card 
          title="Do Lixo ao Luxo"
          description="Projeto de reciclagem que transforma resíduos em produtos sustentáveis de alto valor, gerando renda e preservando o meio ambiente."
          color="green"
          link="/projetos"
        />
        <Card 
          title="Cria Lab 360"
          description="Hub criativo para produção audiovisual, marketing digital e gestão de artistas periféricos."
          color="purple"
          link="/projetos"
        />
      </div>
    </div>
  </div>
);

const Sobre = () => (
  <div className="container section fade-in-scroll is-visible">
    <h1 className="section-title">Sobre a Favela Ecos</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

const Projetos = () => (
  <div className="container section">
    <h1 className="section-title">Nossos Projetos</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

const Impacto = () => (
  <div className="container section">
    <h1 className="section-title">Impacto Social</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

const BrasilAfrica = () => (
  <div className="container section">
    <h1 className="section-title">Brasil ↔ África</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

const Parceiros = () => (
  <div className="container section">
    <h1 className="section-title">Nossos Parceiros</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

const Investidores = () => (
  <div className="container section">
    <h1 className="section-title">Para Investidores</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

const Contato = () => (
  <div className="container section">
    <h1 className="section-title">Contato</h1>
    <p style={{ textAlign: 'center', color: '#333' }}>Conteúdo em desenvolvimento...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/impacto" element={<Impacto />} />
            <Route path="/brasil-africa" element={<BrasilAfrica />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/investidores" element={<Investidores />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;