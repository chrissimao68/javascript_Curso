const mensagens = [
    { frase: "Hoje o dia está lindo" },
    { frase: "Não gostei desse trabalho" },
    { frase: "A aula foi muito divertida" },
    { frase: "Que tarefa chata" }
];

console.log(mensagens);
const palavra = mensagens.filter(c => c.frase.includes("chata"));

const palavra2 = mensagens.filter(c => c.frase.includes("Não gostei"));

console.log(palavra, palavra2);