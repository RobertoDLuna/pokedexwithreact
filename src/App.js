import React from "react";
import { Switch, Route } from "react-router-dom";
import Informacoes from './router/Informacoes';
import Favoritos from "./router/Favoritos";
import NotFound from "./router/NotFound";
import Header from './components/Header';
import './App.css';
import Inicio from "./router/Inicio";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/informacoes/:id" component={Informacoes} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

