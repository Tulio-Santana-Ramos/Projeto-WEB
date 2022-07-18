# WEBOOK - Plataforma Online para Venda de Ebooks

![Screenshot](Pages/img/Logo-icone.png)

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

![Screenshot](/Diagram.png)

As diferentes telas criadas como mockup podem ser encontradas diretamente
no [Figma](https://www.figma.com/file/q7jnpJB5LKc1Gr9y7ymZ2c/WEBOOK?node-id=0%3A1)


## Plano de teste:

Para realizar os teste é necessario, além de iniciar o vue, rodar a pagina de configuração inicial que se encontra na rota /resetConfig, ela simula a existencia de um servidor para os dados vitais do site, sem a devida execução o site pode parecer completamente desconfigurado.

O site permite várias ações, testamos todas elas:

Como cliente:
  1. Realizar pesquisa do livro por nome
  2. Realizar pesquisa do livro por categoria
  3. Navegar no pagination dos livros na home
  4. Fazer login 
  5. Registrar novo usuário
  6. Comprar livro estando logado e sem estar logado (pedir login)
  7. Verificar se o livro comprado foi para biblioteca
  8. Verificar se é possível ler o livro 
  9. Fazer avaliação do livro e verificar se a avaliação aparece na página principal do livro

Como administrador:
  1. Registrar novo livro
  2. Editar campos de livro existente
  3. Adicionar promoção
  4. Excluir promoção
  5. Adicionar administrador

## Resultados dos testes:

O comportamento do site apresenta ser satisfatório com um tempo de resposta rápido (principalmente considerando que não foram gastos recursos financeiros para hospedar o banco de dados). Na entrega final, não encontramos bugs que afetassem significativamente a experiência do usuário.


## Building:

É necessário ter o npm e o node.js instalados.

O front-end e o back-end (o site e o servidor) serão executados localmente, enquanto o banco de dados está hosteado num servidor de mongodb.

É necessário abrir 2 terminais um para o front e outro para o servidor:

No primeiro :

```sh
cd server
```

```sh
npm install
```

```sh
npm run server
```

No segundo:


```sh
cd projeto
```

```sh
npm install
```

```sh
npm run dev -- --port 3001
```

#### Alguns logins que vem com as configurações padrões são:
Conta administrador:  
Login: admin | Senha: admin  
Conta padrão:
Login: login | Senha: senha


## Problemas:

Os principais problemas encontrados pelo grupo foram:

1. Tamanho do projeto
2. Necessidade de aprendizado de diversas ferramentas novas
3. Integração com o banco de dados
4. Problemas de responsividade
5. Dificuldade com upload de arquivos por parte do usuário na criação de novos livros

## Comentários:

A segurança da aplicação não foi uma preocupação durante a criação do site.

Alguns dos frameworks/ferramentas usados pelo grupo foram:


* Figma (para o mockup)
* Bootstrap (para o css)
* Vue.js (front-end)
* Mongoose (integração entre o banco de dados e o servidor)
* MongoDB Compass (para a visualização do banco de dados)
* Postman (para simular requisições HTTP)
* Express (para fazer as rotas)
* VueNextCookies
