import React from 'react';
import { buscaPorNome } from '../services/api';
import Pokemon from '../components/Pokemon';

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
		const { pokemonBuscado, pokemonEncontrado } = this.state;
		return (
			<div>
				<div>
					<input
						className="input-busca-nome"
						type="text"
						onChange={this.OnChange}
						name="input-busca-nome"
						value={pokemonBuscado}
					/>
					<button
						className="botao-pesquisar"
						type="button"
						onClick={this.OnClick}
						name="botao-pesquisar-nome"
					>
						Pesquisar
					</button>
				</div>
				<section>
					<Pokemon objetoPokemon={ pokemonEncontrado }  />
				</section>
			</div>
		);
	}
}