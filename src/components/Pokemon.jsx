import React from "react";
import { Link } from 'react-router-dom';

export default class Pokemon extends React.Component {

  carregaPokemon = () => {
    const { objetoPokemon } = this.props;
    if(objetoPokemon.types) {
      const { name, types, abilities, sprites } = objetoPokemon;
      const todosOsTipos = types.map((tipo)=>{
        return (
          <p key={ tipo.slot }>{tipo.type.name}</p>
        )
      });
      const todasAsAbilities = abilities.map((habilidade)=>{
        return (
          <p key={ habilidade.slot }>{habilidade.ability.name}</p>
        )
      });
      return (
        <div>
          <p>{name}</p>
          <img src={ sprites.front_default } alt={name} />
          {todosOsTipos}
          { todasAsAbilities }
        </div>
      );
    }
  }

	render() {
		return (
			<div>
        {this.carregaPokemon()}
			</div>
		);
	}
}