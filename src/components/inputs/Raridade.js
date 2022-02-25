import React from 'react';
import PropTypes from 'prop-types';

class Raridade extends React.Component {
  render() {
    const { data: { cardRare, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Raridade:
        <select
          type="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </lebel>
    );
  }
}

Raridade.propTypes = {
  data: PropTypes.shape({
    cardRare: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Raridade;
