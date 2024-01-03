import { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" className="py-3 position-sticky top-0 z-3" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='fs-5'>Home</Nav.Link>
            <Nav.Link href="#about" className='fs-5'>About</Nav.Link>
            <Nav.Link href="#products" className='fs-5'>Products</Nav.Link>
            <Nav.Link href="#contact" className='fs-5'>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}
