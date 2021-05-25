import React, { Component } from 'react';
import CardNotas from '../CardNota/CardNotas';
import './style.css';

class ListaDeNotas extends Component{
  render() {
    return (
      <ul className="lista-notas">
        {Array
          .of('Trabalho', 'Trabalho', 'Estudos')
          .map((categoria, index) => {
            return (
              <li className="lista-notas_item" key={ index }>
                <span>{ categoria }</span>
                <CardNotas />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default ListaDeNotas;
