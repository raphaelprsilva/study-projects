import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
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
