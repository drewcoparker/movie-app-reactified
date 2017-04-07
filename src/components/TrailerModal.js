import React, {Component} from "react";
import { Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrailerModalAction from '../actions/TrailerModalAction.js';
import GetTrailerAction from '../actions/GetTrailerAction.js';

class TrailerModal extends Component{
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.props.trailerModalAction(false);
        this.props.setTrailer()
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.handleModalClose}>
                <iframe width="600" height="355" src={this.props.trailer} frameBorder="0"></iframe>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.showModal,
        trailer: state.trailer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        trailerModalAction: TrailerModalAction,
        setTrailer: GetTrailerAction,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailerModal);
