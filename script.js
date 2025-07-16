let nome= '   Paulo Cardoso       ';
console.log(nome.trim()); //Remove espaços em branco no início e no fim da String
console.log(nome.trimStart()); //Remove espaços em branco no início
console.log(nome.trimEnd());//Remove espaços em branco no fim da String

let titulo = 'Práticas avançadas em javascript';
console.log(titulo.toUpperCase());
console.log(titulo.toLowerCase());

let tituloPython = titulo.replace('javascript', 'python'); //Procura a string 'javascript' e troca por 'python'.
console.log(tituloPython);

let tituloSemLetraA = titulo.replace('a', 'x'); //Troca A PRIMEIRA ocorrência do caractere a
console.log(tituloSemLetraA);

tituloSemLetraA = titulo.replaceAll('a', 'x') //Troca TODAS as ocorrência do caractere a
console.log(tituloSemLetraA);

//Índices
let index = titulo.indexOf('javascript'); //Mostra a posição da primeira ocorrência de um determinado valor em uma string ou array
console.log(index);

//Substrings
let subtitulo = titulo.substring(12, 16) //Extrai uma parte de uma string, retornando uma nova string que contém os caracteres especificados entre dois índices
console.log(subtitulo);

subtitulo = titulo.substring(index) // Faz a extração a partir da posição index que já foi calculada
console.log(subtitulo);

subtitulo = titulo.slice(-index); //Permite que se coloque índices negativos
console.log(subtitulo);

let nomeCliente = 'Maria Joana da Silva Alves';
console.log(nomeCliente); 
console.log(nomeCliente.startsWith('Joana')); //output: false
console.log(nomeCliente.endsWith('da Silva')); //output: true
console.log(nomeCliente.includes('Joana')); //output: true

//Função que lê o nomeCliente e verifica se tem incluso na String o termo da Silva
let clienteSilva = nomeCliente.includes("da Silva");
if(clienteSilva){
    console.log("Sim, o cliente tem o sobrenome da Silva");
}else{
    console.log("Não, o cliente não tem o sobrenome da Silva");
}

//Transformar String em array
let disciplinas = 'frontend, bakend, banco de dados, git';
let listaDisciplinas = disciplinas.split(', ');
console.log(disciplinas);
console.log(listaDisciplinas);

//concat - Juntar uma String com outras strings
disciplinas = disciplinas.concat(", ", "react", ", ", "python");
console.log(disciplinas);

//Exercícios
const cliente = "   João   ";
console.log(cliente.trim());

const aluna = 'Ana';
console.log(aluna.toUpperCase());

const livro = 'O livro antigo foi revisado. A capa do livro antigo também foi trocada.'
console.log(livro.replaceAll('antigo', 'novo'));

const resposta1 = 'Resposta: A capital do Brasil é Brasília.';
const resposta2 = 'Minha Resposta: A capital do Brasil é Brasília.';
console.log(resposta1.startsWith('Resposta'));
console.log(resposta2.startsWith('Resposta'));

const saudacao = 'Olá, como vai';
console.log(saudacao.concat('!'));

//Métodos de Number

//Operações com números

let numero = 64.0;
console.log(Math.pow(numero, 2)); //64.0 ao quadrado
console.log(Math.sqrt(numero)); // raíz quadrada de 64.0
console.log(Math.abs(numero)); // módulo 

//Parsing

let decimal = parseFloat('10.5'); //Transforma String em tipo number
console.log(typeof decimal); //exibe na tela o tipo number

let inteiro = parseInt('10.99'); //converte o tipo String para inteiro
console.log(inteiro); 

/*Importante: O ParseFloat e o ParseInt admitem letras *após* os números.
Já o Number NÃO ADMITE. Se houver letras antes ou depois de um tipo Number,
o output sai NaN (Not a Number)*/ 

let numeroReal = Number('9.89');
console.log(numeroReal);
console.log(typeof numeroReal);

//verificação
console.log(Number.isInteger(inteiro)); //Recebe um número e retorna um booleano
console.log(Number.isInteger(decimal)); //Recebe um número e retorna um booleano
console.log(Number.isNaN(numeroReal)); //Verifica se a variável recebe um NaN (Not a Number)

//Arredondamentos
let taxaDeJuros = 1.8912123672;
console.log(Math.floor(taxaDeJuros)); //*Arredonda para baixo* o número para o próximo inteiro
console.log(Math.ceil(taxaDeJuros)); //Arredonda para cima
console.log(Math.round(taxaDeJuros)); //Arredonda para o inteiro mais próximo

//conversão de Number para outros tipos

console.log(taxaDeJuros.toFixed(2)); //Transforma o número em uma String e exibe com determinado número de casas decimais
console.log(taxaDeJuros.toString()); // Converte o tipo Number para String
console.log(taxaDeJuros.toPrecision(5)); //Define a quantidade total de dígitos a ser exibido (antes e após a vírgula);

//Max e Min
let nota1 = 9;
let nota2 = 7.5;
let nota3 = 5;

let maiorNota = Math.max(nota1, nota2, nota3);
console.log(maiorNota);

let menorNota = Math.min(nota1, nota2, nota3);
console.log(menorNota);

//Random
let aleatorio = Math.random(); //Retorna um número pseudoaleatório entre 0 e 1;
console.log(aleatorio);

let aleatorioEntreZeroeCem = (aleatorio*100)%100; //O resto da divisão de qualquer número por cem é um número entre 0 e 99
console.log(aleatorioEntreZeroeCem);

//Exercícios

let num1 = 5;
console.log(`O valor de ${num1} elevado ao cubo é de `+Math.pow(num1, 3));

let idade = '25 anos';
console.log(parseInt(idade));

let taxaDeEmprestimo = 4.649654;
console.log(taxaDeEmprestimo.toFixed(2));

const temperaturas = [38.9, 27.3, 18.6];
let maiorTemperatura = Math.max(...temperaturas); 
/*Operador de Propagação (...):
O operador de propagação é usado para expandir um array em seus elementos 
individuais. Quando usado com Math.max(), ele passa cada elemento do array 
como um argumento separado, permitindo que a função encontre o máximo entre
eles.*/
console.log(maiorTemperatura);

//operações com listas

let listaCompras = ['arroz', 'feijão', 'pão'];
console.table(listaCompras); //exibe a lista na tela no formato de tabela

//Adicionar itens à lista

listaCompras.push('água', 'refrigerante'); //Adiciona ítens ao fim da lista
console.table(listaCompras);

listaCompras.unshift('queijo', 'presunto'); //Adiciona ítens ao início da lista
console.table(listaCompras);

//Remover itens da lista
listaCompras.pop(); //Remove o último ítem da lista
console.table(listaCompras);

let itemRemovido = listaCompras.pop(); //O método pop também retorna o ítem que foi removido
console.table(listaCompras);
console.log(itemRemovido);

listaCompras.shift(); //Remove o primeiro elemento da lista
console.table(listaCompras);

//exercícios

let listaDeCompras = ['Arroz', 'feijão', 'carne'];
listaDeCompras.unshift('frango');
listaDeCompras.push('macarrão');
console.table(listaDeCompras);

let frutas = ['maçã', 'banana', 'laranja'];
frutas.pop();
console.table(frutas);

let estanteDeLivros =  ['Game Of Thrones', 'Harry Potter', 'O código Da Vinci'];
estanteDeLivros.shift();
console.table(estanteDeLivros);
