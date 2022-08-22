class Movimentacao {
    constructor(banco = 'padrao', nome= '', saldo= 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach( 
            lancamento => this.movimentacoes.push(lancamento.valor)
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        this.movimentacoes.forEach(lancamento => {
            valorAtualizado += lancamento.saldo
            tipo += lancamento.nome + ' | '
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Banco BB', 'salario', 20000)
const m02 = new Movimentacao('Banco BB', 'comissao', 2000)
const m03 = new Movimentacao('Banco BB', 'imposto', -5000)
const m04 = new Movimentacao('Banco BB', 'contas', -1000)

const registro01 = new Registro(23,08,2022)
registro01.novaMovimentacao(m01, m02, m03, m04)
console.log('O saldo restante é de: ' + registro01.resumo())