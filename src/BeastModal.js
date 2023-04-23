import React from "react";
import { Button, Modal } from "react-bootstrap";

class BeastModal extends React.Component {
    render () {
        // console.log(this.props.hornedBeasts)
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={this.props.beast.image_url} alt={this.props.beast.name} /> {this.props.beast.description}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.props.hideBeastModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BeastModal;