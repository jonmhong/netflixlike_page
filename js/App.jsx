// @flow

import React from 'react';
// BrowserRouter: uses HTML5 API history, to keep UI in sync with URL
// Switch: renders routes exclusively
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Details from './Details';
import Landing from './Landing';
import Search from './Search';
import preload from '../data.json';

/*
// this is used for server side rendering
// BrowserRouter - higher order component that takes care of routing for you
// Route - render the Landing component if the path matches exactly '/'
// Switch - render exactly one component within, and never two
*/

const FourOhFour = () => <h1>404</h1>;

// TODO: update state, so you can search from the front page
const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        {/* This is how you comment */}
        <Route exact path="/" component={Landing} />
        {/* Loads to show lists page with search */}
        <Route path="/search" component={
          props => <Search shows={preload.shows} {...props}  />
        } />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


    const showSearchFilter = () => {
      return(
        <Search shows={preload.shows} {...this.state} />
      )
    }