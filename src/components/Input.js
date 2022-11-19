import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { data: { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } } = this.props;
    // console.log(cardName);

    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            id="nome"
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição:
          <input
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            id="descricao"
          />
        </label>
        <br />
        <label htmlFor="attr1">
          Atributo1:
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            id="attr1"
          />
        </label>
        <br />
        <lebel htmlFor="attr2">
          Atributo2:
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            id="attr2"
          />
        </lebel>
        <br />
        <label htmlFor="attr3">
          Atributo3:
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            id="attr3"
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            id="imagem"
          />
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade:
          <select
            type="select"
            data-testid="rare-input"
            value={ cardRare }
            id="raridade"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="strunfo">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            value={ cardTrunfo }
            id="strunfo"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Input.propTypes = {
  data: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default Input;
