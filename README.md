# 🏁 Desafio FullStack: Lista de Clientes - API

O projeto trata-se de uma Api RESTful utilizando Typeorm, que consiste em um CRUD de clientes e contatos, com autenticação e validações. O armazenamento dos dados é feito em um banco de dados PostgreSql.

Pré-requisitos:

Node.js (versão 8.19.3)
Yarn (opcional, mas recomendado)

Configuração do Projeto:

1 - Clone este repositório: git clone git@github.com: git@github.com:JOAOVITOR1993/cadastro-clientes-api-JOAOVITOR1993.git

2 - Acesse o diretório do projeto: cd cadastro-clientes-api-JOAOVITOR1993

3 - Instale as dependências: yarn install

4 - Crie um banco de dados PostgreSql em sua máquina

5- Crie um arquivo .env na raiz do projeto baseado em 
.env.example

6 - Preencha DATABASE_URL com os dados de conexão no arquivo .env

7 - Inicie o servidor e faça a conexão com banco de dados: yarn dev

Utilize o comando abaixo para rodar as migrações:

yarn typeorm migration:run -d ./src/data-source

Recursos e Dependências Principais:

Bcryptjs (versão 2.4.3)
Cors (versão 2.8.5)
Dotenv (versão 16.0.3)
Express (versão 4.18.2)
Express-async-errors (versão 3.1.1)
Jsonwebtoken (versão 9.0.0)
Pg (versão 8.9.0)
Reflect-metadata (versão 0.1.13)
Typeorm (versão 0.3.10)
Zod (versão 3.20.6)






