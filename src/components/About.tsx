import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="container_about_all" id="about">
      <div className="container_about">
        <h1>Sobre nós<span>:</span></h1>
        <p>Desde 2017 a Casa de festas <span>: Pura Folia</span> realiza festas infantis, 15 anos, formatura, casamentos ou qualquer tipo de evento que imaginar! Localizado na cidade de Canoas, temos um amplo espaço para até 160 convidados, nosso espaço é todo térreo pensando na acessibilidade. Temos dois ambientes separados entre decoração/convidados e área dos brinquedos, ambas integradas para que todos participem da festa.<br></br><br></br> O <span>SALÃO PRINCIPAL</span> é planejado para que todos se sintam confotáveis para aproveitar a festa. Cantinho instagramavel, Pista de Led, iluminações profissionais para balada!<br></br><br></br> A área Kids possui brinquedos que atendem a <span className='span2'>TODAS</span> as idades, desde área babym brinquedão, tombo legal à sinuca, ping-pong, etc.
          
        </p>
      </div>
      <div className="container_about_img">
        <img src="/images/salaobrinq.JPG" alt="Salão Brinquedos" />
        <img src="/images/salaobrinq2.JPG" alt="Salão Brinquedos" />
      </div>
    </section>
  );
}

export default About;
