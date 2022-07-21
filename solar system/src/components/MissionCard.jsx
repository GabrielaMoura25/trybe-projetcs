import React, { Component } from 'react';
import Proptypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className={ `${name}-c` } data-testid="mission-card">
        <p className={ `${name}-n` } data-testid="mission-name">{ name }</p>
        <p className={ `${name}-m` } data-testid="mission-year">{ year }</p>
        <p className={ `${name}-m` } data-testid="mission-country">{ country }</p>
        <p className={ `${name}-m` } data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptypes.string.isRequired,
  year: Proptypes.string.isRequired,
  country: Proptypes.string.isRequired,
  destination: Proptypes.string.isRequired,
};

export default MissionCard;
