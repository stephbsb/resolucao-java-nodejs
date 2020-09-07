# Descrição

Este é o backend de um cadastro de veículos baseada em web serviços usando JSON.
Uma API JSON RESTful com os métodos GET, POST, PUT, PATCH e DELETE

# Tecnologias Utilizadas

NodeJS </br>
ExpressJS </br>
Banco de Dados: sqlite3 (Relacional) </br>

# BD

O banco de dados usado é armazenado em memória no arquivo src/database/database.db
Para visualizar o banco de dados no VSCode pode ser usada a extensao SQLite.
Clique com o botão direito sobre o arquivo e depois em 'Open DataBase'.
Abra a tabela clicando sobre ela e depois em 'Show Table' (Isso deve ser feito também quando a tabela for atualizada);

## Tabela: veiculo

### estrutura

veiculo: string </br>
marca: string </br>
ano: integer </br>
descricao: text </br>
vendido: bool </br>
created: datetime </br>
updated: datetime </br>

# EndPoints

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
