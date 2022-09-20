# HTTP (Hypertext Transfer Protocol)
- Desenvolvido para comunicação entre navegadores e servidores web
- Modelo de cliente-servidor clássico: cliente abre uma conexão, executa uma requisição e espera até obter resposta

## Requisição assíncrona
- Não tem sincronismo com as requisições, onde podemos enviar diversas em paralelo, onde cada resposta retorna quando estiver pronta
- Não obedecem uma ordem cronológica

# AJAX (Asynchronous JavaScript And XML)
- É o uso de objetos XMLHttpRequest para comunicação com o servidor
- Manda e recebe informação em diversos formatos, como JSON, XML, HTML, etc...
- É assíncrono, ou seja, pode se comunicar com o servidor, trocar dados e atualizar a página, sem contudo, recarregá-la
- Fazer requisições para o servidor sem precisar recarregar a página e receber e trabalhar com dados  do servidor

## GET e POST
- GET: usado para retornar algum dado do servidor. Pode retornar dados cache
- POST: também pode ser usado para isso, mas ele NUNCA retornará dados cache. Pode ser usado para envio de dados para o servidor