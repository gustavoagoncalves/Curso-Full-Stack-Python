const shoppingList = ['Arroz', 'Feijão', 'Macarrão', 'Manteiga', 'Carne', 'Biscoito', 'Pão', 'Cuscuz', 'Frutas', 'Verduras', 'Açucar'];

const listEl = document.getElementById('list');
const searchField = document.getElementById('searchField');
searchField.addEventListener('input', inputHandler);

this.fillList();

function fillList(list = shoppingList) {
    listEl.innerHTML = "";
    for(let i=0; i < shoppingList.lenght; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    const filteredList = shoppingList.filter(el => {
        const listItem = el.toLowerCase();
        const searchWord = searchField.value.toLocaleLowerCase();
        return listItem.includes(searchWord);
    });

    fillList(filteredList);
}