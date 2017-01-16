import React, { Component } from 'react';

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class DiscoverButton extends Component {

    handleButtonClickChild(apiLink) {
        this.props.functionFromParent(apiLink);
    }

    render() {
        var apiLink = this.props.buttonLink;
        var buttonText = this.props.buttonText;
        return(
            <button className='btn btn-primary' onClick={() => this.handleButtonClickChild(apiLink)}>
                <span>{buttonText}</span>
            </button>
        )
    }
}

export default DiscoverButton;
