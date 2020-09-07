import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { getVeiculos } from '../api';
import VeiculoCard from '../components/card/VeiculoCard';

import styles from './PesquisaVeiculoPage.module.css';

const PesquisaVeiculoPage = () => {
  const { data, request, error } = useFetch();
  const { change, setChange } = useState(false);

  useEffect(() => {
    const { url, options } = getVeiculos();
    request(url, options).then(({ json }) => console.log(json));
  }, [request, change]);

  function handleDelete() {
    setChange(!change);
  }

  return (
    <div className={styles.pesquisa}>
      {data && data.veiculos && data.veiculos.length ? (
        data.veiculos.map((veiculo) => (
          <VeiculoCard
            key={veiculo.id}
            dados={veiculo}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <div>Não há veiculos para mostrar</div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default PesquisaVeiculoPage;
