import PropTypes from 'prop-types'

function Item({ livro, ano_lancamento}) {
    return (
        <>
           <li>
            {livro} - {ano_lancamento}
           </li>
        </>
    )
}

Item.propTypes = {
    livro: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}


export default Item