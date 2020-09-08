import React, { useEffect } from 'react';

import styles from './VeiculoCard.module.css';
import useFetch from '../../hooks/useFetch';
import { deleteVeiculo } from '../../api';
import { Link } from 'react-router-dom';

const VeiculoCard = ({ dados, handleDelete }) => {
  const {
    id,
    veiculo,
    marca,
    ano,
    descricao,
    vendido,
    created,
    updated,
  } = dados;

  const { request, data } = useFetch();

  function handleDeleteVeiculo() {
    if (window.confirm('Deseja deletar o veiculo?')) {
      const { url, options } = deleteVeiculo(id);
      request(url, options).then(({ json }) => {
        console.log(json);
        handleDelete();
      });
    }
  }

  return (
    <div className={styles.card}>
      <ul>
        <li>
          <b>Veiculo:</b> {veiculo}
        </li>
        <li>
          <b>Marca:</b> {marca}
        </li>
        <li>
          <b>Ano:</b> {ano}
        </li>
        <li>
          <b>Descrição:</b> {descricao}
        </li>
        <li>
          <b>Disponibilidade:</b> {vendido ? 'Vendido' : 'Disponível'}
        </li>
        <li>
          <b>Data de Cadastro:</b>{' '}
          {created.split(' ')[0].split('-').reverse().join('/')}
        </li>
        <li>
          <b>Ultimo Update:</b>{' '}
          {updated.split(' ')[0].split('-').reverse().join('/')}
        </li>
      </ul>
      <div className={styles.cardButtons}>
        <Link to={`/atualiza/${id}`} className={styles.atualizaButton}>
          Atualizar
        </Link>
        <button onClick={handleDeleteVeiculo}>Deletar</button>
      </div>
    </div>
  );
};

export default VeiculoCard;
