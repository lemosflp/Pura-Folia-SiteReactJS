import React, { useState } from 'react';
import './Contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    tipoFesta: '', // adulta ou infantil
    anoRealizacao: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Adicione lógica adicional aqui, como enviar os dados para o servidor, se necessário.
  };
  
  return (
    <section className="container_contato_all" id="contato">
      <h1>Entre em contato conosco<span>!</span></h1>
      <p>Basta clicar no botão abaixo ou chamar no WhatsApp:</p>
      <a href="https://api.whatsapp.com/send?phone=5551981701508" className="logo" target="_blank">
        <i className="fa-brands fa-whatsapp"></i> (55) 51 98170-1508
      </a>

      <form className="contato-form" onSubmit={handleSubmit}>
        <h2>Peça seu orçamento<span>!</span></h2>
        <label>
          <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        </label>

        <label>
          <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
        </label>

        <label>
          <select name="tipoFesta" placeholder="Tipo de Festa" value={formData.tipoFesta} onChange={handleChange}>
            <option value="">Tipo de Festa</option>
            <option value="adulta">Adulto</option>
            <option value="infantil">Infantil</option>
          </select>
        </label>

        <label>
          <input type="number" name="anoRealizacao" placeholder="Ano de Realização" value={formData.anoRealizacao} onChange={handleChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>

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
      {/* console.log('Dados do formulário:', formData); */}
    </section>
  );
}

export default Contato;

// import React, { useState } from 'react';
// import './Contato.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

// const Contato: React.FC = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     telefone: '',
//     tipoFesta: '', 
//     anoRealizacao: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://exemplo.com/api/enviar-formulario', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Formulário enviado com sucesso!');
//       } else {
//         console.error('Erro ao enviar formulário:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Erro ao enviar formulário:', error.message);
//     }
//   };

//   return (
//     <section className="container_contato_all" id="contato">
//       <h1>Entre em contato conosco<span>!</span></h1>
//       <p>Basta clicar no botão abaixo ou chamar no WhatsApp:</p>
//       <a href="https://api.whatsapp.com/send?phone=5551981701508" className="logo" target="_blank">
//         <i className="fa-brands fa-whatsapp"></i> (55) 51 98170-1508
//       </a>

//       <form className="contato-form" onSubmit={handleSubmit}>
//         <h2>Peça seu orçamento<span>!</span></h2>
//         <label>
//           <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
//         </label>

//         <label>
//           <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
//         </label>

//         <label>
//           <select name="tipoFesta" placeholder="Tipo de Festa" value={formData.tipoFesta} onChange={handleChange}>
//             <option value="">Tipo de Festa</option>
//             <option value="adulta">Adulto</option>
//             <option value="infantil">Infantil</option>
//           </select>
//         </label>

//         <label>
//           <input type="number" name="anoRealizacao" placeholder="Ano de Realização" value={formData.anoRealizacao} onChange={handleChange} />
//         </label>

//         <button type="submit">Enviar</button>
//       </form>

//       <div className='social-icons'>
//         <a className='social-css' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faInstagram as any} size="2x" color='#E98448'/>
//         </a>
//         <a className='social-css' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faFacebook as any} size="2x" color='#E98448'/>
//         </a>
//         <a className='social-css' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faTiktok as any} size="2x" color='#E98448'/>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Contato;

