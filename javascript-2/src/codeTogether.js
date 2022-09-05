import livros from './livros'

const filteredLivros = livros.filter((livros) => {
    return livros.capítulos >= 40
});

console.log(filteredLivros)

let toPrint = ''
páginas.forEach(páginas => {
    toPrint += páginas.páginas
});

document.getElementById("main").innerHTML = toPrint + 'Soma das páginas dos livros.'