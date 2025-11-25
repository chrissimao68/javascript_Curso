const mensagens = [
    "Hoje o dia está lindo",
    "Não gostei desse trabalho",
    "A aula foi muito divertida",
    "Que tarefa chata"
];
const proibida = ["chato", "chata", "Não gostei"];
console.log(mensagens);
const palavra = mensagens.filter(u => u.proibida.includes("chato", "chata", "Não gostei"));

console.log(palavra);