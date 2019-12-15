import React, { Component } from 'react';
import PlayButton from './PlayButton';
import DetailButton from './DetailButton';
import ResponsiveImage from '../common/ResponsiveImage';
import { connect } from 'react-redux';

export class MovieItem extends Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
    }

    /**
     * Update the img style when being selected
     */
    selectedStyle = () => {
        const { id } = this.props.movie;
        const movie_category = this.props.category;
        const {category, movie_id} = this.props.current_movie_slide;

        if ( (id === movie_id) && (movie_category === category) ) {
            return {
                border : 'solid',
                color : 'red'
            }
        }else {
            return {
                border : 'dotted',
                color : 'black'
            }
        }
    }

    render() {
        const history  = this.props.history;
        const { id, title, images } = this.props.movie;

        return (
            <React.Fragment>
                <ResponsiveImage
                    src={images[0].url}
                    width={images[0].width}
                    height={images[0].height} 
                    customStyle={this.selectedStyle()}
                />
                <div className="movie-button-wrapper">
                    <PlayButton id={id} history={history} />
                    <DetailButton movie={this.props.movie} />
                </div>
                <div className="movie-item-title">
                    <p>{title}</p>
                </div>
            </React.Fragment>
        )
    }
}

  
const mapStateToProps = (state) => ({
    current_movie_slide: state.movies.currentMovieSlide
});
  
  export default connect(mapStateToProps, {  })(MovieItem);
