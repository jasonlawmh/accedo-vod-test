import React, { Component } from 'react';
import queryString from 'query-string';
import MoviePlayer from './MoviePlayer';

import { connect } from 'react-redux';
import { getMovies } from '../../actions/movieActions';
import { addHistory } from '../../actions/historyActions';

import PropTypes from 'prop-types';

export class WatchMovie extends Component {

    state = {
        watchComplete: false,
        playedSeconds: 0,
        movie: {}
    };

    setWatchComplete = (state) => {
        this.setState({ watchComplete: state });
    }

    setCurrentMovie = (state) => {
        this.setState({ movie: state });
    }

    handleWatchComplete = () => {
        this.setWatchComplete(true);
        this.props.history.push("/");
    }

    handleWatchOnStart = (movie) => {
        const viewHistoryObj = { "name" : movie.id};
        this.props.addHistory(viewHistoryObj);
    }
    
    componentDidMount() {
        this.props.getMovies();
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        // get the movie id 
        const value=queryString.parse(this.props.location.search);
        const id=value.id;

        // get the movies prop
        const { movies } = this.props.movies;

        const movie = movies.find(movie => movie.id === id);

        return (
            <MoviePlayer 
                movie={movie}
                onStart={() => {this.handleWatchOnStart(movie)}}
                onEnded={() => {this.handleWatchComplete()}}
            />
        )
    }
}

WatchMovie.propTypes = {
    getMovies: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired,
    addHistory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    movies: state.movies
  });
  
export default connect(mapStateToProps, { getMovies, addHistory })(WatchMovie);
