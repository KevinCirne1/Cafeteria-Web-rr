import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />  {/* Renderiza as rotas filhas aqui */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
