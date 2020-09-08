import { useState } from 'react';
import validateMarca from '../utils/validateMarca';

const types = {
  required: {
    // eslint-disable-next-line no-useless-escape
    regex: /.{2,}/,
    message: 'Obrigatório pelo menos 2 caracteres.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true; /* input não obrigatório -> useForm() */

    if (type === 'ano' && (value <= 1900 || value >= 2050)) {
      setError('Ano Inválido');
      setIsValid(false);
      return false;
    }

    if (type === 'marca' && !validateMarca(value)) {
      setError(
        'A marca não pode ser escrita de forma errada. Ex: Fiat, Renault...'
      );
      setIsValid(false);
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      setIsValid(false);
      return false;
    } else {
      setIsValid(true);
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    validate(target.value);
  }

  function clearValues() {
    setValue('');
    setError(null);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    clearValues,
    isValid,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
