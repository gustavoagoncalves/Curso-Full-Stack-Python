import livros from './livros'
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.listen(8081, () => {
    console.log("CORS-enabled web server listening on port 8081")
});

const filteredLivros = livros.filter((livros) => {
    return livros.capitulos >= 40
});

console.log(filteredLivros);

let toPrint = ''
paginas.forEach(paginas => {
    toPrint += paginas.paginas
});

document.getElementById("main").innerHTML = toPrint + "Soma das páginas dos livros."