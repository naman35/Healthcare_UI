import React from 'react'
import {Avatar, Button, Grid, Paper, TextField} from "@material-ui/core";
import {Navbar,Container,Nav} from "react-bootstrap";
import {EmojiPeople} from "@material-ui/icons";
import {Link} from "react-router-dom";
function Checkstatus1() {
    let flag=0;
    if(flag==0){
        return( <Button href='/subsessionlist1'  style={{backgroundColor:'green',width:'408px' }} >Completed</Button>);
    }
    if(flag==1){
        return( <Button href='/subsessionlist1' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete</Button>);
    }
    if(flag==2){
        return( <Button href='/subsessionlist1' style={{backgroundColor:'red',width:'408px'  }} >Not Completed</Button>);
    }
    else{
        return( <Button href='/subsessionlist1' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
    }
}
function Checkstatus2() {
    let flag=0;
    if(flag==0){
        return( <Button href='/subsessionlist2'  style={{backgroundColor:'green',width:'408px' }} >Completed</Button>);
    }
    if(flag==1){
        return( <Button href='/subsessionlist2' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete</Button>);
    }
    if(flag==2){
        return( <Button href='/subsessionlist2' style={{backgroundColor:'red',width:'408px'  }} >Not Completed</Button>);
    }
    else{
        return( <Button href='/subsessionlist2' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
    }
}
function Checkstatus3() {
    let flag=0;
    if(flag==0){
        return( <Button href='/subsessionlist3'  style={{backgroundColor:'green',width:'408px' }} >Completed</Button>);
    }
    if(flag==1){
        return( <Button href='/subsessionlist3' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete</Button>);
    }
    if(flag==2){
        return( <Button href='/subsessionlist3' style={{backgroundColor:'red',width:'408px'  }} >Not Completed</Button>);
    }
    else{
        return( <Button href='/subsessionlist3' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
    }
}
function Checkstatus4() {
    let flag=0;
    if(flag==0){
        return( <Button href='/subsessionlist4'  style={{backgroundColor:'green',width:'408px' }} >Completed</Button>);
    }
    if(flag==1){
        return( <Button href='/subsessionlist4' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete</Button>);
    }
    if(flag==2){
        return( <Button href='/subsessionlist4' style={{backgroundColor:'red',width:'408px'  }} >Not Completed</Button>);
    }
    else{
        return( <Button href='/subsessionlist4' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
    }
}
function Checkstatus5() {
    let flag=0;
    if(flag==0){
        return( <Button href='/subsessionlist5'  style={{backgroundColor:'green',width:'408px' }} >Completed</Button>);
    }
    if(flag==1){
        return( <Button href='/subsessionlist5' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete</Button>);
    }
    if(flag==2){
        return( <Button href='/subsessionlist5' style={{backgroundColor:'red',width:'408px'  }} >Not Completed</Button>);
    }
    else{
        return( <Button href='/subsessionlist5' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
    }
}
function Checkstatusskippable() {
    let flagg=0;
    if(flagg==0){
        return( <Button href='' style={{backgroundColor:'grey' }} >Required</Button>);
    }
    if(flagg==1){
        return( <Button href='' style={{backgroundColor:'yellow' }} >Skippable</Button>);
    }

    else{
        return( <Button href='' style={{backgroundColor:'blue' }} >No Server Response</Button>);
    }}
function Sub1() {
    document.getElementById("subsection1").style.display="block";
    document.getElementById("subsection2").style.display="none";
    document.getElementById("subsection3").style.display="none";
    document.getElementById("subsection4").style.display="none";
    document.getElementById("subsection5").style.display="none";
}
function Sub2() {
    document.getElementById("subsection1").style.display="none";
    document.getElementById("subsection2").style.display="block";
    document.getElementById("subsection3").style.display="none";
    document.getElementById("subsection4").style.display="none";
    document.getElementById("subsection5").style.display="none";
}
function Sub3() {
    document.getElementById("subsection1").style.display="none";
    document.getElementById("subsection2").style.display="none";
    document.getElementById("subsection3").style.display="block";
    document.getElementById("subsection4").style.display="none";
    document.getElementById("subsection5").style.display="none";
}
function Sub4() {
    document.getElementById("subsection1").style.display="none";
    document.getElementById("subsection2").style.display="none";
    document.getElementById("subsection3").style.display="none";
    document.getElementById("subsection4").style.display="block";
    document.getElementById("subsection5").style.display="none";
}
function Sub5() {
    document.getElementById("subsection1").style.display="none";
    document.getElementById("subsection2").style.display="none";
    document.getElementById("subsection3").style.display="none";
    document.getElementById("subsection4").style.display="none";
    document.getElementById("subsection5").style.display="block";
}

function changePage(){
    window.location.href = "http://localhost:3000/response";
}

function Sessionintro() {
    const paperStyle={padding :20,height:'92vh',width:480, margin:"20px auto",opacity:0.8}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (<>
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1613492636024-9430710a84d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b24lMjB0b3AlMjBvZiUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80')" ,backgroundSize: 'cover',
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
            <Grid>
                <Paper elevation={10} style={paperStyle}>


                    <Grid align='center'>
                        <Avatar style={avatarStyle}><EmojiPeople/></Avatar>
                        <h2><i>Session Flow</i></h2>

                    </Grid>

<Paper style={{backgroundColor:'#d7e367'}}>Sometimes it's not enough to kow what things mean;sometimes you have to know what things dont't mean.-<i>Bob Dylan</i></Paper>
                    <br/><Paper><Button id="overviewBtn" type="button" onClick={Sub1}><b>Section-1:</b>Understanding The Problem</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn2" type="button" onClick={Sub2}><b>Section-2:</b>Enhance Your Capability</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn3" type="button" onClick={Sub3}><b>Section-3:</b>Dealing with Depression</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn4" type="button" onClick={Sub4}><b>Section-4:</b>Learn Self Help</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn5" type="button" onClick={Sub5}><b>Section-5:</b>Strengthen your Feelings</Button></Paper><br></br>
                    <Button onClick={changePage}>Click Me</Button>
                    <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection1">
                        <div id="2">

                            <p><strong>STATUS OF COMPLETION:</strong></p>

                                {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}
                            <Checkstatus1/>
                            <Checkstatusskippable />


                        </div></div>
                        <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection2">
                            <div id="2">

                                <p><strong>STATUS OF COMPLETION:</strong></p>
                                <Checkstatus2/>
                                <Checkstatusskippable />

                                {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}


                            </div></div>
                            <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection3">
                                <div id="2">

                                    <p><strong>STATUS OF COMPLETION:</strong></p>

                                    <Checkstatus3/>
                                    <Checkstatusskippable />



                                </div></div>
                                <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection4">
                                    <div id="2">

                                        <p><strong>STATUS OF COMPLETION:</strong></p>

                                        {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}
                                        <Checkstatus4/>
                                        <Checkstatusskippable />


                                    </div></div>
                                    <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection5">
                                        <div id="2">

                                            <p><strong>STATUS OF COMPLETION:</strong></p>

                                            {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}
                                            <Checkstatus5/>
                                            <Checkstatusskippable />

                                        </div></div>



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

export default Sessionintro