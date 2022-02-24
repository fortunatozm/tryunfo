import React from 'react';

class Atributo3 extends React.Component {
  render() {
    const { data: { cardAttr3, onInputChange } } = this.props;
    // console.log(cardName);
    return (
      <lebel>
        Atributo3:
        <input
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </lebel>
    );
  }
}

export default Atributo3;
