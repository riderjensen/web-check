import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Card from '../../components/cards/Card';
import Modal from '../../components/modal/Modal';

import './HomeContainer.css';

class Home extends Component {


    state = {
        showModal: false
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

export default connect(mapStateToProps, null)(Home);