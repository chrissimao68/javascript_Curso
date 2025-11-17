//Criar um array com 10 numeros e mostrar no final
let prompt = require(`prompt-sync`)({ sigint: true });
let numeros = [], num

for (let i = 0; i < 10; i++) {
    let num = Number(prompt(`Digite ${i + 1}º número: `));
    numeros[i] = num

}
console.log(numeros)


