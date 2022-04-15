import React from 'react'

import {Navbar,Container,Nav} from "react-bootstrap";
function Landingpage(){
    return (

        <>
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">
                <p>Push-D</p>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="signup">Signup</Nav.Link>
                <Nav.Link href="about">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar></>



)}
export default Landingpage