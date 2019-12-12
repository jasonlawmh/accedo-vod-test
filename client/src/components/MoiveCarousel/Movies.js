import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toggle from 'react-bootstrap-toggle';
import MovieItem from './MovieItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Movies extends Component {

    state = {
      toggleActive: true,
      display : "block"
    };

    componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);
    }
    
    componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
    }
    
    handleWheel = (e) => {
        e.preventDefault();
        //e.deltaX > 0 ? this.slider.slickGoTo(5) : this.slider.slickGoTo(0);
    }

    onToggle = () => {
      this.setState({ toggleActive: !this.state.toggleActive });
      if(! this.state.toggleActive){
        this.setState({ display: "block" });
      }else{
        this.setState({ display: "none" });
      }
    }

    render() {

        const category = this.props.category;
        
        const style = {
          display : this.state.display
        }

        console.log("this.props.movies", this.props.movies.length)

        const settings = {
            infinite: this.props.movies.length >= 4,
            arrows: true,
            focusOnSelect: false,
            swipeToSlide: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            lazyLoad: true,
            beforeChange: function(currentSlide) {
              //console.log("before change", currentSlide, typeof(currentSlide));
                
            },
            afterChange: function(currentSlide) {
              //console.log("afterChange", currentSlide, typeof(currentSlide));
            },
            "responsive": [
                {
                  "breakpoint": 1024,
                  "settings": {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  "breakpoint": 600,
                  "settings": {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  "breakpoint": 480,
                  "settings": {
                    slidesToShow: 2,
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
            <div className="mb-12 movie-list-container" style={style} >
                <Slider {...settings} ref={slider => this.slider = slider} >
                  {this.props.movies
                      .map((movie) => (
                          <div className="movie-item-block">
                              <MovieItem key={`${this.props.category}-${movie.id}`} movie={movie} history={this.props.history} />
                          </div>
                      ))
                  }
                </Slider>
            </div>
          </div>
        )
    }
}

export default Movies
