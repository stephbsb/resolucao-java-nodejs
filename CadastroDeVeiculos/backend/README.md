# Descrição

Este é o backend de um cadastro de veículos baseada em web serviços usando JSON.
Uma API JSON RESTful com os métodos GET, POST, PUT, PATCH e DELETE

# Tecnologias Utilizadas

NodeJS </br>
ExpressJS </br>
Banco de Dados: sqlite3 (Relacional) </br>

# Banco de Dados

O banco de dados usado é armazenado em memória no arquivo src/database/database.db</br>
Para visualizar o banco de dados no VSCode pode ser usada a extensao SQLite.</br>
Clique com o botão direito sobre o arquivo e depois em 'Open DataBase'.</br>
Abra a tabela clicando sobre ela e depois em 'Show Table' (Isso deve ser feito também quando a tabela for atualizada);

## Tabela: veiculo

### estrutura

| Atributo  | Tipo     |
| --------- | -------- |
| veiculo   | string   |
| marca     | string   |
| ano       | integer  |
| descricao | text     |
| vendido   | bool     |
| created   | datetime |
| updated   | datetime |

# EndPoints

Documentação da api: <a href="https://github.com/stephbsb/resolucao-java-nodejs/tree/master/CadastroDeVeiculos/backend/doc/api_tinnova.postman_collection.json"> postman_collection </a> </br>

Importe a documentação no postman. Contem exemplos de respostas esperadas para cada requisição.
ou [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9d2f3b66d915fed20d16)

#### GET /veiculos

Retorna todos os veiculos

#### GET /veiculos/find?q=value

Retorna os veiculos de acordo com o termo passado como parametro

#### GET /veiculos/{id}

Retorna os detalhes do veiculo

#### POST /veiculos

Adiciona um novo veiculo

#### PUT /veiculos/{id}

Atualiza os dados de um veiculo

#### PATCH /veiculos/{id}

Atualiza alguns dados do veiculo

#### DELETE /veiculos/{id}

Apaga o veiculo

# Como Executar

```bash
# git clone https://github.com/stephbsb/resolucao-java-nodejs.git
# Abrir o terminal no diretorio contendo o root do projeto
$ cd <caminho do diretorio>/CadastroDeVeiculos/backend

# Instale as dependencias
$ npm install

# Execute a aplicação
$ npm start

# A API irá ouvir requisições na porta 5000
```
