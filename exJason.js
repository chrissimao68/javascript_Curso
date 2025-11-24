const usuarios = [
    { nome: "Ana", cidade: "São Paulo" },
    { nome: "Carlos", cidade: "Rio de Janeiro" },
    { nome: "Bruno", cidade: "São Paulo" },
];
console.log(usuarios);
const resultado = usuarios.filter(u => u.cidade === "São Paulo");
console.log(resultado);
