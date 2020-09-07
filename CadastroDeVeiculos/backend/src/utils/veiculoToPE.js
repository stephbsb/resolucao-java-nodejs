const veiculoToPE = (veiculo) => {
  if (veiculo.vendido === 1) {
    veiculo.vendido = true;
  } else {
    veiculo.vendido = false;
  }
  return veiculo;
};

module.exports = veiculoToPE;
