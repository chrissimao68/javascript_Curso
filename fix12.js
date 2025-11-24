const amigos = [
    { nome: "Sergio", idade: 51, cidade: "Lavras" },
    { nome: "Fabio", idade: 30, cidade: "Varginha" },
    { nome: "Érica", idade: 35, cidade: "Varginha" },
    { nome: "Letícia", idade: 25, cidade: "Lavras" },
    { nome: "Gabi", idade: 41, cidade: "Lavras" },
];

const resultado = amigos.filter(u => u.nome === "Érica");
console.log("Filtrando nome de Érica: ", resultado);

const resultado2 = amigos.filter(u => u.nome.includes("Le"));
console.log("Filtrando nome que tenha 'le': ", resultado2);


const maiores = amigos.filter((pessoa) => {
    return pessoa.idade > 30;
});
console.log("Filtrando maiores que 30 anos: ", maiores);

const resultado3 = amigos.filter((procura) => {
    return procura.cidade.includes("La");
});
console.log("Filtrando cidade com 'La': ", resultado3);