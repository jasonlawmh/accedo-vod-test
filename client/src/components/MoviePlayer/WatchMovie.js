import React, { Component } from 'react';
import queryString from 'query-string';

import { connect } from 'react-redux';
import { getHistory, addHistory, updateHistory } from '../../actions/historyActions';

import ReactPlayer from 'react-player'
import './WatchMovie.css';

import PropTypes from 'prop-types';

export class WatchMovie extends Component {

    state = {
        movie: {},
        watchComplete: false,
        playedSeconds: 0,
        watchBefore: false
    };

    setWatchComplete = (state) => {
        this.setState({ watchComplete: state });
    }

    /**
     * Handler when complete the movie. It will back to the main page
     */        
    handleWatchComplete = () => {
        this.setWatchComplete(true);
        this.props.history.push("/");
    }

    /**
     * Add the movie into view history or retrieve the watching progress
     * @param {Object} movie
     */         
    handleWatchOnStart = (movie) => {
        const { history } = this.props.view_history;
        this.setState({movie});

        const view_record = history.find( record => record.name === movie.id);

        const watchBefore = view_record !== undefined;
        this.setState({watchBefore});

        if ( ! watchBefore ) {
            const viewHistoryObj = { "name" : movie.id};
            this.props.addHistory(viewHistoryObj);
        }else{
            this.player.seekTo(parseFloat(view_record.playedSeconds), "seconds")
        }
    }

    /**
     * Handle the callback from React Player, update the play time into component state
     * @param {Object} state - Watching state
     */      
    handleProgress = state => {
        const { playedSeconds } = state;
        this.setState({playedSeconds});
    }
    
    componentDidMount() {
        this.props.getHistory(); //Get the history 
    }

    componentWillUnmount() {
        // When user leave the page, it will update the view history
        const { history } = this.props.view_history;

        const view_record = history.find( record => record.name === this.state.movie.id);
        
        if( view_record !== undefined ) {
            const playedSeconds = this.state.watchComplete ? 0 : this.state.playedSeconds;
            const viewHistoryObj = {...view_record, date: Date.now(), playedSeconds}
            this.props.updateHistory(view_record._id, viewHistoryObj);
        }
    }

    ref = player => {
        this.player = player
    }

    render() {
        // get the movie id 
        const value=queryString.parse(this.props.location.search);
        const id=value.id;

        // get the movies prop
        const { movies } = this.props.movies;

        const movie = movies.find(movie => movie.id === id);

        return (
            <div className="player-wrapper">
                {movie !== undefined && 
                    <ReactPlayer
                        ref={this.ref}
                        className='react-player'
                        url={movie.contents[0].url} 
                        width='100%'
                        height='100%'
                        controls={true}
                        onEnded={() => {this.handleWatchComplete()}}
                        onStart={() => {this.handleWatchOnStart(movie)}}
                        onProgress={(state) => {this.handleProgress(state)}}
                        playing
                    />
                }
            </div>
        )
    }
}

WatchMovie.propTypes = {
    movies: PropTypes.object.isRequired,
    addHistory: PropTypes.func.isRequired,
    getHistory: PropTypes.func.isRequired,
    view_history: PropTypes.object.isRequired,
    updateHistory: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    view_history: state.history,
    movies: state.movies
});
  
export default connect(mapStateToProps, { getHistory, addHistory, updateHistory })(WatchMovie);
