import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const name = 'Parikshit';
	const isLoggedIn = true;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{!isLoggedIn && <p>Hello World</p>}
				{isLoggedIn && <p>Hello {name}</p>}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React.js
				</a>
			</header>
		</div>
	);
}

export default App;
