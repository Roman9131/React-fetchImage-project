import  * as React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';

export default class Navigation extends React.PureComponent {
	render() {
		return (
				<header className="nav">
					<NavLink exact={true} activeClassName="nav__item_active" className="nav__item"  to="/">Главная</NavLink>
					<NavLink activeClassName="nav__item_active" className="nav__item"  to="/history">История</NavLink>
				</header>
		);
	}
}