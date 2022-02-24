import React from 'react';

class Imagem extends React.Component {
  render() {
    const { data: { cardImage, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </lebel>
    );
  }
}

export default Imagem;
