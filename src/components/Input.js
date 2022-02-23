import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <form>
        <lebel>
          Nome:
          <input type="text" data-testid="name-input" />
        </lebel>
        <br />
        <lebel>
          Descrição:
          <input type="textarea" data-testid="description-input" />
        </lebel>
        <br />
        <lebel>
          Atributo1:
          <input type="number" data-testid="attr1-input" />
        </lebel>
        <br />
        <lebel>
          Atributo2:
          <input type="number" data-testid="attr2-input" />
        </lebel>
        <br />
        <lebel>
          Atributo3:
          <input type="number" data-testid="attr3-input" />
        </lebel>
        <br />
        <lebel>
          Imagem:
          <input type="text" data-testid="image-input" />
        </lebel>
        <br />
        <lebel>
          Raridade:
          <select type="select" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </lebel>
        <br />
        <lebel>
          Super Trunfo:
          <input type="checkbox" data-testid="trunfo-input" />
        </lebel>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Input;
