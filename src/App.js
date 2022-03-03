import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      dataVector: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const NMAX = 90;
      const SMAX = 210;
      const NMIN = 0;
      const SUM = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10);
      if (cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== ''
        && (parseInt(cardAttr1, 10) <= NMAX && parseInt(cardAttr1, 10) >= NMIN)
        && (parseInt(cardAttr2, 10) <= NMAX && parseInt(cardAttr2, 10) >= NMIN)
        && (parseInt(cardAttr3, 10) <= NMAX && parseInt(cardAttr3, 10) >= NMIN)
        && SUM <= SMAX) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
      cardAttr2, cardAttr3, cardTrunfo } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo };
    this.setState((prevState) => ({
      dataVector: [...prevState.dataVector, newCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
    }), () => {
      const { dataVector } = this.state;
      const result = dataVector.some((dado) => dado.cardTrunfo === true);
      if (result === false) {
        this.setState({
          hasTrunfo: false,
        });
      } else {
        this.setState({
          hasTrunfo: true,
        });
      }
    });
    // this.setState({
    // });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    const { dataVector } = this.state;
    // console.log(dataVector);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          dataVector.map((dado, index) => (
            <Card
              key={ index }
              cardName={ dado.cardName }
              cardDescription={ dado.cardDescription }
              cardAttr1={ dado.cardAttr1 }
              cardAttr2={ dado.cardAttr2 }
              cardAttr3={ dado.cardAttr3 }
              cardImage={ dado.cardImage }
              cardRare={ dado.cardRare }
              cardTrunfo={ dado.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
