import React, { Component } from 'react';
import CardNotas from './CardNotas';

class ListaDeNotas extends Component{
  render() {
    return (
      <ul>
        {Array
          .of('Trabalho', 'Trabalho', 'Estudos')
          .map(categoria => {
            return (
              <li>
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
