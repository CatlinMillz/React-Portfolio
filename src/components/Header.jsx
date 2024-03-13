import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                        <Link to="/projects" className='nav-link'>Projects</Link>
                        <Link to="/contact" className='nav-link'>Contact</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
