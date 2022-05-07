import React from "react";
import Bar from "./bar";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import {Navbar,Container,Nav} from "react-bootstrap";
const Session =()=>{

const paperStyle={padding :20,height:'110vh',width:400, margin:"20px auto"}
     return(
       <>  <div style={{backgroundImage:"url('https://images4.alphacoders.com/114/1144182.jpg')" ,backgroundSize: 'cover',
           backgroundRepeat: 'repeat'}}>
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
               <Paper  elevation={2} style={paperStyle}>
            <Grid >
                <h4><i>Welcome To Exercise Section</i></h4>
      <div><Bar /></div>
      <br/>
      <div style={{backgroundColor:'#d9dfe1'}}><p>Welcome to the Exercise Part.Here,We will going to have lots of fun and will trying to know each other.Just Click on Quiz Button </p></div>
                <a href="/sessionintro" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"10vw"}} data-toggle="modal" data-target="#showmoreModal">Switch
                    to Section Page</a>

      <br/>
      <div>
      
      </div>
      </Grid>
               </Paper></div>
      </>
     
     );
 };
 export default Session;