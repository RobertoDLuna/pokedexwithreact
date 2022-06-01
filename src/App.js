import React from "react";
import { Switch, Route } from "react-router-dom";
import Informacoes from './router/Informacoes';
import Favoritos from "./router/Favoritos";
import NotFound from "./router/NotFound";
import Rotas from './router/Rotas';
import Header from './components/Header';
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
        <Header />
				<Switch>
          <Route exact path="/" component={ Rotas } />
					<Route exact path="/informacoes/:id" component={Informacoes} />
					<Route exact path="/favoritos" component={Favoritos} />
					<Route path="*" component={NotFound} />
				</Switch>
      </div>
    );
  }
}

