import React from 'react';
import PropTypes from 'prop-types';

class Nome extends React.Component {
  render() {
    const { data: { cardName, onInputChange } } = this.props;
    // console.log(cardName);

    return (
      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          name="cardName"
          id="nome"
        />
      </label>
    );
  }
}

Nome.propTypes = {
  data: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Nome;
