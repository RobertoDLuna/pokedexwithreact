import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Informacoes from "./Informacoes";
import Favoritos from "./Favoritos";
import NotFound from "./NotFound";

export default class Rotas extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Rotas} />
				<Route exact path="/informacoes/:id" component={Informacoes} />
				<Route exact path="/favoritos" component={Favoritos} />
				<Route path="*" component={NotFound} />
			</Switch>
		);
	}
}