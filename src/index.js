import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './Main';
import About from './About';
import Products from './Products';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/about" component={About} />
			<Route path="/products" component={Products} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>, 
	document.getElementById('root')
);
registerServiceWorker();
