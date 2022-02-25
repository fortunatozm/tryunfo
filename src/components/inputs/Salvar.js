import React from 'react';
import PropTypes from 'prop-types';

class Salvar extends React.Component {
  render() {
    const { data: { onInputChange, isSaveButtonDisabled,
      onSaveButtonClick } } = this.props;

    return (
      <button
        type="button"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        onChange={ onInputChange }
        name="isSaveButtonDisabled"
      >
        Salvar
      </button>
    );
  }
}

Salvar.propTypes = {
  data: PropTypes.shape({
    onSaveButtonClick: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Salvar;
