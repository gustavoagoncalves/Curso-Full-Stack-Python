# O que é React
- Biblioteca JS para criação de interfaces
- Utilizado para construir SPA's (Single Page Application)
- Baseado em componentes
- Utiliza o JSX para renderizar o HTML
- Aplica o Virtual DOM para realizar alterações de DOM

## Entendendo o JSX
- O JSX é como o HTML, porém, dentro do código JavaScript
- A principal maneira de escrever HTML com o React
- Podemos interpolar variáveis, inserindo {} entre elas
- Também é possível executar funções em JSX
- Inserir valores em atributos de tags também é válido em JSX
- Podemos colocar uma estrutura lógica (if, else por exemplo)

## Componentes
- Permite dividir a aplicação em partes
- Renderizam JSX, assim como o App.js (que é um componente)
- Precisamos criar um arquivo de componentes
- E importá-lo onde precisamos utilizar
- Pode ser utilizado em vários locais
- Normalmente ficam em uma pasta chamada components

## Props
- As props são valores passados para componentes
- Podemos deixá-los dinâmicos, ou seja, mudando a execução por causa do valor da prop
- O valor é passado como um atributo na chamada do componente
- Precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente
- As props são somente de leitura
- Dados dinâmicos também podem ser passados por props

## Adicionando CSS
- O CSS pode ser adicionado de forma global na aplicação por meio do arquivo index.css, por exemplo
- Porém é possível estilizar a nível de componentes
- Utilizamos o CSS modules
- Basta criar um arquivo chamado: NomeDoComponente.module.css
- E chamar o CSS no componente

## Fragmentos
- Os react fragments permitem a criação de um componente sem um elemento pai
- O propósito é descomplicar os nós do DOM
- A sintaxe é <> e </> e não há um nome para a tag
- Criamos no próprio JSX