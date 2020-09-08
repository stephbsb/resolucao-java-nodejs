import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import VeiculoForm from '../components/form/VeiculoForm';
import { getVeiculoById, updateVeiculo } from '../api';

import styles from './AtualizaVeiculoPage.module.css';
import useForm from '../hooks/useForm';
import { useParams } from 'react-router-dom';

const AtualizaVeiculoPage = () => {
  const { id } = useParams();

  const { data, request, error } = useFetch();

  const [isDataPresent, setIsDataPresent] = useState(false);
  const [formError, setFormError] = useState(null);
  const veiculo = useForm('required');
  const marca = useForm('marca');
  const ano = useForm('ano');
  const descricao = useForm('required');
  const [vendido, setVendido] = useState(false);

  useEffect(() => {
    const { url, options } = getVeiculoById(id);
    request(url, options).then(({ response, json }) => {
      if (response.ok) {
        veiculo.setValue(json.veiculo.veiculo);
        marca.setValue(json.veiculo.marca);
        ano.setValue(json.veiculo.ano);
        descricao.setValue(json.veiculo.descricao);
        setVendido(json.veiculo.vendido);
        setIsDataPresent(true);
      }
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      veiculo.validate() &&
      marca.validate() &&
      ano.validate() &&
      descricao.validate()
    ) {
      setFormError(null);
      const { url, options } = updateVeiculo(
        id,
        veiculo.value,
        marca.value,
        ano.value,
        descricao.value,
        vendido
      );
      request(url, options).then(({ response }) => {
        if (response.ok) {
          veiculo.setValue('');
          marca.setValue('');
          ano.setValue('');
          descricao.setValue('');
        }
      });
    } else {
      setFormError('Dados Inválidos!');
    }
  }

  function handleSelect({ target }) {
    if (target.value === 'true') {
      setVendido(true);
    } else {
      setVendido(false);
    }
  }

  return (
    <div className={styles.cadastro}>
      {!isDataPresent ? (
        <h6>Este veiculo nao existe!</h6>
      ) : (
        <>
          <h3>AtualizaVeiculoPage</h3>
          <VeiculoForm
            onSubmit={handleSubmit}
            handleSelect={handleSelect}
            veiculo={veiculo}
            marca={marca}
            ano={ano}
            descricao={descricao}
            vendido={vendido}
          />
          {error || formError ? (
            <h6>{error || formError}</h6>
          ) : (
            data && data.message && <h6>{data.message}</h6>
          )}
        </>
      )}
    </div>
  );
};

export default AtualizaVeiculoPage;
