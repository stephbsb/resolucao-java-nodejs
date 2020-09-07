import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <ul>
          <li>
            <NavLink to='/' activeClassName={styles.active}>
              Pesquisar
            </NavLink>
          </li>
          <li>
            <NavLink to='/cadastro' activeClassName={styles.active}>
              Cadastrar Veiculo
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
