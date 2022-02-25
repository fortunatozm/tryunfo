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
        <lebel>
          Nome:
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </lebel>
        <br />
        <lebel>
          Descrição:
          <input
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
          />
        </lebel>
        <br />
        <lebel>
          Atributo1:
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
          />
        </lebel>
        <br />
        <lebel>
          Atributo2:
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
          />
        </lebel>
        <br />
        <lebel>
          Atributo3:
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
          />
        </lebel>
        <br />
        <lebel>
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
          />
        </lebel>
        <br />
        <lebel>
          Raridade:
          <select
            type="select"
            data-testid="rare-input"
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </lebel>
        <br />
        <lebel>
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            value={ cardTrunfo }
          />
        </lebel>
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
