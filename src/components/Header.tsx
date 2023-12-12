import React, { useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header') as HTMLElement;
      header?.classList.toggle('rolagem', window.scrollY > 250);

      const botaoVoltar = document.getElementById('botao-voltar') as HTMLElement;
      if (window.scrollY > 50 * window.innerHeight / 50) {
        botaoVoltar.style.display = 'block';
      } else {
        botaoVoltar.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const voltarAoInicio = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="header">
      <a href="#" className="logo_pura">
        <img src="/images/dinopng.png" alt="Logo Pura Folia" />
      </a>
      <nav>
        <ul className='navbar-container'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
        </ul>
      </nav>

      <div className="bt-contato">
        <a href="#contato"><button>CONTATO</button></a>
      </div>

      <button id="botao-voltar" style={{ display: 'none' }} onClick={voltarAoInicio}>
      ↿
      </button>

    </header>
  );
}

export default Header;

