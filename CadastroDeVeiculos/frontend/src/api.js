const API_URL = 'http://localhost:5000';

export function getVeiculos() {
  return {
    url: API_URL + '/veiculos',
    options: {
      method: 'GET',
    },
  };
}

export function deleteVeiculo(id) {
  return {
    url: API_URL + `/veiculos/${id}`,
    options: {
      method: 'DELETE',
    },
  };
}

export function createVeiculo(veiculo, marca, ano, descricao, vendido) {
  return {
    url: API_URL + `/veiculos`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        veiculo: veiculo,
        marca: marca,
        ano: Number.parseInt(ano),
        descricao: descricao,
        vendido: vendido,
      }),
    },
  };
}

export function getVeiculoById(id) {
  return {
    url: API_URL + '/veiculos/' + id,
    options: {
      method: 'GET',
    },
  };
}

export function updateVeiculo(id, veiculo, marca, ano, descricao, vendido) {
  return {
    url: API_URL + `/veiculos/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        veiculo: veiculo,
        marca: marca,
        ano: Number.parseInt(ano),
        descricao: descricao,
        vendido: vendido,
      }),
    },
  };
}
