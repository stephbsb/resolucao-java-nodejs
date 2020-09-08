import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PesquisaVeiculoPage from './pages/PesquisaVeiculoPage';
import CadastroVeiculoPage from './pages/CadastroVeiculoPage';
import AtualizaVeiculoPage from './pages/AtualizaVeiculoPage';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container'>
          <Routes>
            <Route path='/'>
              <PesquisaVeiculoPage />
            </Route>
            <Route path='/cadastro'>
              <CadastroVeiculoPage />
            </Route>
            <Route path='/atualiza/:id'>
              <AtualizaVeiculoPage />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
