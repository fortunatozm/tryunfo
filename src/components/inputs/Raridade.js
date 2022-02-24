import React from 'react';

class Raridade extends React.Component {
  render() {
    const { data: { cardRare, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <lebel>
        Raridade:
        <select
          type="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </lebel>
    );
  }
}

export default Raridade;
