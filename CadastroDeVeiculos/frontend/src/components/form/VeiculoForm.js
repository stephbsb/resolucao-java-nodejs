import React from 'react';
import Input from './Input';
import styles from './VeiculoForm.module.css';
const veiculoForm = ({
  veiculo,
  marca,
  ano,
  descricao,
  vendido,
  onSubmit,
  handleSelect,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input label='Veiculo' name='veiculo' type='text' {...veiculo} />
      <Input label='Marca' name='marca' type='text' {...marca} />
      <Input label='Ano' name='veiculo' type='number' {...ano} />
      <Input label='Descrição' name='veiculo' type='text' {...descricao} />
      <div className={styles.select}>
        <label htmlFor='vendido'>Disponibilidade</label>
        <select
          onChange={handleSelect}
          name='vendido'
          value={vendido}
          className={styles.select}
        >
          <option value='true'>Vendido</option>
          <option value='false'>Disponível</option>
        </select>
      </div>
      <button className={styles.button} type='submit'>
        Salvar
      </button>
    </form>
  );
};

export default veiculoForm;
