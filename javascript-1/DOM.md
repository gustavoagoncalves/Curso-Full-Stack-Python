# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação (fornece recursos para programar)
- NÃO é uma linguagem de programação
- É essencial para o JS entender o modelo de páginas da web

## Para que serve?
- Alterar a estrutura
- Alterar o estilo da página (CSS)
- Alterar conteúdo

## Como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós ou nodes)

* Exemplos:
<html>
    <head></head>
    <body></body>
</html>

JS
objeto = {
    html : {
        head : {};
        body : {
            h1 : {

            }
        }
    }
}

## DOM x JS
- O DOM pode ser usado por outras linguagens de programação
- Sem o DOM o JS não teria noção da página

### Vantagens de usar o JavaScript
- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar requisições desnecessárias (performance)
- SPA (Single Page Applications) - página que não precisa recarregar para mostrar informação pro usuário
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript
- Código é executado por navegadores (navegador tem processamento limitado pela máquina do usuário)
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempos de execução não ficam salvas no documento

### Exemplos
Seleciona o método e disponibiliza (métodos/funções).callback

- document.getElementById (id)
- document.getElementsByTagName ('nome da tag')
- document.createElement (name)
- parentNode.appendChild (node) // ex: html.appendChild ('body')
- element.innerHTML
- element.style
- element.setAttribute (definit o atributo)
- element.getAttribute (pegar o atributo)
- element.addEventListener ()
- window.location
- window.onload (en-US)
- console.log ()
- window.scrollTo (eixos x, y)

## Seletores
- Tipos de seletores: Tag, Id, Class, Name, Query
-Callback
- getElementById ()
- getElementsByTagName ()
- getElementsByName ()
- getElementByClassName ()
- querySelectorAll () // #id e .class

## Formulários
- Precisamos evitar que o usuário passe dados incorretos
- Ou seja para direcionar melhor o uso do nosso sistema
- Proteger a injeção de código malicioso
- Evitar erros de processamento
- Formatar dados para facilitar o processamento
- Regex (expressões regulares)


### Referências
- DOM: https://dom.spec.whatwg.org/
- Tecnologia JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o
- Expressões regulares: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions