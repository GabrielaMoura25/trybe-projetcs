import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="miplas">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: Proptypes.string.isRequired,
};

export default Title;
