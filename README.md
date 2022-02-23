## How to create this serverless

> Create project serverless

`$ serverless create --template aws-nodejs-typescript --path challenge-serverless`

> Instalando o plugin serverless-offline

`$ serverless plugin install -n serverless-offline`

> Instalando o dynamodb como dependência de desevolvimento <br> Para testar localmente.

`$ yarn add serverless-dynamodb-local -D`

> Instalando o dynamodb

`$ yarn serverless dynamodb install`

> Iniciando o dynamodb

`$ yarn serverless dynamodb start`
