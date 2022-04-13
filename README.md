# Curso-Full-Stack-Python
#### EBAC

# GIT
## Conceitos de versionamento
- Histórico
- Controle de versão
- Quem alterou
- O quê alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

## Instalando o GIT
https://git-scm.com/

- Windows: https://git-scm.com/download/win
- Linus (apt-get): sudo apt-get install git
- MAC (brew): brew install git

## Criando conta no GITHub

## Clonar o Projeto
git clone https://github.com/gustavoagoncalves/Curso-Full-Stack-Python

## Commits
Informação de alteração
- após testar todo o seu código
- git add
- git commit -m 'mensagem qualquer' 
- git push (enviar alterações para o repositório do GITHub)
- git pull (puxar ou trazer alterações para sua máquina)

## GITFlow
Fluxo do GIT

### Branchs
São ramificações do código / versões paralelas

- main / master
- develop
- DOD (Definition of Done): critérios de aceite. Somente após todos os testes serem feitos a versão final é mandada para a branch main/master.

git checkout -b (cria uma branch)
git checkout "nome da branch" (muda de branch)

### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente
git merge main

### Pull Requests
Mescla de branchs no repositório
Permite o code review: quando você envia o seu código para outros usuários/desenvolvedores
O repositório resolve os conflitos automaticamente


### Configurar o GitFlow
git flow init
git flow feature start {nome-da-feature}

