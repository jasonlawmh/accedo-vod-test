import React, { Component } from 'react'
import MovieItem from './MovieItem';

export class Movies extends Component {
    render() {
        return this.props.movies
            .map((movie) => (
                <MovieItem key={movie.id} movie={movie} history={this.props.history} />
            ));
    }
}

export default Movies
