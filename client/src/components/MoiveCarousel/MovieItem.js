import React, { Component } from 'react';
import PlayButton from './PlayButton';
import DetailButton from './DetailButton';
import ResponsiveImage from '../common/ResponsiveImage';

export class MovieItem extends Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
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

export default MovieItem
