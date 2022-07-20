import Item from "./Item"

function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Companhia Dourada" />
            <Item marca="Segundos Filhos" />
        </ul>
        </>
    )
}

export default List