import pokemonList from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <Pokedex pokemons={pokemonList}/>
  );
}

export default App;
