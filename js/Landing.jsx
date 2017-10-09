// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import preload from '../data.json';
import Search from './Search';

class Landing extends Component {
	state = {
		homeSearchTerm: '',
	};

	render() {
		return(
			<div className='landing'>
        <h1>svideo</h1>
        <input
        	type='text'
        	placeholder='Search'
        />
        <Link 
        	to='/search'
        	onClick={() => {
        		<Search shows={preload.shows} {...state} />
        	}}
        >or Browse All</Link>
    	</div>
		)
	}
};

export default Landing;
