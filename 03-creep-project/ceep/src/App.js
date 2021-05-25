import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/index';
import FormularioCadastro from './components/FormularioCadastro/index';
import '../src/assets/App.css';
import '../src/assets/index.css';

class App extends Component {
  criarNota(titulo, text) {
    console.log('uma nova nota foi criada' + titulo + text);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
