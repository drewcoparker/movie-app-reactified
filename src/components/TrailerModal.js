import React, {Component} from "react";
import { Modal, Button } from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrailerModalAction from '../actions/TrailerModalAction.js';

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
            <Modal show={this.props.shown.showModal} onHide={this.handleModalClose}>
                <iframe width="600" height="355" src={this.props.trailer}></iframe>
                <Modal.Footer>
                    <Button onClick={this.handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        trailerModalAction: TrailerModalAction
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(TrailerModal);
