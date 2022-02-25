import React from 'react';
import PropTypes from 'prop-types';

class Descricao extends React.Component {
  render() {
    const { data: { cardDescription, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Descrição:
        <input
          type="textarea"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
        />
      </lebel>
    );
  }
}

Descricao.propTypes = {
  data: PropTypes.shape({
    cardDescription: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Descricao;
