/**
 * Altera o formato do objeto veiculo para ser passado para o usuário.
 * No banco de dados SQlite3 o tipo booleano de dados é salvo como 0 ou 1,
 * Nesta função o veiculo transforma em true ou false, e retorna o objeto
 * modificado
 * @param {Object} veiculo - Objeto veículo em seu formato original
 * @return {Object} veiculo - Objeto veiculo modificado para UI
 */
const veiculoToPE = (veiculo) => {
  if (veiculo.vendido === 1) {
    veiculo.vendido = true;
  } else {
    veiculo.vendido = false;
  }
  return veiculo;
};

module.exports = veiculoToPE;
