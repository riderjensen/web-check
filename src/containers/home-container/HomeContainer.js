import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Card from '../../components/cards/Card';
import Modal from '../../components/modal/Modal';

import * as actions from '../../store/actions/index';

import './HomeContainer.css';

class Home extends Component {


    state = {
        showModal: false
    }

    componentDidMount () {
        this.props.getAllTrackers()
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="home-container">
                <p style={{color: '#fff', maxWidth: '1200px', margin: '15px auto'}}>This application allows people to create alerts for themselves looking for keywords on webpages. Not all webpages work, some webpages that often encounter scrapers will refer a 503 error. A red border indicates that the key indicators were not met. A green border means key indicators were met. If we have a problem accessing a URL, an error will appear at the top of the card.</p>
                <div className="card-container">
                {this.props.trackers.map(track => {
                    return <Card {...track} key={track.id} />
                })}
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon style={{color: '#fff'}} icon={faPlusCircle} onClick={this.openModal} />
                </div>
                {this.state.showModal ? <Modal closeModal={this.closeModal} /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trackers: state.index.trackers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllTrackers: _ => dispatch(actions.getAllTrackers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);