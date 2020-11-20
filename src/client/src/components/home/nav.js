import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavDropdown,
    Button,
    FormControl,
    Nav,
    Form,
} from 'react-bootstrap';
const NavbarHome = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">Thong Blog's</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarHome;
