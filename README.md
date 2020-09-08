# Descrição
Projeto contendo resolução de problemas usando Java e NodeJS e ReactJS

# JAVA

### <a href="https://github.com/stephbsb/resolucao-java-nodejs/tree/master/Eleicao">/Eleição</a>

Usa Orientação a Objetos para resolver o seguinte problema:</br></br>

**Dados os valores:**

eleitores: 1000 </br>
votos válidos: 800 </br>
brancos: 150 </br>
nulos: 50 </br>

**Calcula:**

percentual de votos validos </br>
percentual de brancos em relacao ao total de eleitores  </br>
percentual de nulos em relacao ao total de eleitores</br>

### <a href="https://github.com/stephbsb/resolucao-java-nodejs/tree/master/Fatorial/src/main">/Fatorial</a>

Calcula o fatorial de um numero passado pelo terminal usando um metodo com recusividade</br></br>


### <a href="https://github.com/stephbsb/resolucao-java-nodejs/blob/master/OrdenacaoBubbleSort/src/main/">/Ordenação Bubble Sort</a>

Faz a ordenação do vetor {5,3,2,4,7,1,0,6}. Um metodo irá receber o vetor e usa a logica buble sort para fazer a ordenação. </br>
O algoritmo consiste em varrer o loop algumas vezes e trocar os numero adjacente quando o da esquerda for maior que o da direita </br>
No pior caso o algoritmo irá passar pelo array (n - 1) vezes e a cada loop ele deve percorrer um elemento a menos. </br>

### <a href="https://github.com/stephbsb/resolucao-java-nodejs/blob/master/SomaDosMultiplos/src/main/">/SomaDosMultiplos</a>

O programa irá receber no terminal um numero natural maior que zero e deve retornar a soma de todos os numero abaixo dele que são multiplos de 3 e 5 </br></br>

### Como executar

Opção 1: Criar um projeto em alguma IDE de JAVA, baixar o zip contendo os arquivos e adicionar o arquivo no projeto e selecionar a opção run as Java Application.

Opção 2: 
```bash
# git clone https://github.com/stephbsb/resolucao-java-nodejs.git
# Abrir o terminal no diretorio contendo o arquivo .java do projeto escolhido
$ cd <caminho do diretorio>/Eleicao/src/main

# Compile o arquivo java para criar o .class
$ javac Eleicao.java

# Execute o arquivo .class gerado
$ java -cp <caminho do diretorio>/Eleicao/src main.Eleicao
```

# NodeJS & ReactJS

Leia o arquivo mais detalhado sobre a aplicação e API RESTful criada para cadastro de veículos: </br>
Back-end: <a href="https://github.com/stephbsb/resolucao-java-nodejs/blob/master/CadastroDeVeiculos/backend/">CadastroDeVeiculos/backend</a></br>
Front-end: <a href="https://github.com/stephbsb/resolucao-java-nodejs/blob/master/CadastroDeVeiculos/frontend/">CadastroDeVeiculos/frontend</a></br>


### Como executar

#### NodeJS 

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


#### ReactJS 

```bash
# git clone https://github.com/stephbsb/resolucao-java-nodejs.git
# Abrir o terminal no diretorio contendo o root do projeto
$ cd <caminho do diretorio>/CadastroDeVeiculos/frontend

# Instale as dependencias
$ npm install

# Execute a aplicação
$ npm start
```
