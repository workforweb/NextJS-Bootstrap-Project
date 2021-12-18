import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import variables from '../styles/scss/Home.module.scss';

export default function MyNavbar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className={variables.borderBottom}
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="#home" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="#portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
