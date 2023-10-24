# Twitch Bot
Criado como hobby com algumas funcionalidades em comando para chat da twitch.
Rodar 'node index.js' dentro da pasta pages para manter o bot rodando localmente.

Adicionar as chaves necessárias no .env como TWITCH_OAUTH_TOKEN para rodar o bot na twitch
e OPENAI_API_KEY para usar a função de geração de texto.

## !dice
Comando básico que retorna um número de 1 a 6 de um dado para o usuário.
## !pokekon {nome ou id}
Retorna algumas informações sobre um pokemon de acordo com o nome ou id da pokedex passado.
## !cadaver
Retorna uma frase aleatória gerada de acordo com as regras do jogo do Cadáver Esquisito.
Pode ser passado também um parâmetro "!cadaver {palavra}" para que substitua o primeiro substantivo da frase.
## Menção ao bot
Mencionar o nome do bot na twitch com uma mensagem fará com que ele responda com uma frase gerada através da openAI API.
O behavior do bot pode ser alterado no textGenerator.js na role "system"


# OpenAI API Quickstart - Node.js example app
This is a twitch bot integrated with openAI API for personal uses.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).
