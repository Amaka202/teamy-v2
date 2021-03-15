import React from 'react'
import {connect} from 'react-redux';
import {createEntry} from '../store/actions/entriesActions';

function enteries({entries}) {
    return (
        <div>
            <h1>hey</h1>
            <ul>
                {entries.map(val => <li>{val.entry}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        entries: state.entry.enteries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => dispatch(createEntry(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(enteries);
