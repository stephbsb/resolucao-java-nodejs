import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PesquisaVeiculoPage from './pages/PesquisaVeiculoPage';
import CadastroVeiculoPage from './pages/CadastroVeiculoPage';
import AtualizaCadastroPage from './pages/AtualizaCadastroPage';
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
              <AtualizaCadastroPage />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
