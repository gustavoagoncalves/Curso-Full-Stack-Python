import months from './months.js'

const filteredMonths = months.filter( (months)=> {
    return months.days === 31;
});

console.log(filteredMonths);

let toPrint = '';

// foreach faz a listagem dos arrays
filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});

// Reduce: executa função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days};
});

// Map: função em arrays de retorno individual (cada valor do array)
let cachorros = [10, 15, 7, 8, 3]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}));

document.getElementById('main').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> idade humana: ' + years + ' '