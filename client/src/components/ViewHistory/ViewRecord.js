import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteHistory } from '../../actions/historyActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types';

export class ViewRecord extends Component {
    
    /**
     * Get the style of each record row
     */    
    getStyle = () => {
        return {
          background: '#f4f4f4',
          borderBottom: '1px #ccc dotted',
        }
    }

    /**
     * Send the delete history request to redux action
     * @param {string} id - history id in database
     */ 
    deleteViewHistory = (id) => {
        this.props.deleteHistory(id);
    }

    render() {
        const { _id, name } = this.props.view_record;
        const movieItem = this.props.movies.movies.find((movie) => movie.id === name);

        return (

            <div style={this.getStyle()}>
                {movieItem !== undefined && 
                <p>
                <Link to={`/WatchMovie?id=${ movieItem.id }`}>{ movieItem.title }</Link>
                <button onClick={() => this.deleteViewHistory(_id)} style={btnStyle}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </p>
                }
          </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

ViewRecord.propTypes = {
    deleteHistory: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired
}
  
const mapStateToProps = (state) => ({
    movies: state.movies
});

export default connect(mapStateToProps, { deleteHistory })(ViewRecord);
