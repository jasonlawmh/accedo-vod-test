import React, { Component } from 'react'
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
            count[cat_title] = count[cat_title] + 1 || 1;
          });
          return count;
      }, {})
    }

    render() {
        const { movies } = this.props.movie;

        const categoryCount_Obj = this.categoryCount(movies);
        console.log(categoryCount_Obj);
        return (
            <div>
            <h4>ALL</h4>
            <hr></hr>
            <div className="mb-12 movie-list-container">
              <div className="horizontal-scroll-wrapper">
                <Movies  movies={movies} history={this.props.history} />
              </div>
            </div>
            </div>
        )
    }
}

MovieList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  movie: state.movie
});

export default connect(mapStateToProps, { getMovies })(MovieList);
