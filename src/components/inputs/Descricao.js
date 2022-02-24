import React from 'react';

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
        />
      </lebel>
    );
  }
}

export default Descricao;
