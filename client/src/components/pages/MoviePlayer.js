import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './MoviePlayer.css';

const MoviePlayer = ({movie, onEnded, onStart}) => {
        
        return (
            <div className="player-wrapper">
                {movie !== undefined && 
                    <ReactPlayer 
                        className='react-player'
                        url={movie.contents[0].url} 
                        playing 
                        width='100%'
                        height='100%'
                        controls={true}
                        onEnded={onEnded}
                        onStart={onStart}
                    />
                }
            </div>
        )
}

export default MoviePlayer
