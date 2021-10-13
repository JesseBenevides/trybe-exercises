# Pokedex

Será implementado de forma simplificada uma `Pokedex!!` Para os que não estão familiarizados com o universo Pokemon , a Pokedex é uma enciclopédia de todos os pokemons na natureza. A aplicação precisa mostrar todos os pokemons presentes no arquivo `data.js`.

Serão implementados 2 componentes essenciais:

<hr>

### `1 Pokemon` :
  como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando `PropTypes`:

<li>nome do pokemon;</li>
<li>tipo do pokemon;</li>
<li>peso médio do pokemon, acompanhado da unidade de medida usada;</li>
<li>imagem do pokemon.</li>

<hr>

### `2 Pokedex` : 
  Esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .