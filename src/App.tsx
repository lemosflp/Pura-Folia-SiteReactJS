import React from 'react';
import './App.css';

import Header from './components/Header';
import Cabecalho from './components/Cabecalho';
import About from './components/About';
import Card from './components/Card';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Swiper from './components/Swiper'

import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Header />
      <Cabecalho />
      <About />
      <Card />
      <Swiper />
      <Contato />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
