import React from 'react';

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
        />
      </lebel>
    );
  }
}

export default Atributo2;
