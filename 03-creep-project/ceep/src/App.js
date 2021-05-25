import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/index';
import FormularioCadastro from './components/FormularioCadastro/index';
import '../src/assets/App.css';
import '../src/assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
