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
