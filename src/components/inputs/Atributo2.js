import React from 'react';
import PropTypes from 'prop-types';

class Atributo2 extends React.Component {
  render() {
    const { data: { cardAttr2, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Atributo2:
        <input
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="cardAttr2"
        />
      </lebel>
    );
  }
}

Atributo2.propTypes = {
  data: PropTypes.shape({
    cardAttr2: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Atributo2;
