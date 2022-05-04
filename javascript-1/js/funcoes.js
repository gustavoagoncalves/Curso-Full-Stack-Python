function calcularMedia (notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
    soma += notas[c];
    }
   
    media = soma / notas.length;
    return media;

}

let media;

function aprovacao (notas) {
    let media = calcularMedia (notas);
    let condicao = media >=6 ? "Aprovado" : "Reprovado";

    return "Média " + media + " - Resultado: " + condicao;
}

// Função Recursiva

function contagemRegressiva (numero) {
    console.log (numero);
    let proximoNumero = - 1;

    if (proximoNumero > 0)
    contagemRegressiva (proximoNumero);

}
/*
*Formulário envio de dados para cálculo de média
*/
document.getElementById('Formulário 1').addEventListener('submit', function(evento){

    evento.preventDefault();

    let dados = new FormData(this);;
    
    let notas = []
    for (let key of dados.keys()) {
        let numero = dados.get(key).match(/\d*/) ? Number( dados.get(key)) : 0;
        
        if(!isNaN(numero)) {
            notas.push(numero)
        }
    }

    console.log (notas);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    
});


function validaCampo(elemento) {
    elemento.addEventListener('focusout', function(event){
        
        event.preventDefault();
        
        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove ('erro');
        }
    });
    
}

function validaCampoNumerico(elemento) {
    elemento.addEventListener('focusout', function(event){
        
        event.preventDefault();
        
        if(this.value.match(/[0-9]/) && this.value >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove ('erro');
        }
    });
    
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}