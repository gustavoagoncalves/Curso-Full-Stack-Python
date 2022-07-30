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

## Props 2
- Podemos definir tipos para as props, realizando uma espécie de validação
- Definimos em um objeto chamado propTypes no própio componente
- Ainda há a possibilidade de definir um valor padrão
- Neste caso, utilizamos o objeto defaultProps

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

## Eventos
- São os mesmos eventos do DOM
- Ou seja, temos eventos para responder a um click
- É atrelado a uma tag que irá executá-lo
- Geralmente um método é atribuído ao evento
- Este método deve ser atrelado no componente

## UseState
- É um hook do React
- Com ele conseguimos manusear o estado de um componente de forma simples
- Funciona muito bem com eventos
- Podemos atrelar um evento a mudança de state

## Métodos por props
- Métodos também podem ser passados por props
- Um componente filho pode ativar o método do seu ancestral
- Vamos acessar por meio de um evento
- A sintaxe é a mesma de uma props de dados: props.meuEvento

## Renderização por condição
- Podemos atrelar a exibição de algum elemento a um if
- Esta ação é chamada de renderização condicional
- Envolvemosn as tags em {}
- Como as chaves executam JS, criamos nossa condição
- Possível usar o state para criar as condições