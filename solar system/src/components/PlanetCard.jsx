import React, { Component } from 'react';
import Proptypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p className={ `${planetName}-p` } data-testid="planet-name">{ planetName }</p>
        <img
          className={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: Proptypes.string.isRequired,
  planetImage: Proptypes.string.isRequired,
};
export default PlanetCard;
