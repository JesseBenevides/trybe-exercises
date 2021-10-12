import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section>
        <h1>Minha Pokedex</h1>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default Pokedex;