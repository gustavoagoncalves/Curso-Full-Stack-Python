import Button from "./Button"

function Evento() {

    function meuEvento() {
        console.log('Ativando primeiro evento')
    }

    return(
        <div>
            <p>Clique para ativar:</p>
            <Button event={meuEvento()} text="Primeiro Evento" />
        </div>
    )
}

export default Evento