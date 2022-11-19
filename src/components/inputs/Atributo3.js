import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { data: { cardAttr3, onInputChange } } = this.props;
    // console.log(cardName);
    return (
      <label htmlFor="attr3">
        Atributo3:
        <input
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="cardAttr3"
          id="attr3"
        />
      </label>
    );
  }
}

Atributo3.propTypes = {
  data: PropTypes.shape({
    cardAttr3: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Atributo3;
