import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import loginModalAction from '../actions/LoginModalAction.js';
import Login from "./Login.js"

class TrailerModal extends Component{
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.props.trailerModalAction({
            showModal: false
        })
    }

    render() {
        return (
            <Modal show={this.props.loginModal.showModal} onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Login to start SLAYING CODE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        trailerModalAction: TrailerModalAction
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailerModal);
