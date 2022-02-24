import React from 'react';

class Salvar extends React.Component {
  render() {
    const { data: { isSaveButtonDisabled, onSaveButtonClick } } = this.props;
    // console.log(cardName);

    return (
      <button
        type="button"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

export default Salvar;
