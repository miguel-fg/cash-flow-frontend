import { React } from "react";

// bootstrap components
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// logout custom hook
import { useLogout } from "../hooks/useLogout";

// user context
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    // Web application navbar
    return (
        <>
            <Navbar expand="lg" variant="light">
                <Container fluid className="nav-container rounded">
                    <LinkContainer to={user ? "/dashboard" : "/"} className="nav-title-link">
                        <Navbar.Brand>
                            <span className="navbar-text cash-flow">
                                Cash Flow
                            </span>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end flex-grow-1 pe-2">
                            {!user && (
                                <>
                                    <LinkContainer
                                        to="/login"
                                        className="nav-link"
                                    >
                                        <Nav.Link>
                                            <span className="navbar-text">
                                                Login
                                            </span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer
                                        to="/signup"
                                        className="nav-link"
                                    >
                                        <Nav.Link>
                                            <span className="navbar-text">
                                                Sign up
                                            </span>
                                        </Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                            {user && (
                                <div>
                                    <span className="navbar-text">{user.email}</span>
                                    <Button
                                        className="btn logout"
                                        onClick={handleClick}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
