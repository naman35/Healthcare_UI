import React from 'react'

import {Navbar,Container,Nav,Button} from "react-bootstrap";
import Blog from "./Blog"
function Landingpage(){




    return (

        <> <div style={{backgroundImage:"url('https://wallpaperaccess.com/full/3910193.jpg')" ,backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
    <Navbar bg="light" variant="light" style={{opacity:0.8}} >
        <Container >
            <Navbar.Brand href="landingpage">
                Push-D
            </Navbar.Brand>
            <Nav className="me-auto" >

                <Button href="login" variant="outline-success" style={{border:0}} >Login</Button>
                <Button href="signup" variant="outline-success" style={{border:0}}>Signup</Button>
                <Button href="About" variant="outline-success" style={{border:0}}>About</Button>
                <Button href="login" variant="outline-success" style={{border:0}}>ContactUs</Button>
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Translate
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" >English</a></li>
                        <li><a className="dropdown-item" href="#" >French</a></li>
                        <li><a className="dropdown-item" href="#" >Hindi</a></li>
                    </ul>
                </div>
            </Nav>
        </Container>
    </Navbar>


<Blog/>
            </div>





        </>



)}
export default Landingpage