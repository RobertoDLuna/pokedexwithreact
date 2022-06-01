import React from 'react';
import './App.css';
import { buscaPorNome, buscaTodosOsPokemon, buscaPorTipo } from './services/api';

export default class App extends React.Component {
  async componentDidMount() {
    const ditto = await buscaPorNome('ditto');
    console.log(ditto);
    const todos = await buscaTodosOsPokemon();
    console.log(todos);
    const normal = await buscaPorTipo('normal');
    console.log(normal);
  }
  render() {
    return (
      <div>
        Pokémon temos que pegar
      </div>
    );
  }
}

