import React from 'react';

class Strunfo extends React.Component {
  render() {
    const { data: { cardTrunfo, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Super Trunfo:
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </lebel>
    );
  }
}

export default Strunfo;
