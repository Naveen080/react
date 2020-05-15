import React, { Component } from 'react';
import './style.css';

class index extends Component {
    render() {
        return (
            <div className="homeContainer">
                <h1 className="titleStyle">Welcome to the SEC </h1>
                <h2><q className ="quoteColor">Developed in React</q></h2>
            </div>
        );
    }
}

export default index;