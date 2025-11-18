let playlist = ["Dua Lipa - Dance The Night", "The Weeknd - Binding Lights"]
//Adicionar 2 musicas novas
//remover a ultima musica
//mostre todas as musicas numeradas
playlist.push("Petit Biscuit - Sunset Lover", "Japan - Prod.jk8");
console.log("Acrescentado: ", playlist)

let removido = playlist.pop();
console.log("Removido: ", removido);
console.log(playlist);

playlist.forEach((play, index) => {
    console.log(`${index + 1}. ${play}`);
});
