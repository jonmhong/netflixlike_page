import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

// BrowserRouter - higher order component that takes care of routing for you
// Route - render the Landing component if the path matches exactly '/'
// Switch - render exactly one component within, and never two

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<BrowserRouter>
		<div className='app'>
			<Switch>
				{/* This is how you comment */}
				<Route exact path='/' component={Landing} />
				<Route path ='/search' component={Search} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

render(<App />, document.getElementById('app'));
