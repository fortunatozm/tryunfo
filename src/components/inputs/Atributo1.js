import React from 'react';

class Atributo1 extends React.Component {
  render() {
    const { data: { cardAttr1, onInputChange } } = this.props;
    // console.log(cardName);
    return (
      <lebel>
        Atributo1:
        <input
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
      </lebel>
    );
  }
}

export default Atributo1;
