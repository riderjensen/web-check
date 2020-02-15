import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCard from '../../components/add/Add';
import Card from '../../components/cards/Card';

import './HomeContainer.css';

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                {this.props.trackers.map(track => {
                    return <Card {...track} />
                })}
                <AddCard />
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