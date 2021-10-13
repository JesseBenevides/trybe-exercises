import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon-card">
        <div className="pokemon-info">
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img className="pokemon-image" src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;