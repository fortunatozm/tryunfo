import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { data: { cardImage, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <label htmlFor="imagem">
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          name="cardImage"
          id="imagem"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  data: PropTypes.shape({
    cardImage: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Imagem;
