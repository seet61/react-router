import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Products from './Products';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/about/:id/:name?" component={About} />
				<Route path="/products" component={Products} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>, 
	document.getElementById('root')
);
registerServiceWorker();
