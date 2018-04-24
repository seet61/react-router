import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
        <Link to="/products">Продукты</Link>
      </nav>
    );
  }
}

export default Nav;
