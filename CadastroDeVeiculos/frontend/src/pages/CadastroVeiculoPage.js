import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import VeiculoForm from '../components/form/VeiculoForm';
import { createVeiculo } from '../api';

import styles from './CadastroVeiculoPage.module.css';
import useForm from '../hooks/useForm';

const CadastroVeiculoPage = () => {
  const { data, request, error } = useFetch();
  const [formError, setFormError] = useState(null);
  const veiculo = useForm('required');
  const marca = useForm('marca');
  const ano = useForm('ano');
  const descricao = useForm('required');
  const [vendido, setVendido] = useState(false);

  useEffect(() => {}, [request]);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      veiculo.validate() &&
      marca.validate() &&
      ano.validate() &&
      descricao.validate()
    ) {
      setFormError(null);
      const { url, options } = createVeiculo(
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
      <h3>Cadastro de Veiculo</h3>
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
    </div>
  );
};

export default CadastroVeiculoPage;
