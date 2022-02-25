import React from 'react';
import PropTypes from 'prop-types';

class Strunfo extends React.Component {
  render() {
    const { data: { cardTrunfo, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Super Trunfo:
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
        />
      </lebel>
    );
  }
}

Strunfo.propTypes = {
  data: PropTypes.shape({
    cardTrunfo: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Strunfo;
