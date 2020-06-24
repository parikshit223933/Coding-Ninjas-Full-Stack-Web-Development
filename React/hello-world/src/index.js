import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';/* the thing which i am importing, its name should be in capitals which will help react to distinguish a particular HTML element from the react DOM component and we will use camelcase for that */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
