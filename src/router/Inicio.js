import React from "react";
import { buscaPorNome } from "../services/api";
// import { buscaPorNome, buscaTodosOsPokemon, buscaPorTipo } from './services/api';

export default class Inicio extends React.Component {
	state = {
		pokemonBuscado: '',
		pokemonEncontrado: {},
	}

	OnChange = ({ target: { value } }) => {
		this.setState({ pokemonBuscado: value })
	}

	OnClick = async () => {
		const { pokemonBuscado } = this.state;
		const pokemonEncontrado = await buscaPorNome(pokemonBuscado.toLowerCase())
		this.setState({
			pokemonEncontrado,
			pokemonBuscado: ''
		})
	}

	render() {
		const { pokemonBuscado } = this.state;
		return (
			<div>
				<input
					className="input-busca"
					type="text"
					onChange={this.OnChange}
					name="input-busca"
					value={pokemonBuscado}
				/>
				<button
					className="botao-pesquisar"
					type="button"
					onClick={this.OnClick}
					name="botao-pesquisar"
				>
					Pesquisar
				</button>
			</div>
		);
	}
}