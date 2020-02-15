import React from 'react';

import './Card.css'

export default function Card (props) {
    return (
        <div className="card">
                <p className="title">{props.title}</p>
                <p>Refresh time: {props.timeout}</p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
    )
}
