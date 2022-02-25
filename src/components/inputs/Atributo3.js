import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { data: { cardAttr3, onInputChange } } = this.props;
    // console.log(cardName);
    return (
      <lebel>
        Atributo3:
        <input
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="cardAttr3"
        />
      </lebel>
    );
  }
}

Atributo3.propTypes = {
  data: PropTypes.shape({
    cardAttr3: PropTypes.number.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Atributo3;
