# WEBOOK - Reading is Happiness
Repositório destinado ao projeto final da disciplina de Introdução ao Desenvolvimento WEB - SCC0219. Este projeto visa o desenvolvimento de uma plataforma de venda de Ebooks

## Integrantes:
- 10691992 &nbsp; Ana Clara Amorim Andrade

- 11796656 &nbsp; Eduardo Henrique Porto Silva

- 11795526  &nbsp; Tulio Santana Ramos 

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

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O aplicativo já vem com uma conta admin com senha admin.

Clientes são usuários que acessam o sistema para comprar produtos.

Admin: nome, id, telefone, email

User: nome, id, endereço, telefone, email

Produto: nome, id, foto, descrição, preço, qtde em estoque, qtde vendida

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.

Como funcionalidade extra, optamos por implementar a visualização da preview do ebook em sua página. O usuário poderá ler o Epílogo ou as páginas iniciais do primeiro capítulo, dependendo da constituição do produto. Além disso, em nossa plataforma, o usuário terá acesso aos ebooks comprados por meio de sua “biblioteca”, dessa forma, a leitura pré e pós compra do produto poderá ser efetuada de maneira direta dentro do ambiente criado.

O sistema é responsivo e visa uma boa acessibilidade e usabilidade para os usuários.

## Descrição:
WEBOOK é uma plataforma online de venda de livros digitais. O sistema conterá obras de diferentes categorias, visando entreter o público em geral. Implementado com HTML, CSS, JavaScript e <FrameWork> no front-end. Já para o back-end, foi utilizado Node.js e MongoDB para o banco de dados.

### Diagrama de Navegação:

## Comentários sobre o código:

## Plano de teste:
Pretendemos usar o Insomnia para verificar a validade das requisições (GET, POST, DELETE) no back-end. Além disso, serão efetuados testes nos navegadores Microsoft Edge, Firefox e Google Chrome, navegadores utilizados amplamente no mercado, assim como nos sistemas operacionais Windows e Linux (Ubuntu).

## Resultados dos testes:

## Building:

## Problemas:

## Comentários:
