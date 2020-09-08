import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { getVeiculos, getVeiculoByParam } from '../api';
import VeiculoCard from '../components/card/VeiculoCard';
import Input from '../components/form/Input';
import useForm from '../hooks/useForm';

import styles from './PesquisaVeiculoPage.module.css';

const PesquisaVeiculoPage = () => {
  const { data, request, error } = useFetch();
  const [change, setChange] = useState(false);
  const [busca, setBusca] = useState(false);
  const [select, setSelect] = useState('');
  const fabricante = useForm('marca');

  useEffect(() => {
    const { url, options } = getVeiculos();
    request(url, options).then(({ json }) => console.log(json));
  }, [change]);

  useEffect(() => {
    setBusca(false);
  }, [fabricante.value]);

  function handleDelete() {
    setChange(!change);
  }

  function handleSelect({ target }) {
    setSelect(target.value);
    setBusca(false);
    if (target.value === '1') {
      const { url, options } = getVeiculoByParam('vendido', false);
      request(url, options).then(({ json }) => console.log(json));
    }
  }

  function handleSubmitButton({ target }) {
    const { url, options } = getVeiculoByParam('marca', fabricante.value);
    request(url, options).then(({ json }) => {
      if (json.veiculos) {
        setBusca(true);
      }
    });
  }

  return (
    <>
      <div className={styles.select}>
        <label htmlFor='find'>Opções de busca</label>
        <select
          onChange={handleSelect}
          name='find'
          className={styles.select}
          value={select}
        >
          <option value='' disabled>
            Selecione uma opção
          </option>
          <option value='1'>Quantidade de veiculos não vendidos</option>
          <option value='2' disabled>
            Veiculos por década de fabricação (pending)
          </option>
          <option value='3'>Veículos por fabricante</option>
          <option value='4' disabled>
            Registrados na ultima semana (pending)
          </option>
        </select>
      </div>
      {select === '1' && data && data.veiculos && (
        <div>Quantidade de veículos não vendidos: {data.veiculos.length}</div>
      )}
      {select === '2' && data && data.veiculos && (
        <div>
          Quantidade de veículos fabricados na decada de ?:
          {data.veiculos.length}
        </div>
      )}
      {select === '3' && (
        <>
          <Input
            label='Entre com um fabricante'
            name={fabricante}
            type='text'
            {...fabricante}
          />
          <button className={styles.button} onClick={handleSubmitButton}>
            Buscar
          </button>

          {fabricante.isValid && busca && data && (
            <div>
              Quantidade de veículos fabricados por {fabricante.value}:{' '}
              {data.veiculos.length}
            </div>
          )}
        </>
      )}
      {(select === '4' || select === '') && (
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
      )}
    </>
  );
};

export default PesquisaVeiculoPage;
