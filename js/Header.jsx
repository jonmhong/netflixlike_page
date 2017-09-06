// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: {
	searchTerm?: String,
	showSearch?: boolean,
	handleSearchTermChange?: Function
}) => { 
	let utilSpace;
	if (props.showSearch) {
		utilSpace = (
			<input
		        onChange={props.handleSearchTermChange}
		        value={props.searchTerm}
		        type='text'
		        placeholder='Search'
    		/>
    	);
	} else {
		utilSpace = (
			<h2>
				<Link to='/search'>
					Back
				</Link>
			</h2> 
		)
	}

	return(
		<header>
			<h1>
				<Link to='/'>
					svideo
				</Link>
			</h1>
			{utilSpace}
		</header>
	)
}

Header.defaultProps = {
	// if they don't ask for search, default to false
	showSearch: false,
	searchTerm: '',
	handleSearchTermChange: () => {}
}

export default Header;