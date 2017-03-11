import React, { Component } from 'react';
import { Button, Pagination } from 'react-bootstrap';

class Paginator extends Component {
    constructor(props) {
        super(props);
        // this.handlePaginatorClick = this.handlePaginatorClick.bind(this);
    }

    // handlePaginatorClick(e) {
    //     console.log(e);
    // }

    render() {
        return(
            <Pagination prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        items={this.props.numberPages}
                        maxButtons={5}
                        activePage={this.props.activePage}
                        onSelect={this.props.onPaginatorClick}/>
        )
    }
}

export default Paginator


// activePage={this.state.activePage}
// onSelect={this.handleSelect}
