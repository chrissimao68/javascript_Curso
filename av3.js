const usuarios = [
    { nome: "João", estado: "SP" },
    { nome: "Maria", estado: "MG" },
    { nome: "Cauã", estado: "MG" },
    { nome: "Bianca", estado: "SP" },
];
console.log(usuarios);

const lugar = usuarios.filter(u => u.estado === "MG");
console.log(lugar);