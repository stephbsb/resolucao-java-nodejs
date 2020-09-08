const marcas = [
  'Chevrolet',
  'Volkswagen',
  'Fiat',
  'Renault',
  'Ford',
  'Toyota',
  'Hyundai',
  'Jeep',
  'Honda',
  'Nissan',
  'Citroen',
  'Mitsubish',
  'Peugeot',
  'Chery',
  'BMW',
  'Mercedes-Benz',
  'Kia',
  'Audi',
  'Volvo',
  'Land Rover',
];

const validateMarca = (marca) => {
  if (marcas.indexOf(marca) === -1) {
    return false;
  } else {
    return true;
  }
};

export default validateMarca;
