import React from 'react';

class Nome extends React.Component {
  render() {
    const { data: { cardName, onInputChange } } = this.props;
    console.log(cardName);

    return (
      <lebel>
        Nome:
        <input
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
      </lebel>
    );
  }
}

export default Nome;
