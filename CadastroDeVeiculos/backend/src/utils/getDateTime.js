/* Retorna data e hora no formato datetime para SQL: YYYY-MM-DD HH:MM:SS */
/* Reference: https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString */
const getDateTime = () => {
  let options = {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const date = new Date().toLocaleString('pt-BR', options);

  return date;
};
module.exports = getDateTime;
