import React from 'react';
import PropTypes from 'prop-types';

class Descricao extends React.Component {
  render() {
    const { data: { cardDescription, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="textarea"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
          id="descricao"
        />
      </label>
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
