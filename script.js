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


//******************** Exercícios ********************

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

//******************** Fim dos exercícios ********************

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

//******************** Exercícios ********************

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

//******************** Fim dos exercícios ********************

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

//******************** Exercícios ********************

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

//filter
let numeros = [1, 7, 19, 20, 6, 109, 77, 42, 6, 1.5, 200];

/*O método filter() cria um novo array com todos os elementos que passaram 
no teste implementado pela função fornecida.*/
/*O método filter recebe um parâmetro, e esse parâmetro é uma função.
O objetivo dessa função é passar ítem a ítem dessa lista para verificar
se atende a uma determinada condição. Se atende, o ítem é copiado para 
a lista filtrada. */
let numerosGrandes = numeros.filter((item)=>{ 
    return item>20;

    //Essa função tem a mesma saída que anterior, só que expandida
    // if(item>20){
    //     return true;
    // }else{
    //     return false;
    // }

});
console.log(numeros); //Lista original segue inalterada
console.log(numerosGrandes);

//******************** Fim dos exercícios ********************

// Lista de objetos
let recados = [
    {
        id: 312,
        descricao: 'Estudar Javascript',
        urgente: true
    },
    {
        id: 412, 
        descricao: 'Fazer os exercícios',
        urgente: true
    },
    {
        id: 117, 
        descricao: 'Entender listas',
        urgente: false
    }, 
    {
        id: 55, 
        descricao: 'Comparar Javascript com python',
        urgente: false
    }
];
console.table(recados);
let recadosUrgentes = recados.filter(recado => recado.urgente); 
//Recebe os recados e retorna apenas os que tem a flag urgente = true
console.table(recadosUrgentes);

let recadosJavascript = recados.filter((recado)=>recado.descricao.includes('Javascript'));
//Recebe os recados e retorna apenas os que incluem a string 'Javascript' na descrição
console.table(recadosJavascript);


//******************** Exercícios ********************


//Um usuário tem uma lista de números e deseja filtrar apenas os números pares.
let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = listaDeNumeros.filter((valor)=>valor%2===0);
console.log(numerosPares);

/*Uma cliente tem uma lista de nomes e deseja filtrar apenas os nomes que iniciam com a 
palavra João.*/
let nomes = ['João', 'Maria', 'Daphne', 'Pedro','João Pedro','Ana','José','Maria João'];
let nomesJoao = nomes.filter((nome)=>nome.startsWith('João'));
console.log(nomesJoao);

/*Um usuário tem uma lista de objetos que possuem várias propriedades, incluindo uma informação
sobre o nível de urgência (de 1 a 5), sendo 1 pouco urgente e 5 muito urgente. O objetivo é 
filtrar apenas os objetos onde o campo urgente é maior ou igual a 3 */
let itens = [
    {nome: 'Item 1', categoria: 'Eletrônicos', urgente: 5},
    {nome: 'Item 2', categoria: 'Livros', urgente: 3},
    {nome: 'Item 3', categoria: 'Alimentos', urgente: 4},
    {nome: 'Item 4', categoria: 'Roupas', urgente: 2},
    {nome: 'Item 5', categoria: 'Ferramentas', urgente: 5},
]
let itensUrgentes = itens.filter((item)=>item.urgente>=3);
console.table(itensUrgentes);

/*Um cliente tem uma lista de cidades com seus respectivos estados e deseja filtrar apenas
as cidades que estão localizadas no estado do Rio Grande do Sul (RS) */

let cidades = [
    {nome: 'Porto Alegre', estado: 'RS'},
    {nome: 'Pelotas', estado: 'RS'},
    {nome: 'Caxias do Sul', estado: 'RS' },
    {nome: 'Curitiba', estado: 'PR' },
    {nome: 'Florianópolis', estado: 'SC'},
];
let cidadesRs = cidades.filter((cidade)=>cidade.estado === 'RS');
console.table(cidadesRs);

