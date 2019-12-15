import React, { Component } from 'react';
import './ResponsiveImage.css';

export class ResponsiveImage extends Component {
    render() {

        const width = this.props.width;
        const height = this.props.height;
        const src = this.props.src;

        return (
            <div style={ { width, } } className="responsive-image">
                <div style={ {paddingBottom: ( height / width * 100 ) + '%'} } />
                <img src={ src } className="responsive-image__image" style={this.props.customStyle}/>
            </div>
        )
    }
}

export default ResponsiveImage
