import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <div className="planetas">
          <p><Title className="plan" headline="Planetas" /></p>
        </div>
        {planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
      </div>
    );
  }
}

export default SolarSystem;
