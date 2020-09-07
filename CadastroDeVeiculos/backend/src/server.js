const express = require('express');
const bodyParser = require('body-parser');

const veiculosRoutes = require('./routes/veiculosRoutes');

const app = express();
app.use(bodyParser.json());

// headers para lidar com erro de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept,Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );

  next();
});

// middleware que filtra rotas para caminhos iniciados com /veiculos
app.use('/veiculos', veiculosRoutes);

// Se rota nao existe retorna um erro
app.use((req, res, next) => {
  const error = new Error('Rota nao encontrada');
  error.statusCode = 404;
  return next(error);
});

// retorna mensagens de erro para o usuário
app.use((error, req, res, next) => {
  console.log(error);
  if (res.headerSent) {
    return next(error);
  }

  console.log(error.message);
  res.status(error.code || 500);
  res.json({ error: error.message || 'Um erro ocorreu.' });
});

// a aplicação irá ouvir todos os requests na porta 5000
app.listen(5000);
