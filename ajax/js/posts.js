// import fetch from 'node-fetch';

let data = {
    title: "Teste de envio",
    body: "loren ipsum quia et suscipit nsuscipit recusandae consequuntur",
    userId: 1
}

const postContainer = document.getElementById("posts");
postMarkup = "";

function setPost() {    
    fetch("https://pokeapi.co/api/v2/pokemon/", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => console.error(error))
}

function setGet() {
    fetch("https://pokeapi.co/api/v2/pokemon/", {
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json())
    .then((data) => {
        data.map(function(_post) {
            postMarkup += `
                <div>
                    <h3>${pokemon.name}</h3>
                    <p>${pokemon.id}</p>
                </div>
            `
        })
        postContainer.innerHTML = postMarkup
    })
    .catch(error => console.error(error))
}
