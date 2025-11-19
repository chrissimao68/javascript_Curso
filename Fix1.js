//Lista de compras, colocar no array e mostrar na tela
let ListaCompras = []
ListaCompras.push("Arroz", "Feijão", "Açucar", "Alcatra", "Maminha", "Fraudinha", "Óleo de Soja", "Queijo", "Alho", "Cebola")
console.log(ListaCompras)

ListaCompras.forEach((Lista, index) => {
    console.log(`${index + 1}. ${Lista}`);
});