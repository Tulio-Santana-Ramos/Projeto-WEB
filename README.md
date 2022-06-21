# WEBOOK - Plataforma Online para Venda de Ebooks

![Screenshot](/src/components/logo.png)

Repositório destinado ao projeto final da disciplina de Introdução ao Desenvolvimento WEB - SCC0219. Este projeto visa o
desenvolvimento de uma plataforma de venda e leitura de Ebooks, os Ebooks em si são ilimitados, mas o site conta com
promoções de Ebook e a quantidade de Ebooks em promoção é limitada, definida pelo administrador e pode ser visualizada
pelo cliente.

## Integrantes:

- 10691992 &nbsp; Ana Clara Amorim Andrade

- 11796656 &nbsp; Eduardo Henrique Porto Silva

- 11795526 &nbsp; Tulio Santana Ramos

## Conteúdo:

- [Requisitos](#requisitos)
- [Descrição](#descrição)
- [Comentários sobre o Código](#comentários-sobre-o-código)
- [Plano de Teste](#plano-de-teste)
- [Reultados dos Testes](#resultados-dos-testes)
- [Building](#building)
- [Problemas](#problemas)
- [Comentários](#comentários)

## Requisitos:

O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O
aplicativo já vem com uma conta admin com senha admin.

Clientes são usuários que acessam o sistema para comprar produtos.

Admin: nome, id, telefone, email

User: nome, id, endereço, telefone, email

Produto: nome, id, foto, descrição, preço, qtde vendida, se o livro está em promoção e a quantidade do ebook restante em
estoque.

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos
são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto
vendida é subtraída da quantidade em estoque (em caso de promoção) e adicionada à quantidade vendida. Os carrinhos são
esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir/adicionar Ebooks e promoções. Por
exemplo, eles podem alterar a quantidade em estoque.

Como funcionalidade extra, optamos por implementar a visualização do ebook comprado por meio da “biblioteca”, dessa forma, a leitura do produto poderá ser efetuada de maneira direta dentro do ambiente criado. E outra funcionalidade extra é o
sistema de avaliação dos livros por parte do cliente, que pode escrever um review e dar uma nota para cada livro
comprado, e esse review será mostrado na página juntamente com as informações do livro.


## Descrição:

WEBOOK é uma plataforma online de venda de livros digitais. O sistema conterá obras de diferentes categorias, visando
entreter o público em geral. Implementado com HTML, CSS, JavaScript e Vue.js no front-end. Já para o back-end, foi
utilizado Node.js e MongoDB para o banco de dados.

### Diagrama de Navegação:

![Screenshot](/public/Diagram.png)

As diferentes telas criadas como mockup podem ser encontradas diretamente
no [Figma](https://www.figma.com/file/q7jnpJB5LKc1Gr9y7ymZ2c/WEBOOK?node-id=0%3A1)

## Comentários sobre o código:

Os arquivos mais importante possuem comentários explicando seu funcionamento.

## Plano de teste:

Pretendemos usar o Insomnia para verificar a validade das requisições (GET, POST, DELETE) no back-end. Além disso, serão
efetuados testes nos navegadores Microsoft Edge, Firefox e Google Chrome, navegadores utilizados amplamente no mercado,
assim como nos sistemas operacionais Windows e Linux (Ubuntu).

Para essa etapa da entrega verificamos nossa plataforma em diversos navegadores, testamos todas as rotas, fizemos diferentes perfis de usuário, criamos um perfil de admin, adicionamos livros, tentamos comprar até esgotar a promoção, tentamos acessar as páginas de admin sendo um usuário comum, entre outros e em todos os testes feitos por cada um dos desenvolvedores a plataforma se saiu bem.

## Resultados dos testes:


## Building:


```sh
npm install
```

```sh
npm run dev
```

#### Para completar a configuração do site sem usar um servidor é necessário ir para a rota /resetConfig, isso vai salvar algumas variáveis necessárias para a execução do código
#### Alguns logins que vem com as configurações padrões são:
Conta administrador:  
Login: admin | Senha: admin  
Conta padrão:
Login: login | Senha: senha


## Problemas:

## Comentários:
