import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AuthForm from "./AuthForm";

export default function AuthModal(props) {
    return (
        <Modal show={props.show} onHide={props.closeModal} centered>
            <Modal.Header closeButton>
                <Modal.Title><span className="modal-title">Welcome to Cash Flow</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModal} className="add-button">
                    Sign in
                </Button>
                <Button variant="danger" onClick={props.closeModal} className="add-button">
                    Sign up
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
