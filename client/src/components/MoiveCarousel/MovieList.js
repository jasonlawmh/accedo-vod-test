import React, { Component } from 'react';
import Movies from './Movies';

import { connect } from 'react-redux';
import { getMovies } from '../../actions/movieActions';

import PropTypes from 'prop-types';

export class MovieList extends Component {
  
    componentDidMount() {
      this.props.getMovies();
    }

    categoryCount = (movies) => {
      return movies.reduce((count, movie) => {
          movie.categories.forEach(category => {
            const cat_title = category.title;
            if ( ! Object.keys(count).some(category => category === cat_title)) {
              count[cat_title] = [movie];
            }else{
              count[cat_title].push(movie);
            }
          });
          return count;
      }, {})
    }

    render() {
        const { movies } = this.props.movies;
        const categoryCountObj = this.categoryCount(movies);
            
        return (
            Object.keys(categoryCountObj).map((category) => (
              <Movies key={category} category={category} movies={categoryCountObj[category]} history={this.props.history} />
            ))
        )
      }
}

MovieList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps, { getMovies })(MovieList);
