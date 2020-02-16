import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions/index';

import './Card.css'

class Card extends Component {

    state = {
        delete: false
    }

    deleteTracker = _ => {
        this.props.deleteTracker(this.props.id)
    }

    toggleDelete = _ => {
        this.setState({delete: !this.state.delete})
    }

    render () {
        return (
            <div className="card">
                {this.state.delete ? 
                    <article>
                        <p>Are you sure you want to delete this item?</p>
                        <button className="danger" onClick={this.deleteTracker}>Delete</button>
                        <button onClick={this.toggleDelete}>Cancel</button>
                    </article>
                : 
                    <article>
                        <p className="title">{this.props.title}</p>
                        <p>Refresh time: {this.props.timeout}</p>
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        <div className="edit">
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </div>
                        <div className="delete">
                            <FontAwesomeIcon icon={faTimes} onClick={this.toggleDelete} />
                        </div>
                    </article>
                }
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTracker: id => dispatch(actions.deleteTracker(id))
    }
}

export default connect(null, mapDispatchToProps)(Card);