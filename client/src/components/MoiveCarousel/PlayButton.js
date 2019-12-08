import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import IconPlay from '../Icons/IconPlay';

export class PlayButton extends Component {
    playMoiveHandler = (history, id) => {
        history.push(`/WatchMovie?id=${id}`);
    }

    render() {
        const id = this.props.id;
        const history = this.props.history;
        
        return (
            <button className="play-button" onClick={() => {this.playMoiveHandler(history, id)}}>
                <span>
                    Play
                </span>
            </button>
        )
    }
}

export default PlayButton