//******************** Fim dos exercícios ********************

//Find
/*Busca o primeiro elemento em um array que satisfaça uma condição específica */

let recadoListas = recados.find(item => item.id ===117);
/*Lê a lista de recados e encontra o item por id*/
console.log(recadoListas); 

let recadoUrgente = recados.find(item => item.urgente); //Retorna apenas o primeiro ítem que corresponde à busca
console.table(recadoUrgente);

let recadoInexistente = recados.find(item => item.id === 999);
console.log(recadoInexistente);
// Retorna undefined

/*if para mostrar se determinado recado existe ou não existe*/
// if(!recadoInexistente){
//     alert('Erro! o recado não existe!');
// }
 //FindIndex
 /*Retorna a posição do primeiro item que satisfaz uma condição.
 Quando um item não existe o findIndex retorna -1 */

 let posicaoRecadoListas = recados.findIndex(item => item.id===117); //Retorne a posição do primeiro item do array cujo id é 117
 console.log(posicaoRecadoListas);

 let posicaoRecadoInexistente = recados.findIndex(item=>item.id ===999);
 console.log(posicaoRecadoInexistente);  //output: -1

//  if(posicaoRecadoInexistente<0){
//     alert('Erro! o recado não existe!');
//  }

//Acessar um item a partir de sua posição:
console.log(recados[posicaoRecadoListas].descricao);
//retorna a descrição do item na posição 117 


//******************** Exercícios ********************

/* 1- Encontre o primeiro número par da lista e exiba no console a posição
deste número na lista*/
const valores = [1, 3, 7, 8, 9, 12, 20, 21];
let valorPar = valores.findIndex(valor => valor%2 === 0);
console.log(valorPar);

/* 2 - Considere a lista de produtos abaixo e resolva as questões para encontrar
determinados produtos. Se houver produto com a condição da questão, mostre o produto no
console. Caso contrário, exiba "Produto não encontrado" */
const produtos = [
    {nome: 'Caneta', preço: 5, estoque: 6},
    {nome: 'Caderno', preço: 20, estoque: 20},
    {nome: 'Mochila', preço: 150, estoque: 2},
    {nome: 'Borracha', preço: 3, estoque: 1},
    {nome: 'Lápis', preço: 2, estoque: 12}
];
 //2.1 - Encontre o primeiro produto caro (acima de R$ 100,00);
 let produtoCaro = produtos.find(produto => produto.preço>100);
 console.log(produtoCaro);
 
 // 2.2 - Encontre o primeiro produto que está sem estoque.
 let produtoSemEstoque = produtos.find(produto=>produto.estoque===0);
 if(!produtoSemEstoque){
    console.log('Produto não encontrado');
 }else{
    console.log(produtoSemEstoque);
 }
 
 // 2.3 - Encontre o primeiro produto que possua ao menos 10 itens no estoque.
 let produtoDezItens = produtos.find(produto=>produto.estoque>=10);
 console.log(produtoDezItens);

 //******************** Fim dos exercícios ********************

// Some e every

//Some
/* Verifica se algum elemento do array atende a uma determinada condição e retorna
um booleano*/

let existeRecadoUrgente = recados.some(recado=>recado.urgente); 
/*Retorna true se existir algum recado com a flag urgente*/
console.log(existeRecadoUrgente); //output: true

let existeRecadoJavascript = recados.some(recado=>recado.descricao.includes('Javascript')); //Retorna true se houver algum recado cuja descrição inclua a palavra Javascript
console.log(existeRecadoJavascript);

//Every
/* Verifica se todos os elementos do array atendem a uma determinada condição e retorna
um booleano*/

let todosOsRecadosSaoUrgentes = recados.every(recado=>recado.urgente);
//Verifica se todos os recados são urgentes
console.log(todosOsRecadosSaoUrgentes); //output: false

//******************** Exercícios ********************

