import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SetPageAction from '../actions/SetPageAction';

class Paginator extends Component {
    constructor(props) {
        super(props);
        this.handlePaginatorClick = this.handlePaginatorClick.bind(this);
    }

    handlePaginatorClick(e) {
        this.props.setPage(e);
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.props.url);
        return(
            <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={10}
                maxButtons={5}
                activePage={this.props.activePage}
                onSelect={this.handlePaginatorClick} />
        );
    }
}

function mapStateToProps(state) {
    return {
        activePage: state.apiResults.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setPage: SetPageAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
