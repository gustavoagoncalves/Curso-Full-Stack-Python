import cronicas from './livros'

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.listen(8081, () => {
    console.log("CORS-enabled web server listening on port 8081")
});

const filteredCronicas = cronicas.filter((cronicas) => {
    return cronicas.capitulos >= 40
});

console.log(filteredCronicas);

let toPrint = ''
paginas.forEach(paginas => {
    toPrint += paginas.paginas
});

document.getElementById("main").innerHTML = toPrint + "Soma das páginas dos livros."