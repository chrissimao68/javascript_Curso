// Filtre apenas os nomes que começam com a letra "A"
let nomes = ["Ana", "Carlos", "Amanda", "João", "Alice", "Pedro"];

let letras = nomes.filter((letra) => {
    return letra.includes("A");
});

console.log("Todos os nomes do array: ", nomes);
console.log("Nomes que tem a letra A: ", letras);