import React, { Component } from 'react'
import ViewRecord from './ViewRecord';

export class ViewHistoryList extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.date}</h2>
                {
                    this.props.historyList.map((view_record) => (
                        <ViewRecord key={view_record._id} view_record={view_record} />
                    ))
                }
            </div>
        )
    }
}

export default ViewHistoryList
