# Projeto da disciplinha de Engenharia de Software

![Spring](https://img.shields.io/badge/IDE-SpringTool-success)
![VSCode](https://img.shields.io/badge/IDE-VSCode-blue)
![ISOlinux](https://img.shields.io/badge/ISO-Ubuntu-blueviolet)
![ISOwin10](https://img.shields.io/badge/ISO-Win10-blue)
![License](https://badgen.net/badge/license/MIT/green)

![VersionJava](https://img.shields.io/badge/Java-17.0.4.1-red)
![VersionNode](https://img.shields.io/badge/Node-14.17.0-success)
![VersionNpm](https://img.shields.io/badge/npm-6.14.13-red)
![VersionAngular](https://img.shields.io/badge/Angular-14.2.3-red)

# Compilação

- Para compilar a aplicação **back-end** é necessário que o java 17 esteja instalado, como a aplicação esta fazendo o uso de banco de dados, foi escolhido o mysql para gerenciamento, o usuario e senha devem ser modificadas em [application.properties](https://github.com/danieldiv/gerencia-fazenda/blob/main/fazenda-api/src/main/resources/application.properties). A compilação será feita utilizando o maven.

- Para compilar a aplicação **front-end** o angular deve estar instalado, fazendo o uso do npm e node. Antes de compilar é necessario baixar os pacotes atraves do comando `npm install`, apos intalar os pacotes execute `ng serve`. É necessário estar na pasta da aplicação front-end.

- Em ambiente linux foi utilizado o `prompt de comando` para compilar a aplicação api.

## Windows - API

- Na pasta do projeto execute `mvnw clean package`.

## Linux - API

- Na pasta do projeto execute `mvn clean package`.

> Para compilar em Windowns ou Linux acesse a pasta target que contem o arquivo .jar, execute o comando `java -jar aplicacao.jar`. Caso tenha problemas, utilize `-DskipTests` para pular os testes.

# Acessando as aplicações

- A aplicação `back-end` será inicilizada na porta 8080 por padrão, para ter acesso a ela é necessário passar por duas autenticações, a primeira envolvendo a aplicacão e a outra envolvendo o usuario. A aplicação `front-end` que estara rodando na porta 4200 traz essas autenticações de uma forma mais amigavel, ou seja, o usuário precisa informar apenas `usuario` e `senha`, a autenticação de aplicação já esta configurada dentro da codificação.

> O back-end e front por padrão vao inicializar na porta local, ou seja, para acesar aplicação front-end digite `http://localhost:4200/` que será redirecionado para a página de login.

<!-- <p>
  Este projeto tem o objetivo de auxiliar na gestao de fazendas ...
</p> -->

<!-- ## Fazer (API)

| Tabelas        | Leitura                            | Cadastro                           | Atualizacao                        | Remocao                            |
| -------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| animal         | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| campo          | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| cultura        | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| equipamento    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| funcionario    | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :x:                 | :green_circle: :heavy_check_mark:  |
| granja         | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| lancamento     | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |                                    | :green_circle: :heavy_check_mark:  |
| ovos           | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: |
| pasto          | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| plantio        | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: |
| producao leite | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: |
| setor          | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |

## Fazer (ui - validar)

| Tabelas        | Leitura                            | Cadastro                           | Atualizacao                        | Remocao                            |
| -------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| animal         | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| campo          | :red_circle::heavy_check_mark:     | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| cultura        | :red_circle::heavy_check_mark:     | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| equipamento    | :green_circle::heavy_check_mark:   | :green_circle: :heavy_check_mark:  | :green_circle: :x:                 | :green_circle: :heavy_check_mark:  |
| funcionario    | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :x:                 | :green_circle: :heavy_check_mark:  |
| granja         | :red_circle::heavy_check_mark:     | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |
| lancamento     | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  | :green_circle: :x:                 | :green_circle: :heavy_check_mark:  |
| ovos           | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :x:                | :yellow_circle: :heavy_check_mark: |
| pasto          | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :x:                 | :green_circle: :heavy_check_mark:  |
| plantio        | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :x:                | :yellow_circle: :heavy_check_mark: |
| producao leite | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: | :yellow_circle: :heavy_check_mark: |
| setor          | :red_circle: :heavy_check_mark:    | :red_circle: :heavy_check_mark:    | :green_circle: :heavy_check_mark:  | :green_circle: :heavy_check_mark:  |

### Legenda (prioridade)

| alta         | media           | baixa          | fazer | feito              |
| ------------ | --------------- | -------------- | ----- | ------------------ |
| :red_circle: | :yellow_circle: | :green_circle: | :x:   | :heavy_check_mark: | -->
