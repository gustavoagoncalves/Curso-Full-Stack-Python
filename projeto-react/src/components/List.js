import Item from "./Item"

function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item livro="A Guerra dos Tronos" ano_lancamento={1996} />
            <Item livro="A Fúria dos Reis" ano_lancamento={1998} />
            <Item livro="A Tormenta de Espadas" ano_lancamento={2000} />
            <Item livro="O Festim dos Corvos" ano_lancamento={2005} />
            <Item livro="A Dança dos Dragões" ano_lancamento={2011} />
        </ul>
        </>
    )
}

export default List