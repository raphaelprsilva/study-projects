import React, { Component } from 'react';
import CardNotas from '../CardNota/CardNotas';

class ListaDeNotas extends Component{
  render() {
    return (
      <ul>
        {Array
          .of('Trabalho', 'Trabalho', 'Estudos')
          .map((categoria, index) => {
            return (
              <li key={ index }>
                <span>{ categoria }</span>
                <CardNotas/>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default ListaDeNotas;
