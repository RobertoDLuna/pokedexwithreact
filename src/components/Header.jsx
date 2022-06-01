import React from "react";
import '../css/header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return (
			<nav>
				<Link to="/" className="link-nav">
          Inicio
        </Link>
        <Link to="/favoritos" className="link-nav">
          Favoritos
        </Link>
			</nav>
		);
	}
}