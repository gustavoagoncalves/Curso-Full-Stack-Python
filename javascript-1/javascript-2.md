# Operadores

## Aritméticos: retornam o resultado de uma operação
+ soma
- subtração
* multiplicação
/ divisão
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true/false):
< menor que
> maior que 
<= menor ou igual
>= maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true/false):
== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

## Operadores de lógica
! NÃO (NOT)
&& E (AND)
|| OU (OR)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência

#### As condições lógicas são convertidas em números binários:
- true é equivalente a 1
- false é equivalente a 0

#### Operador lógico de atribuição
Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:
var meuCarro = cor == "preto" ? "preto" : "branco"

## If
if (condição) {
    execução
}

## Else
else {

}

## Else if
else if (...) {
    ...
}

* Exemplo
if (cor == "preto") {
    meuCarro = "preto";
} else if () {
    meuCarro = "cinza"
}

## Switch
switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'cinza' :
        meuCarro = 'cinza';
        break;
    default :
        console.log ('não temos a cor desejada');
}

## Média
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7.5;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 7) {
    console.log ("Aprovado")
} else {
    console.log ("Reprovado")
}

## Laços de repetição

for ([expressãoInicial]; [condicao]; [incremento])
while ( [condição] ){
    [execução]
}

var contador = 0;
while (contador < 10){
    contador++;
}

var hora = 24;
while (hora > 0){
    hora--;
    console.log(hora)
}

- fazer a revisão do carro aos 3km
var km;
var revisao = 3;
for(km = 0; km <= revisao; km++){
    console.log("apenas" + km + "kms pode rodar")
}

### Média de alunos
var alunos = [
    [7, 8, 6, 9],
    [8, 5, 6, 4],
    [6, 5, 7, 4],
    [7, 7, 8, 8]
]

var nota = 0
for (var i = 0; i < alunos.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log ("Aluno: " + parseInt(i+1))

    for (c = 0; c < aluno.length; c++){
        nota += aluno[c];
    }

    media = nota / 4;

    if (media >= 6){
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    console.log("Media: " + media + " - " + resultado);

}

## Funções
- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calculoMedia(notas){

    var nota = 0;
    for(c = 0; c < notas.length; c++){
        notas += notas[c];
    }

    media = notas/notas.length;
    return media;
}

console.log("media: " + calculoMedia([8,7]))