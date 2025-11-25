const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 5 },
    { nome: "Carla", nota: 9 },
    { nome: "Lucas", nota: 4 }
];
console.log(alunos)
const notas = alunos.filter((maior) => {
    return maior.nota > 6
});
console.log("Alunos acima de nota 6 sao: ", notas);