/*Um usuário tem uma lista de pessoas com suas idades e deseja verificar se existe pelo menos
uma pessoa maior de 18 anos.*/
let maioresOumenores = [
    {nome: 'Lucas', idade: 16},
    {nome: 'Maria', idade: 22},
    {nome: 'Carlos', idade: 15},
    {nome: 'Fernanda', idade: 30}
];
let maiorDeIdade = maioresOumenores.some(pessoa=>pessoa.idade>18); //Se houver alguem com idade > 18, retorna true
console.log(maiorDeIdade); //output: true

/*Um estudante tem uma lista de tarefas de estudo e deseja verificar se todas as tarefas 
foram concluídas (status true)*/
let tarefasEstudo = [
    {descricao: 'Estudar Matemática', concluido: true},
    {descricao: 'Revisar física', concluido: true},
    {descricao: 'Fazer exercícios de química', concluido: true},
    {descricao: 'Ler capítulo de biologia', concluido: false},
];
let tarefasConcluidas = tarefasEstudo.every(tarefa=>tarefa.concluido); //Retorna true se todas as tarefas foram concluída
console.log(tarefasConcluidas); //output: false

//******************** Fim dos exercícios ********************

// map e forEach
//Map é uma função que faz uma cópia de uma lista e faz alterações nela.

let listaAtualizada = recados.map(recado => {
    return{
        id: recado.id+100,
        descricao: recado.descricao,
        // urgente: recado.urgente  
    }/*Eu posso suprimir alguma propriedade que eu não queira na nova lista*/
});
console.table(recados); //output: Lista original sem alterações
console.table(listaAtualizada); //output:Lista com IDs alterados;

//Para listar apenas a descrição dos recados:
listaDescricoes = recados.map(recado => recado.descricao);
console.log(listaDescricoes);

//forEach
/*Percorre e faz alteração em todos os itens de uma lista sem criar uma 
cópia. funciona apenas em listas de objetos. Não funciona em listas de 
números ou Strings*/
recados.forEach(recado => {
    console.log(recados); //Para cada recado da lista, faça um console.log
    // recado.id +=500; 
    /*Soma 500 aos IDs dos recados*/
});

//******************** Exercícios ********************

/*Em um supermercado, o gerente decidiu dar um desconto de 10% em alguns
produtos. Sua tarefa é calcular o preço final desses produtos com o desconto 
aplicado e exibir a nova lista de preços */
let produtosSupermercado = [
    {nome:'Arroz', preco: 20.00},
    {nome:'Feijão', preco: 10.00},
    {nome:'Macarrão', preco: 8.00},
    {nome:'Açúcar', preco: 5.00}
];
let produtosSupermercadoAtualizado = produtosSupermercado.map(produto=>{
    return {
        nome: produto.nome,
        preco: produto.preco-(0.1*produto.preco)
    }
});
console.table(produtosSupermercadoAtualizado);

/*Você trabalha numa biblioteca e precisa criar uma lista para saber quantas
páginas ainda faltam para terminar de ler cada livro. Para isso, você tem
uma lista de livros com o total de páginas e as páginas que já foram lidas.*/

let obras = [
    {titulo: 'O Senhor dos Anéis', totalPaginas: 1000, paginasLidas: 320},
    {titulo: '1984', totalPaginas: 328, paginasLidas: 100},
    {titulo: 'O código da Vinci', totalPaginas: 96, paginasLidas: 50}
];
let paginasFaltantes = obras.map(obra => {
    return{
        titulo: obra.titulo,
        numPaginasFaltantes: `Faltam ler ${obra.totalPaginas-obra.paginasLidas} página(s)`
    }
});
console.table(paginasFaltantes);

/*Você está organizando uma festa e tem uma lista de convidados. Agora quer enviar uma 
mensagem de confirmação para cada um deles. Mostre no console uma mensagem para cada 
convidado usando forEach. */

let convidados = ['João', "Maria", "Carlos", "Fernanda"];
let mensagem = convidados.forEach(convidado=>{
    return console.log(`Querido(a) ${convidado}, você confirmou sua ida à festa`)
});

