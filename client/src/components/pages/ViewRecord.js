import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteHistory } from '../../actions/historyActions';

import PropTypes from 'prop-types';

export class ViewRecord extends Component {
    
    getStyle = () => {
        return {
          background: '#f4f4f4',
          borderBottom: '1px #ccc dotted',
        }
    }

    deleteViewHistory = (id) => {
        this.props.deleteHistory(id);
    }

    render() {
        const { _id, name } = this.props.view_record;
        const movieItem = this.props.movies.movies.find((movie) => movie.id === name);

        const { title } = movieItem;

        return (
            <div style={this.getStyle()}>
                <p>
                { title }
                <button onClick={() => this.deleteViewHistory(_id)} style={btnStyle}>x</button>
                </p>
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
