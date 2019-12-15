import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Module
import AppNavbar from './components/layout/AppNavbar';
import MovieList from './components/MoiveCarousel/MovieList';
import ViewHistory from './components/ViewHistory/ViewHistory';
import WatchMovie from './components/MoviePlayer/WatchMovie'

// Redux
import { connect } from 'react-redux';
import { getMovies } from './actions/movieActions';

import PropTypes from 'prop-types';

// Global css
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import './App.css';

class App extends Component{

  //Get the Movie List
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
        <Router>
          <div className="App">

            <AppNavbar />

            <div className='container'> 
              <Route
                exact
                path='/'
                component={MovieList}
              />
              <Route
                path='/ViewHistory'
                component={ViewHistory}
              />
              <Route
                path='/WatchMovie'
                component={WatchMovie}
              />
            </div>
          </div>
        </Router>
    );
  }
}

App.propTypes = {
  getMovies: PropTypes.func.isRequired,
}

export default connect(null, { getMovies })(App);