//******************** Fim dos exercícios ********************

//Slice e Splice
// Slice - Uma 'fatia' de uma lista: pega uma determinada parte de uma lista e cria outra lista
let recadosRestantes = recados.slice(1); //"corta" o primeiro recado da lista e retorna o resto"
console.table(recadosRestantes);
console.table(recados); //Não altera a listra original

console.table(recadosRestantes = recados.slice(1,3)); /* Retorne o que está no index 1 até o 
2, excluindo do 3 em diante */

//Splice

let elementosRemovidos = recados.splice(1, 2); /*Começo a excluir a partir do elemento index 1, e excluo um total de 
2 elementos. */
console.table(recados); //Altera a lista original
console.table(elementosRemovidos); //Retorna os elementos removidos

//******************** Exercícios ********************
/*Vamos imaginar que você tem uma lista de frutas e deseja obter apenas as primeiras três
frutas dessa lista. */
let listaDeFrutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Abacaxi'];
let tresPrimeirasFrutas = listaDeFrutas.slice(0, 3);
console.table(tresPrimeirasFrutas);

/*Você tem uma lista de tarefas e deseja obter todas as tarefas, exceto as duas primeiras, 
mas sem alterar a lista original */
let listaDeTarefas = ['Estudar para a prova', 'Revisar os exercícios', 'Assistir as aulas', 'ler um livro'];
let tarefasSelecionadas = listaDeTarefas.slice(2);
console.table(tarefasSelecionadas);

//Refaça o exercício 2, mas dessa vez excluindo os dois primeiros itens da lista original
console.table(tarefasSelecionadas = listaDeTarefas.splice(2));

//******************** Fim dos exercícios ********************

//Join, Includes e Reverse

//Join - Retorna os elementos de um array em forma de string com determinado separador entre eles
let operadores = ['João', 'Ana', 'Maria', 'Pedro'];
let operadoresTexto = operadores.join(', ');
console.log(operadores); //Não altera o array original.
console.log(operadoresTexto); 

let recadosTexto = recados
    .map(recado => recado.descricao) //extrai as descrições da lista
    .join('; '); //Junta as descrições em uma string, sendo cada elemento separado por ; .
console.log(recadosTexto);

//Includes
//Verificar se na lista de operadores está incluso um operador específico
let existeOperadorJoao = operadores.includes('João');
console.log(existeOperadorJoao); //Retorna um booleano

//Reverse
//Inverte a ordem dos elementos de uma lista, alterando a lista original
operadores.reverse();
console.log(operadores);

//******************** Exercícios ********************
/*Você tem uma lista de ingredientes para uma receita e deseja criar uma única String que 
contenha todos os ingredientes separados por vírgulas. */
let ingredientes = ['farinha', 'açúcar', 'ovos', 'leite', 'manteiga'];
let stringIngredientes = ingredientes.join(', ');
console.log(stringIngredientes);

/*Você está organizando um campeonato de jogos e tem uma lista de jogadores inscritos. Você 
quer verificar se um jogador específico se inscreveu no campeonato */
let jogadores = ['Lucas', 'Mariana', 'Felipe', 'Tatiane', 'Roberto'];
let jogadorParaVerificar = 'Felipe';
let existeJogador = jogadores.includes(jogadorParaVerificar);
console.log(existeJogador);


/*Você é o organizador de um campeonato de futebol. Para garantir que tudo saia ocnforme o 
planejado, você criou uma lista de tarefas, mas essa lista está em ordem invertida e você 
precisa corrigir*/
let tarefasDoCampeonato = [
    'Divulgar o evento',
    'Definir as equipes',
    'Comrar os prêmios',
    'Escolher o local do jogo',
    'Criar as regras do torneio'
];
console.log(tarefasDoCampeonato.reverse());

//******************** Fim dos exercícios ********************





