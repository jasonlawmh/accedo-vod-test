import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

export class DetailButton extends Component {

    state = {
        modal : false
    }

    /**
     * Toggle to show the modal box
     */
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    };

    render() {
        const { title , description} = this.props.movie;

        return (
            <React.Fragment>
                <button className="detail-button" onClick={() => {this.toggle()}}>
                    <span>
                        <FontAwesomeIcon icon={faInfo} />
                    </span>
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <h5>Description:</h5>
                        <p>{description}</p>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default DetailButton
