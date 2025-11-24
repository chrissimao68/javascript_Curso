let alunos = [
    "João-TurmaA", "Maria-TurmaB", "Pedro-TurmaA",
    "Ana-TurmaC", "Carlos-TurmaA", "Julia-TurmaB"];

let letras = alunos.filter((letra) => {
    return letra.includes("A");
});

console.log(alunos);
console.log(letras);