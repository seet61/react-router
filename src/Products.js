import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Phone extends Component {
	render() {
		return (
			<h3>Смартфоны</h3>
		);
	}
}

class Tablet extends Component {
	render() {
		return (
			<h3>Планшеты</h3>
		);
	}
}

class Products extends Component {
  render() {
    return (
    	<div>
    		<h2>Товары</h2>
    		<Switch>
    			<Route path="/products/phones" component={Phone} />
    			<Route path="/products/tablets" component={Tablet} />
    		</Switch>
    	</div>
    );
  }
}

export default Products;
