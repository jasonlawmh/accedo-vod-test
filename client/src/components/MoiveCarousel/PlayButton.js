import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

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
                    <FontAwesomeIcon icon={faPlay} />
                </span>
            </button>
        )
    }
}

export default PlayButton;
