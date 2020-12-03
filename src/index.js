import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { GlobalStyle } from "./globalStyle";

ReactDOM.render(
	<>
	<GlobalStyle />
  	<Provider store={store}>
		<Routes/>
	</Provider></>,
	document.getElementById('root')
);