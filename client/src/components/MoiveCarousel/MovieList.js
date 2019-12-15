import React, { Component } from 'react';
import Movies from './Movies';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MoiveCarousel.css';

export class MovieList extends Component {

    /**
     * Separate the movie into category
     * @param {Object} movies - The Moive List requested from the api
     */
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
  movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps, { })(MovieList);
