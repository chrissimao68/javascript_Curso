const produtos = [
    { nome: "Fone Bluetooth", id: 1 },
    { nome: "Mouse Gamer", id: 2 },
    { nome: "Fone com fio", id: 3 },
    { nome: "Teclado Mecânico", id: 4 }
];
console.log(produtos)
const palavra = produtos.filter(f => f.nome.includes("Fone"));
console.log(palavra)