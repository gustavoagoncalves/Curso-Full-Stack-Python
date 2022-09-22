# HTTP (Hypertext Transfer Protocol)
- Desenvolvido para comunicação entre navegadores e servidores web
- Modelo de cliente-servidor clássico: cliente abre uma conexão, executa uma requisição e espera até obter resposta

## Requisição assíncrona
- Não tem sincronismo com as requisições, onde podemos enviar diversas em paralelo, onde cada resposta retorna quando estiver pronta
- Não obedecem uma ordem cronológica
- Podem ser implementadas pelo [JQuery]: https://api.jquery.com/jquery.ajax

# AJAX (Asynchronous JavaScript And XML)
- É o uso de objetos XMLHttpRequest para comunicação com o servidor
- Manda e recebe informação em diversos formatos, como JSON, XML, HTML, etc...
- Importante por trabalhar atualizações da página sob demanda, de forma assíncrona
- É assíncrono, ou seja, pode se comunicar com o servidor, trocar dados e atualizar a página, sem contudo, recarregá-la
- Fazer requisições para o servidor sem precisar recarregar a página e receber e trabalhar com dados  do servidor

## Rest
Criado por Roy Fielding, um dos criadores do HTTP
- Serve para estabelecer padrões de comunicação entre Front-End e Back-End
- Header: cabeçalho de requisições
- Path: caminho ou rota para o Back-End
- URL: 
- Interoperar dados, informações, serviços
- GET: usado para retornar algum dado do servidor. Pode retornar dados cache
- POST: também pode ser usado para isso, mas ele NUNCA retornará dados cache. Pode ser usado para envio de dados para o servidor
- DELETE: remove um recurso específico
- PUT
- HEAD
- POST
- CONNECT
- OPTIONS
- TRACE
- PATCH

## Validação de Formulários
- Garantir o preenchimento correto de campos
- Validar dados, documentos, números importantes (CPF, CEP, telefone, cartão, etc...)
- Prevenção de vulnerabilidades como SQL Injection
- Tarefa do Front-End, que podem ser processadas pelo Back-End