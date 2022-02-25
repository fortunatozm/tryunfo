import React from 'react';
import Nome from './inputs/Nome';
import Descricao from './inputs/Descricao';
import Atributo1 from './inputs/Atributo1';
import Atributo2 from './inputs/Atributo2';
import Atributo3 from './inputs/Atributo3';
import Imagem from './inputs/Imagem';
import Raridade from './inputs/Raridade';
import Strunfo from './inputs/Strunfo';
import Salvar from './inputs/Salvar';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Nome data={ this.props } />
          <br />
          <Descricao data={ this.props } />
          <br />
          <Atributo1 data={ this.props } />
          <br />
          <Atributo2 data={ this.props } />
          <br />
          <Atributo3 data={ this.props } />
          <br />
          <Imagem data={ this.props } />
          <br />
          <Raridade data={ this.props } />
          <br />
          <Strunfo data={ this.props } />
          <br />
          <Salvar data={ this.props } />
        </form>
      </div>
    );
  }
}

export default Form;
