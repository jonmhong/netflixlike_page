// @flow

import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
    state = {
        searchTerm: ''
    };
    props: {
        shows: Array<Show>,

    };

    handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <div className="search">
                <Header
                    showSearch
                    searchTerm={this.state.searchTerm}
                    handleSearchTermChange={this.handleSearchTermChange}
                />
                <div>
                    {this.props.shows
                        .filter(show =>
                            `${show.title} ${show.description}`.toUpperCase().indexOf(
                                this.state.searchTerm.toUpperCase()
                            ) >= 0
                        )
                        .map(show =>
                        <ShowCard key={show.imdbID} {...show} />
                    )}
                </div>
            </div>
        )
    }
}

export default Search;


