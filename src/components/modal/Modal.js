import React, {Component} from 'react';

import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }

    state = {

    }

    handleChange(event) {
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }

    preventClose = event => {
        event.stopPropagation();
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
                    <div>
                        
                    </div>
                    <div className="input-group">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;