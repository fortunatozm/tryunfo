import React from 'react';
import PropTypes from 'prop-types';

class Atributo1 extends React.Component {
  render() {
    const { data: { cardAttr1, onInputChange } } = this.props;
    // console.log(cardName);
    return (
      <label htmlFor="attr1">
        Atributo1:
        <input
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="cardAttr1"
          id="attr1"
        />
      </label>
    );
  }
}

Atributo1.propTypes = {
  data: PropTypes.shape({
    cardAttr1: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Atributo1;
