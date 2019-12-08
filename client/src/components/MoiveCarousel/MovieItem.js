import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlayButton from './PlayButton';

export class MovieItem extends Component {

    render() {
        const history  = this.props.history;
        const { id, title, images } = this.props.movie;

        return (
            <div className="movie-item-block">
                <div className="movie-item-img">
                    <LazyLoadImage
                        alt={title}
                        effect="blur"
                        height="100%"
                        placeholderSrc={images[0].url}
                        src={images[0].url}
                        width="100%" />
                </div>
                <div className="movie-item-title">
                    <PlayButton id={id} history={history} />
                    {title}
                </div>
            </div>
        )
    }
}

export default MovieItem
