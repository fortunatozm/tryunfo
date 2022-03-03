import React from 'react';
import PropTypes from 'prop-types';

class Strunfo extends React.Component {
  render() {
    const { data: { cardTrunfo, onInputChange, hasTrunfo } } = this.props;
    console.log(hasTrunfo);
    let txt = '';
    if (hasTrunfo === true) {
      txt = <span>Você já tem um Super Trunfo em seu baralho</span>;
    } else {
      txt = (
        <label htmlFor="input">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            disabled={ hasTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            id="input"
          />
        </label>);
    }

    // { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : 'Super Trunfo'}
    return (
      <lebel>
        { txt }
      </lebel>
    );
  }
}

Strunfo.propTypes = {
  data: PropTypes.shape({
    cardTrunfo: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Strunfo;
