import React, { Component } from 'react'
//import { Player, BigPlayButton, ControlBar, LoadingSpinner } from 'video-react';
import ReactPlayer from 'react-player'
import queryString from 'query-string'
import MoviePlayer from './MoviePlayer';

import { connect } from 'react-redux';
import { getMovies } from '../../actions/movieActions';

import PropTypes from 'prop-types';

export class WatchMovie extends Component {

    state = {
		watchComplete: false
    };

    setWatchComplete = (state) => {
        this.state.watchComplete = state;
    }

    // handleWatchComplete = ({played}) => {
    //     if( played === 1 && !this.state.watchComplete ){
    //         this.setWatchComplete(true);
    //         this.props.history.push("/");
    //     }
    // }

    handleWatchComplete = () => {
        this.setWatchComplete(true);
        this.props.history.push("/");
    }

    startWithFullScreen = () => {
        console.log("startWithFullScreen");
    }
    
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        // get the movie id 
        const value=queryString.parse(this.props.location.search);
        const id=value.id;

        // get the movies prop
        const { movies } = this.props.movie;
        //get the movie object
        const movie = movies.find(movie => movie.id === id);

        return (
            <MoviePlayer 
                movie={movie}
                onStart={this.startWithFullScreen}
                onEnded={this.handleWatchComplete}
            />
        )
    }
}

WatchMovie.propTypes = {
    getMovies: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie
  });
  
export default connect(mapStateToProps, { getMovies })(WatchMovie);
