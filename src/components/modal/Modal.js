import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        parseVarsNum: []
    }

    handleChange(event) {
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }

    preventClose = event => {
        event.stopPropagation();
    }

    componentDidMount() {
        this.addTrackerCat()
    }

    addTrackerCat = () => {
        const myIntArray = this.state.parseVarsNum;
        const date = new Date();
        const rightNow = date.getTime();
        myIntArray.push({
            id: rightNow,
            filter: ''
        })
        this.setState({
            parseVarsNum: myIntArray
        })
    }

    render () {
        return (
            <div className="overlay" onClick={this.props.closeModal}>
                <div className="modal" onClick={this.preventClose}>
                    <p>Create a New Tracker</p>
                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder="Best Buy TV"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="url">Url</label>
                        <input type="text" name="url" placeholder="https://google.com"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="timeout">Check Timer</label>
                        <input type="number" name="timeout" placeholder="10"></input>
                    </div>
                    <hr />
                    <div className="filters">
                        <p>Filters to be placed based on the website response</p>
                        {this.state.parseVarsNum.map((item, i) => (
                        <div className="input-group" key={item.id}>
                            <select>
                                <option value="includes">Includes</option>
                                <option value="!includes">Doesnt Not Include</option>
                            </select>
                            <input type="number" name={i} placeholder="Key phrase"></input>
                        </div>
                        ))}
                    </div>
                    <FontAwesomeIcon style={{color: '#282c34'}} icon={faPlusCircle} onClick={this.addTrackerCat} />
                    <div className="input-group">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;