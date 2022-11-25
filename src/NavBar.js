import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand >Numer Project</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                </Nav>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />  

                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end">

                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      ประเภท
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                      <NavDropdown
                        title="Root Of Equation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Graphical">Graphical Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Bisection">Bisection Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/FalsePosition">False Position Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/OnePoint">One Point Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Newton">Newton Raphson Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Secent">Secent Method</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Solution Of Linear Algebraic Equation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Cramer">Cramer's Rlue Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Gauss">Gauss Elimination Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Matrix">Matrix Inversion Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/LU">LU Decomposition Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Cholesky">Cholesky Decomposition Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Jacobi">Jacobi Iteration Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/GaussSeidel">Gauss Seidel Iteration Method</NavDropdown.Item> <NavDropdown.Divider />
                        <NavDropdown.Item href="/Conjugate">Conjugate Method</NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link href="/About">About</Nav.Link>

                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}
