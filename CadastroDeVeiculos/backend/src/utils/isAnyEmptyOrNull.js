/**
 * Função para verificar valores passados por um array.
 * Retorna true se algum dos elesmentos do array é 'undefined', 'null'
 * ou vazio.
 * @param {Array} collection - Array a ser verificado
 * @return {Boolean} - Retorna true se algum dos elesmentos do array é
 * 'undefined', 'null' ou '' */
exports.isAnyEmptyOrNull = (collection) => {
  let result = false;

  collection.forEach((element) => {
    if (element === null || element === undefined || element === '') {
      result = true;
    }
  });

  return result;
};
