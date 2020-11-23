import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavDropdown,
    Button,
    FormControl,
    Nav,
    NavItem,
    Form,
    Container,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavbarHome = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Thong Blog's
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/register">
                            Register
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHome;
