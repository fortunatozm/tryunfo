import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <span data-testid="name-card">
          { cardName }
        </span>
        <br />
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <br />
        <span data-testid="description-card">
          { cardDescription }
        </span>
        <br />
        <span data-testid="attr1-card">
          { cardAttr1 }
        </span>
        <br />
        <span data-testid="attr2-card">
          { cardAttr2 }
        </span>
        <br />
        <span data-testid="attr3-card">
          { cardAttr3 }
        </span>
        <br />
        <span data-testid="rare-card">
          { cardRare }
        </span>
        <br />
        { cardTrunfo ? <span data-testid="trunfo-card"> Super Trunfo </span> : null}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
