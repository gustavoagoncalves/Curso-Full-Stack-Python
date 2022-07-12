# Gulp

Kit de ferramentas de automação de tarefas baseada em JavaScript

- Otimizar o fluxo de trabalho (desenvolvimento)
- Organização e orquestração de arquivos
- Ajuda a evitar trabalhos lentos e repetitivos
- Criação de pipelines
- Você cria as configurações necessárias (flexível)
- Tarefas escritas em JS ou plug-ins
- Aplica transformações em arquivos ainda na memória (antes de gravar no disco)

## Porquê automatizar?
- Melhor organização
- Evitar repetição de tarefas
- Mais tempo para focar no mais importante: regras de negócios e experiência do usuário

## Principais recursos
- Minificação de arquivos
- Otimização de imagens (para melhor performance)
- Mescla de arquivos de diferentes origens

## Transpilação
É o processo de transformação (conversão) de escrita em outras linguagens para o JavaScript. Você pode escrever em TypeScript ou Babel que o código é executado a partir do node.js e gulp.cli (linha de comando)

## Global x Local
- A instalação do node.js é global
- Já o Gulp e seus plug-ins são instalados localmente (em cada projeto)

## Gerenciadores de pacotes
- NPM: Node Package Manager
- Utiliza o node.js
- Permite a configuração rápida e fácil de ambientes e plug-ins Node

## Instalando o Gulp
- Rodar o Node.js
- Instalar o gulp-cli (Command Line Interface) globalmente: npm install gulp-cli -g
- Agora na pasta do projeto, adicionar o npm: npm init -y
- Criar o gulpfile.js

## Trabalhando com Gulp
- Baseado em funções: tasks
- Organização do projeto
- Otimização de arquivos
- Mesclagem e minificação de CSS e JS
- Diminuição do tamanho de imagens