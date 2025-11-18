//exercício de notas enem
//chamando o comando prompt
let prompt = require(`prompt-sync`)({ sigint: true });
//Criando variáveis
let NotaProva1, NotaProva2, redacao, soma
//Criando entradas
NotaProva1 = Number(prompt(`DIgite a nota da primeira prova: `));
NotaProva2 = Number(prompt(`DIgite a nota da segunda prova: `));
redacao = Number(prompt(`DIgite a nota da redação: `));
//Calculo somando
soma = NotaProva1 + NotaProva2 + redacao
console.log("Sua nota final foi de: ", soma)
//Criando desvio de condição
if (soma > 1500) {
    console.log("Você passou na UFLA!!")
}
if (soma >= 1000) {
    console.log("Você passou na UNILAVRAS!!")
}
if (soma < 1000) {
    console.log("Volte ano que vem, estude mais!!")
}


