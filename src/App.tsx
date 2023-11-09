import React from 'react';
import './App.css'; // Importe seu arquivo CSS aqui

// Importe os componentes que você criou
// Em App.tsx
import Header from './components/Header';
import Cabecalho from './components/Cabecalho';
import About from './components/About';
import Card from './components/Card';
import Contato from './components/Contato';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Cabecalho />
      <About />
      <Card />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
