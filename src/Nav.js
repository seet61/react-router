import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/" activeClassName="active">Главная</NavLink>
        <NavLink to="/about" activeClassName="active">О сайте</NavLink>
        <NavLink to="/products" activeClassName="active">Продукты</NavLink>
      </nav>
    );
  }
}

export default Nav;
