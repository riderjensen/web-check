import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modal/Modal';

import * as actions from '../../store/actions/index';

import './Card.css'

class Card extends Component {

    state = {
        delete: false,
        showModal: false
    }

    deleteTracker = _ => {
        this.props.deleteTracker(this.props.id)
    }

    toggleDelete = _ => {
        this.setState({delete: !this.state.delete})
    }

    showModal = _ => {
        this.setState({
            showModal: true
        })
    }

    closeModal = _ => {
        this.setState({
            showModal: false
        })
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
                        <h5 className="title">{this.props.title}</h5>
                        <p>Refresh time: {this.props.timeout}</p>
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        <div className="edit">
                            <FontAwesomeIcon icon={faPencilAlt} onClick={this.showModal} />
                        </div>
                        <div className="delete">
                            <FontAwesomeIcon icon={faTimes} onClick={this.toggleDelete} />
                        </div>
                    </article>
                }
                {this.state.showModal ? <Modal editState={this.props} closeModal={this.closeModal} /> : null}
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