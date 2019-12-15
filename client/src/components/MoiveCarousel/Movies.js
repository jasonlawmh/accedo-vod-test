import React, { Component } from 'react';
import Toggle from 'react-bootstrap-toggle';
import MovieItem from './MovieItem';
import Slider from "react-slick";

import { connect } from 'react-redux';
import { setCurrentMovieSlide } from '../../actions/movieActions';

import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Movies extends Component {

    state = {
      toggleActive: true,
      display : "block",
      initClick : false
    };
    
    /**
     * Handle scroll within the movie carousel
     * @param {Object} event
     */
    handleWheel = (e) => {
        //e.preventDefault();
        e.deltaX > 0 ? this.slider.slickNext() : this.slider.slickPrev();
    }

    /**
     * Handle click action within the movie carousel
     * @param {Object} event
     */
    handleClick = (e) => {
      //e.preventDefault();
      if (! this.state.initClick ) {
        const current_movie_slide = {category : this.props.category, movie_id : this.props.movies[0].id};
        this.slider.innerSlider.list.setAttribute('tabindex', -1);
        this.slider.innerSlider.list.focus();
        this.props.setCurrentMovieSlide(current_movie_slide);

        this.setState({initClick : true})
      }
    }

    /**
     * Handle after selecting a new moive item
     * @param {Object} current_movie_slide - To write in the redux state
     */    
    handleAfterChangeEvent = (current_movie_slide) => {
      this.props.setCurrentMovieSlide(current_movie_slide);
    }

    /**
     * Show / Hide the movie carousel by toggling the category button
     */     
    onToggle = () => {
      this.setState({ toggleActive: !this.state.toggleActive });
      if(! this.state.toggleActive){
        this.setState({ display: "block" });
      }else{
        this.setState({ display: "none" });
      }
    }

    /**
     * Handle keyDown action within the movie carousel
     * @param {Object} event
     */    
    keyNavigation = (event) => {
      if (event.keyCode === 37 ) {
          this.slider.slickPrev();
      }else if (event.keyCode === 39) {
          this.slider.slickNext();
      }else if (event.keyCode === 13) {
        this.props.history.push(`/WatchMovie?id=${this.props.current_movie_slide.movie_id}`)
      }
    }

    render() {

        const category = this.props.category;
        
        const width_ratio = (ele_num) => {
          return ele_num >=4 ? "100%" : (ele_num * 25).toString() + "%";
        }

        const style = {
          display : this.state.display,
          width : width_ratio(this.props.movies.length)
        }

        const settings = {
            infinite: this.props.movies.length > 1,
            arrows: true,
            focusOnSelect: true,
            swipeToSlide: true,
            speed: 500,
            slidesToShow: this.props.movies.length >= 4 ? 4 : this.props.movies.length ,
            slidesToScroll: 1,
            lazyLoad: true,
            afterChange: (currentSlide) => { 
              const current_movie_slide = {category : category, movie_id : this.props.movies[currentSlide].id};
              this.slider.innerSlider.list.setAttribute('tabindex', currentSlide);
              this.slider.innerSlider.list.focus();
              this.handleAfterChangeEvent(current_movie_slide); 
            },
            "responsive": [
                {
                  "breakpoint": 1024,
                  "settings": {
                    slidesToShow: this.props.movies.length >= 3 ? 3 : this.props.movies.length,
                    slidesToScroll: 1
                  }
                },
                {
                  "breakpoint": 600,
                  "settings": {
                    slidesToShow: this.props.movies.length >= 2 ? 2 : this.props.movies.length,
                    slidesToScroll: 1
                  }
                },
                {
                  "breakpoint": 480,
                  "settings": {
                    slidesToShow: this.props.movies.length >= 2 ? 2 : this.props.movies.length,
                    slidesToScroll: 1
                  }
                },
              ]
        };

        return (
          <div>
            <Toggle
                  onClick={this.onToggle}
                  on={<h4>{category}▼</h4>}
                  off={<h4>{category}▲</h4>}
                  size="xs"
                  offstyle="info"
                  active={this.state.toggleActive}
            />
            <hr></hr>
            <div className="movie-list-container" style={style} 
              onKeyDown={(e) => {this.keyNavigation(e)}}
              onClick={(e) => {this.handleClick(e)}} 
              onWheel = {(e) => this.handleWheel(e)}
            >
                <Slider {...settings} ref={slider => this.slider = slider} >
                  {this.props.movies
                      .map((movie) => (
                          <div key={`${this.props.category}-${movie.id}`} className="movie-item-block" >
                              <MovieItem category={category} movie={movie} history={this.props.history} />
                          </div>
                      ))
                  }
                </Slider>
            </div>
          </div>
        )
    }
}

Movies.propTypes = {
  setCurrentMovieSlide: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  current_movie_slide: state.movies.currentMovieSlide
});


export default connect(mapStateToProps, { setCurrentMovieSlide })(Movies);
