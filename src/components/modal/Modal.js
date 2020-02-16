import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions/index';

import './Modal.css'

class Modal extends Component {
    state = {
        title: '',
        url: '',
        timeout: '',
        indicators: [],
        edit: false
    }

    componentDidMount() {
        if (this.props.editState) {
            this.setState(this.props.editState)
            this.setState({edit: true})
        } else {
            this.addTrackerCat()
        }
    }

    handleChange = event => {
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }

    handleSelectChange = (event, i) => {
        const stateArray = this.state.indicators;
        stateArray[i].filter = event.target.value
        this.setState({
            indicators: stateArray
        })
    }

    handleNestedChange = (event, i) => {
        const stateArray = this.state.indicators;
        stateArray[i].phrase = event.target.value
        this.setState({
            indicators: stateArray
        })
    }

    addTrackerCat = () => {
        const myIntArray = this.state.indicators;
        const date = new Date();
        const rightNow = date.getTime();
        myIntArray.push({
            id: rightNow,
            filter: 'includes',
            phrase: ''
        })
        this.setState({
            indicators: myIntArray
        })
    }

    submit = () => {
        this.props.addCard(this.state)
        this.props.closeModal()
    }

    edit = () => {
        this.props.editCard(this.state)
        this.props.closeModal()
    }

    render () {
        return (
            <div className="overlay" onClick={this.props.closeModal}>
                <div className="modal" onClick={event => event.stopPropagation()}>
                    <p>Create a New Tracker</p>
                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.title} placeholder="Best Buy TV" onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="url">Url</label>
                        <input type="text" name="url" value={this.state.url} placeholder="https://google.com" onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="timeout">Check Timer (seconds)</label>
                        <input type="number" name="timeout" value={this.state.timeout} placeholder="10" onChange={this.handleChange} />
                    </div>
                    <hr />
                    <div className="filters">
                        <p>Filters to be placed based on the website response</p>
                        {this.state.indicators.map((item, i) => (
                        <div className="input-group" key={item.id}>
                            <select onChange={event => this.handleSelectChange(event, i)} value={this.state.indicators[i].filter}>
                                <option value="includes">Includes</option>
                                <option value="!includes">Does Not Include</option>
                            </select>
                            <input type="text" placeholder="Key phrase" value={this.state.indicators[i].phrase} onChange={event => this.handleNestedChange(event, i)} />
                        </div>
                        ))}
                    </div>
                    <FontAwesomeIcon style={{color: '#282c34'}} icon={faPlusCircle} onClick={this.addTrackerCat} />
                    <div className="input-group">
                        {this.state.edit ? <button onClick={this.edit}>Submit</button> : <button onClick={this.submit}>Submit</button>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCard: content => dispatch(actions.addNewTracker(content)),
        editCard: content => dispatch(actions.editTracker(content))
    }
}

export default connect(null, mapDispatchToProps)(Modal);