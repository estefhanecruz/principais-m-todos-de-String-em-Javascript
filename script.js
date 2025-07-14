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




