import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import MovieList from './components/MoiveCarousel/MovieList';
import ViewHistory from './components/pages/ViewHistory';
import WatchMovie from './components/pages/WatchMovie'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import "video-react/dist/video-react.css"; 
import '@fortawesome/fontawesome-free';
import './App.css';

class App extends Component{

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <AppNavbar />

            <div className='container'> 
              <Route
                exact
                path='/'
                component={MovieList}
                // render={(props) => <MovieList {...props} movies={this.state.movies} />}
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
      </Provider>
    );
  }
}

export default App;

