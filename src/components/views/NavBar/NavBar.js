import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavBar.module.scss";
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <Link to="/" className={styles.links}>
          <Navbar.Brand>Waiter.app</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-0">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
