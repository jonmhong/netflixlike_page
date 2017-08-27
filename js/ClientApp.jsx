import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
	render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
	// only available in dev
	// every time App changes, just rerender the whole app
	module.hot.accept('./App', () => {
		renderApp();
	});
};
