import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomeContainer.css';


class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default connect()(Home);