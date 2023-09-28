import { React } from "react";

// bootstrap components
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// logout custom hook
import { useLogout } from "../hooks/useLogout";

export default function NavBar() {
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    }

    // Web application navbar
    return (
        <>
        <Navbar expand="lg" variant="light">
            <Container fluid className="nav-container rounded">
                <LinkContainer to="/" className="nav-title-link">
                    <Navbar.Brand><span className="navbar-text cash-flow">Cash Flow</span></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end flex-grow-1 pe-2">
                        <LinkContainer to="/login" className="nav-link">
                            <Nav.Link><span className="navbar-text">Login</span></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup" className="nav-link">
                            <Nav.Link><span className="navbar-text">Sign up</span></Nav.Link>
                        </LinkContainer>
                        <Button className="btn" onClick={handleClick}>Logout</Button>
                        <LinkContainer to="/dashboard" className="nav-link">
                            <Nav.Link><span className="navbar-text">Dashboard</span></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}
