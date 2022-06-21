# WEBOOK - Plataforma Online para Venda de Ebooks

![Screenshot](/src/components/icons/logo.png)

Repositório destinado ao projeto final da disciplina de Introdução ao Desenvolvimento WEB - SCC0219. Este projeto visa o
desenvolvimento de uma plataforma de venda e leitura de Ebooks, os Ebooks em si são ilimitados, mas o site conta com
promoções de Ebook e a quantidade de Ebooks em promoção é limitada, definida pelo administrador e pode ser visualizada
pelo cliente.

## Integrantes:

- 10691992 &nbsp; Ana Clara Amorim Andrade

- 11796656 &nbsp; Eduardo Henrique Porto Silva

<<<<<<< HEAD
- 11795526  &nbsp; Tulio Santana Ramos 

## Conteúdo:
=======
- 11795526 &nbsp; Tulio Santana Ramos

## Conteúdo:

- [Reultados dos Testes](#resultados-dos-testes)
- [Building](#building)
- [Problemas](#problemas)
- [Comentários](#comentários)
## Requisitos:
<<<<<<< HEAD
O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O aplicativo já vem com uma conta admin com senha admin.
=======

O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O
aplicativo já vem com uma conta admin com senha admin.
>>>>>>> sistema/main

Clientes são usuários que acessam o sistema para comprar produtos.

Admin: nome, id, telefone, email

User: nome, id, endereço, telefone, email

<<<<<<< HEAD
Produto: nome, id, foto, descrição, preço, qtde vendida, se o livro está em promoção e a quantidade do ebook restante em estoque.

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque (em caso de promoção) e adicionada à quantidade vendida. Os carrinhos são esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir/adicionar Ebooks e promoções. Por exemplo, eles podem alterar a quantidade em estoque.

Como funcionalidade extra, optamos por implementar a visualização da preview do ebook em sua página. O usuário poderá ler o Epílogo ou as páginas iniciais do primeiro capítulo, dependendo da constituição do produto. Além disso, em nossa plataforma, o usuário terá acesso aos ebooks comprados por meio de sua “biblioteca”, dessa forma, a leitura pré e pós compra do produto poderá ser efetuada de maneira direta dentro do ambiente criado. E outra funcionalidade extra é o sistema de avaliação dos livros por parte do cliente, que pode escrever um review e dar uma nota para cada livro comprado.
=======
Produto: nome, id, foto, descrição, preço, qtde vendida, se o livro está em promoção e a quantidade do ebook restante em
estoque.

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos
são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto
vendida é subtraída da quantidade em estoque (em caso de promoção) e adicionada à quantidade vendida. Os carrinhos são
esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir/adicionar Ebooks e promoções. Por
exemplo, eles podem alterar a quantidade em estoque.

Como funcionalidade extra, optamos por implementar a visualização da preview do ebook em sua página. O usuário poderá
ler o Epílogo ou as páginas iniciais do primeiro capítulo, dependendo da constituição do produto. Além disso, em nossa
plataforma, o usuário terá acesso aos ebooks comprados por meio de sua “biblioteca”, dessa forma, a leitura pré e pós
compra do produto poderá ser efetuada de maneira direta dentro do ambiente criado. E outra funcionalidade extra é o
sistema de avaliação dos livros por parte do cliente, que pode escrever um review e dar uma nota para cada livro
comprado.
>>>>>>> sistema/main

O sistema é responsivo e visa uma boa acessibilidade e usabilidade para os usuários.

## Descrição:
<<<<<<< HEAD
WEBOOK é uma plataforma online de venda de livros digitais. O sistema conterá obras de diferentes categorias, visando entreter o público em geral. Implementado com HTML, CSS, JavaScript e Vue.js no front-end. Já para o back-end, foi utilizado Node.js e MongoDB para o banco de dados.

### Diagrama de Navegação:
![Screenshot](Diagram.png)
  
As diferentes telas criadas como mockup podem ser encontradas em [/mockup](https://github.com/Tulio-Santana-Ramos/WEBOOK/tree/main/mockups) ou diretamente no [Figma](https://www.figma.com/file/q7jnpJB5LKc1Gr9y7ymZ2c/WEBOOK?node-id=0%3A1)
=======

WEBOOK é uma plataforma online de venda de livros digitais. O sistema conterá obras de diferentes categorias, visando
entreter o público em geral. Implementado com HTML, CSS, JavaScript e Vue.js no front-end. Já para o back-end, foi
utilizado Node.js e MongoDB para o banco de dados.

### Diagrama de Navegação:

![Screenshot](/public/Diagram.png)

As diferentes telas criadas como mockup podem ser encontradas diretamente
no [Figma](https://www.figma.com/file/q7jnpJB5LKc1Gr9y7ymZ2c/WEBOOK?node-id=0%3A1)
>>>>>>> sistema/main

## Comentários sobre o código:

## Plano de teste:
<<<<<<< HEAD
Pretendemos usar o Insomnia para verificar a validade das requisições (GET, POST, DELETE) no back-end. Além disso, serão efetuados testes nos navegadores Microsoft Edge, Firefox e Google Chrome, navegadores utilizados amplamente no mercado, assim como nos sistemas operacionais Windows e Linux (Ubuntu).
=======

Pretendemos usar o Insomnia para verificar a validade das requisições (GET, POST, DELETE) no back-end. Além disso, serão
efetuados testes nos navegadores Microsoft Edge, Firefox e Google Chrome, navegadores utilizados amplamente no mercado,
assim como nos sistemas operacionais Windows e Linux (Ubuntu).
>>>>>>> sistema/main

## Resultados dos testes:

## Building:

<<<<<<< HEAD
=======
### Recomendação de IDE e extensões úteis:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable Vetur)

+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Configuração customizável:

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Configurando o projeto:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Finalizar configuração do localStorage e dos Cookies
#### Para completar a configuração do site sem usar um servidor é necessário ir para a rota /resetConfig, isso vai salvar algumas variáveis necessárias para a execução do código
#### Alguns logins que vem com as configurações padrões são:
Conta administrador:  
Login: admin | Senha: admin  
Conta padrão:
Login: login | Senha: senha


>>>>>>> sistema/main
## Problemas:

## Comentários:
