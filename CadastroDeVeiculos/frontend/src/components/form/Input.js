import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, type, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.customInput}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
