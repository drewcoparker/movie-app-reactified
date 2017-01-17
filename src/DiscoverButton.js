import React, { Component } from 'react';

// CSS

class DiscoverButton extends Component {

    handleButtonClickChild(apiLink) {
        this.props.functionFromParent(apiLink);
    }

    render() {
        var apiLink = this.props.buttonLink;
        var buttonText = this.props.buttonText;
        return(
            <button className='filter-btn' onClick={() => this.handleButtonClickChild(apiLink)}>
                <span>{buttonText}</span>
            </button>
        )
    }
}

export default DiscoverButton;
