// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	state = {
		searchTerm: '',
	};

	render() {
		return(
			<div className='landing'>
        <h1>svideo</h1>
        <input
        	type='text'
        	placeholder='Search'
        	searchTerm={this.state.searchTerm}
        />
        <Link to='/search'>or Browse All</Link>
    	</div>
		)
	}
};

export default Landing;
