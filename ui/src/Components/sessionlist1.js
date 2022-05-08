import React from 'react'
import {Avatar, Button, Grid, Paper, TextField} from "@material-ui/core";
import {Navbar,Container,Nav} from "react-bootstrap";
import {EmojiPeople} from "@material-ui/icons";
import {Link} from "react-router-dom";

function Sessionlist1() {
    const paperStyle={padding :20,height:'88vh',width:480, margin:"20px auto",opacity:0.8}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (<>
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1613492636024-9430710a84d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b24lMjB0b3AlMjBvZiUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80')" ,backgroundSize: 'cover',
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
            <Grid>
                <Paper elevation={10} style={paperStyle}>


                    <Grid align='center'>
                        <Avatar style={avatarStyle}><EmojiPeople/></Avatar>
                        <h3><i>Sub-Session Flow</i></h3>

                    </Grid>
                    <Paper><h2>Section-1:Understanding The Problem</h2></Paper>
                    <br></br>
                    <Paper style={{backgroundColor:'#d7e367'}}>Sometimes it's not enough to kow what things mean;sometimes you have to know what things dont't mean.-<i>Bob Dylan</i></Paper>
                    <br/><Paper><Button href="/quizmcq?id=1" id="overviewBtn" type="button" ><b>Sub-Section-1:</b>Knowledge Point</Button></Paper><br></br>
                    <Paper><Button href="/quizfillup?id=1" id="overviewBtn2" type="button" ><b>Sub-Section-2:</b>Tool Box</Button></Paper><br></br>
                    <Paper><Button href="/quizmcq?id=1" type="button" ><b>Sub-Section-3:</b>Never Have I Ever</Button></Paper><br></br>
                    <Paper><Button href="http://localhost:3002/" type="button" ><b>Sub-Section-4:</b>Chill Time(Optional)</Button></Paper><br></br>
                    {/*<Typography >*/}
                    {/*    <Link href="#" >*/}
                    {/*        Forgot password ?*/}
                    {/*    </Link>*/}
                    {/*</Typography>*/}
                    {/*<Typography > Do you have an account ?*/}
                    {/*    <Link href="#" >*/}
                    {/*        Sign Up*/}
                    {/*    </Link>*/}
                    {/*</Typography>*/}
                </Paper>
            </Grid>
        </div>
                            </>
    )
}

export default Sessionlist1