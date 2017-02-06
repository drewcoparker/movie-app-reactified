import React, { Component } from 'react';
import { Button, Pagination } from 'react-bootstrap';

class Paginator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Pagination
                bsSize="large"
                items={10}
                 />
        )
    }
}

export default Paginator


// activePage={this.state.activePage}
// onSelect={this.handleSelect}
