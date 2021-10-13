import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types'
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section className='pokedex'>
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