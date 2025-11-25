const carros = [
    { modelo: "Onix", marca: "Chevrolet" },
    { modelo: "Argo", marca: "Fiat" },
    { modelo: "Mobi", marca: "Fiat" },
    { modelo: "Hb20", marca: "Hyundai" }
];
console.log(carros);
const tipo = carros.filter(c => c.marca === "Fiat");
console.log(tipo);