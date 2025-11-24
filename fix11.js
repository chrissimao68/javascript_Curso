const filmes = [
    { nome: "Homem-Aranha", categoria: "Ação" },
    { nome: "Divertida Mente", categoria: "Animação" },
    { nome: "Vingadores", categoria: "Ação" },
    { nome: "Carros", categoria: "Animação" }
];

const resultado = filmes.filter(u => u.categoria === "Ação");
console.log("Resultado 1: ", resultado);

const resultado2 = filmes.filter(u => u.nome === "Carros");
console.log("Resultado 2: ", resultado2);

const resultado3 = filmes.filter((procura) => {
    return procura.nome.includes("Ho");
});
console.log("Resultado 3: ", resultado3);

const resultado4 = filmes.filter(u => u.nome.includes("Di"));
console.log("Resultado 4: ", resultado4);