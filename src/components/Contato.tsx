import React from 'react';
import './Contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contato: React.FC = () => {
  return (
    <section className="container_contato_all" id="contato">
      <h1>Entre em contato conosco<span>!</span></h1>
      <p>Basta clicar no botão abaixo ou chamar no WhatsApp:</p>
      <a href="https://api.whatsapp.com/send?phone=5551981701508" className="logo" target="_blank">
        <i className="fa-brands fa-whatsapp"></i> (55) 51 98170-1508
      </a>
      <div className='social-icons'>
        <a className='social-css' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram as any} size="2x" color='#E98448'/>
        </a>
        <a className='social-css' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook as any} size="2x" color='#E98448'/>
        </a>
        <a className='social-css' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok as any} size="2x" color='#E98448'/>
        </a>
      </div>
    </section>
  );
}

export default Contato;
