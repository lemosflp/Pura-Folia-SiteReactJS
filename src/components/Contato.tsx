import './Contato.css';
import axios from 'axios';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    phone: '',
    type: '',
    year: '',
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
    axios.post("http://localhost:3001/order", formData)
    setFormData({
      customerName: '',
      customerEmail: '',
      phone: '',
      type: '',
      year: '',
    })
    toast("Dados enviados com sucesso!")
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
          <input type="text" name="customerName" placeholder="Nome" value={formData.customerName} onChange={handleChange} />
        </label>

        <label>
          <input type="email" name="customerEmail" placeholder="Email" value={formData.customerEmail} onChange={handleChange} />
        </label>

        <label>
          <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} />
        </label>

        <label>
          <select name="type"  value={formData.type} onChange={handleChange}>
            <option value="">Tipo de Festa</option>
            <option value="adulta">Adulto</option>
            <option value="infantil">Infantil</option>
          </select>
        </label>

        <label>
          <input type="number" name="year" placeholder="Ano de Realização" value={formData.year} onChange={handleChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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
