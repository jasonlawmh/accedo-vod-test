import React, { Component } from 'react'
import './ViewHistory.css';
import { connect } from 'react-redux';
import { getHistory } from '../../actions/historyActions';
import { getMovies } from '../../actions/movieActions';
import ViewHistoryList  from './ViewHistoryList';

import PropTypes from 'prop-types';

class ViewHistory extends Component {

    componentDidMount() {
        this.props.getMovies();
        this.props.getHistory();
    }

    getDateDisplay = (dateObj) => {
        return `${dateObj.getFullYear().toString()}-${dateObj.getMonth().toString()}-${dateObj.getDate().toString()}`;
    }

    render() {
        const { history } = this.props.view_history;
        
        let historyList = {};
        
        history.forEach(historyItem => {
            const d = new Date(historyItem.date);
            const d_str = this.getDateDisplay(d);
            if( historyList[d_str] === undefined) { 
                historyList[d_str] = [historyItem];
            }else {
                historyList[d_str].push(historyItem);
            }
        });

        return (
            <div className="view-history-container">
                <h3>View History</h3>
                <hr></hr>
                {
                    Object.keys(historyList).map((date) => (
                        <ViewHistoryList key={date} date={date} historyList={historyList[date]}/>
                    ))
                }
            </div>
        )
    }
}

ViewHistory.propTypes = {
    getMovies: PropTypes.func.isRequired,
    getHistory: PropTypes.func.isRequired,
    view_history: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    view_history: state.history,
    movies: state.movies
});
  
export default connect(mapStateToProps, { getMovies, getHistory })(ViewHistory);

