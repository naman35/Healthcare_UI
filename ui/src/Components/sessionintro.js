import React, {useState} from 'react'
import {Avatar, Button, Grid, Paper, TextField} from "@material-ui/core";
import {Navbar,Container,Nav} from "react-bootstrap";
import {EmojiPeople} from "@material-ui/icons";
import {Link} from "react-router-dom";
import axios from "./axios";


function changePage(){
    window.location.href = "/response?id="+localStorage.getItem("id");
}













function Sessionintro() {
    const [skippable1, setSkip1] = useState(0);
    const [skippable2, setSkip2] = useState(0);
    const [skippable3, setSkip3] = useState(0);
    const [skippable4, setSkip4] = useState(0);
    const [skippable5, setSkip5] = useState(0);

    axios.get("http://localhost:8084/getSkippable/"+localStorage.getItem("id"),{
    })
        .then(function(res){
            let val = res.data.toString();
            let a = val.split("");
            for(let i=0;i<a.length;i++)
            {
                if(a[i] == 0)
                {
                    setSkip1(1);
                }
                else if(a[i] == 1)
                {
                    setSkip2(1);
                }
                else if(a[i] == 2)
                {
                    setSkip3(1);
                }
                else if(a[i] == 3)
                {
                    setSkip4(1);
                }
                else if(a[i] == 4)
                {
                    setSkip5(1);
                }
            }
        }
        );

    const [count1, setcount1] = useState(true);
    const [count2, setcount2] = useState(false);
    const [count3, setcount3] = useState(false);
    const [count4, setcount4] = useState(false);
    const [count5, setcount5] = useState(false);

    const [qi5, setQi5] = useState("");
    const [qi1, setQi1] = useState("");
    const [qi2, setQi2] = useState("");
    const [qi3, setQi3] = useState("");
    const [qi4, setQi4] = useState("");
    function Checkstatus1() {

        axios.get(`http://localhost:8084/completed/${localStorage.getItem('id')}/1`)
            .then(response => {
                setQi1(response.data);
                console.log(qi1)
            });


        if(qi1>=6){
            setcount2(true)

            return( <Button href='/subsessionlist1'  style={{backgroundColor:'green',width:'408px' }} >Completed-Click Here for Enter</Button>);
        }
        if(qi1>0 && qi1<6){
            return( <Button href='/subsessionlist1' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete-Click Here for Enter</Button>);
        }
        if(qi1==0){
            return( <Button href='/subsessionlist1' style={{backgroundColor:'red',width:'408px'  }} >Not Completed-Click Here for Enter</Button>);
        }
        else{
            return( <Button href='/subsessionlist1' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
        }
    }
    function Checkstatus2() {

        axios.get(`http://localhost:8084/completed/${localStorage.getItem('id')}/2`)
            .then(response => {
                setQi2(response.data);
            });


        if(qi2>=6){
            setcount3(true)
            return( <Button href='/subsessionlist2'  style={{backgroundColor:'green',width:'408px' }} >Completed-Click Here for Enter</Button>);
        }
        if(qi2>0 && qi2<6){
            return( <Button href='/subsessionlist2' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete-Click Here for Enter</Button>);
        }
        if(qi2==0){
            return( <Button href='/subsessionlist2' style={{backgroundColor:'red',width:'408px'  }} >Not Completed-Click Here for Enter</Button>);
        }
        else{
            return( <Button href='/subsessionlist2' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
        }
    }
    function Checkstatus3() {

        axios.get('http://localhost:8084/completed/24/3')
            .then(response => {
                setQi3(response.data);
            });


        if(qi3>=6){
            setcount4(true);
            return( <Button href='/subsessionlist3'  style={{backgroundColor:'green',width:'408px' }} >Completed-Click Here for Enter</Button>);
        }
        if(qi3>0 && qi3<6){
            return( <Button href='/subsessionlist3' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete-Click Here for Enter</Button>);
        }
        if(qi3==0){
            return( <Button href='/subsessionlist3' style={{backgroundColor:'red',width:'408px'  }} >Not Completed-Click Here for Enter</Button>);
        }
        else{
            return( <Button href='/subsessionlist3' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
        }
    }
    function Checkstatus4() {

        axios.get('http://localhost:8084/completed/24/4')
            .then(response => {
                setQi4(response.data);
            });


        if(qi4>=6){
            setcount5(true);
            return( <Button href='/subsessionlist4'  style={{backgroundColor:'green',width:'408px' }} >Completed-Click Here for Enter</Button>);
        }
        if(qi4>0 && qi4<6){
            return( <Button href='/subsessionlist4' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete-Click Here for Enter</Button>);
        }
        if(qi4==0){
            return( <Button href='/subsessionlist4' style={{backgroundColor:'red',width:'408px'  }} >Not Completed-Click Here for Enter</Button>);
        }
        else{
            return( <Button href='/subsessionlist4' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
        }
    }
    function Checkstatus5() {

        axios.get('http://localhost:8084/completed/24/5')
            .then(response => {
                setQi5(response.data);
            });


        if(qi5>=6){
            return( <Button href='/subsessionlist5'  style={{backgroundColor:'green',width:'408px' }} >Completed-Click Here for Enter</Button>);
        }
        if(qi5>0 && qi5<6){
            return( <Button href='/subsessionlist5' style={{backgroundColor:'yellow',width:'408px'  }} >Partially Complete-Click Here for Enter</Button>);
        }
        if(qi5==0){
            return( <Button href='/subsessionlist5' style={{backgroundColor:'red',width:'408px'  }} >Not Completed-Click Here for Enter</Button>);
        }
        else{
            return( <Button href='/subsessionlist5' style={{backgroundColor:'blue',width:'408px'  }} >No Server Response</Button>);
        }
    }


    function Sub1() {
        document.getElementById("subsection1").style.display="block";
        document.getElementById("subsection2").style.display="none";
        document.getElementById("subsection3").style.display="none";
        document.getElementById("subsection4").style.display="none";
        document.getElementById("subsection5").style.display="none";
        return Checkstatusskippable1;
    }
    function Sub2() {
        document.getElementById("subsection1").style.display="none";
        document.getElementById("subsection2").style.display="block";
        document.getElementById("subsection3").style.display="none";
        document.getElementById("subsection4").style.display="none";
        document.getElementById("subsection5").style.display="none";
        return Checkstatusskippable2;
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

    function Checkstatusskippable1() {
        if(skippable1==0){
            return( <Button href='' style={{backgroundColor:'grey' }} >Required</Button>);
        }
        if(skippable1==1){
            return( <Button href='' style={{backgroundColor:'yellow' }} >Skippable</Button>);
        }

        else{
            return( <Button href='' style={{backgroundColor:'blue' }} >No Server Response</Button>);
        }
    }

    function Checkstatusskippable2() {
        if(skippable2==0){
            return( <Button href='' style={{backgroundColor:'grey' }} >Required</Button>);
        }
        if(skippable2==1){
            return( <Button href='' style={{backgroundColor:'yellow' }} >Skippable</Button>);
        }

        else{
            return( <Button href='' style={{backgroundColor:'blue' }} >No Server Response</Button>);
        }}


    function Checkstatusskippable3() {
        if(skippable3==0){
            return( <Button href='' style={{backgroundColor:'grey' }} >Required</Button>);
        }
        if(skippable3==1){
            return( <Button href='' style={{backgroundColor:'yellow' }} >Skippable</Button>);
        }

        else{
            return( <Button href='' style={{backgroundColor:'blue' }} >No Server Response</Button>);
        }}


    function Checkstatusskippable4() {
        if(skippable4==0){
            return( <Button href='' style={{backgroundColor:'grey' }} >Required</Button>);
        }
        if(skippable4==1){
            return( <Button href='' style={{backgroundColor:'yellow' }} >Skippable</Button>);
        }

        else{
            return( <Button href='' style={{backgroundColor:'blue' }} >No Server Response</Button>);
        }}

    function Checkstatusskippable5() {
        if(skippable5==0){
            return( <Button href='' style={{backgroundColor:'grey' }} >Required</Button>);
        }
        if(skippable5==1){
            return( <Button href='' style={{backgroundColor:'yellow' }} >Skippable</Button>);
        }
        else{
            return( <Button href='' style={{backgroundColor:'blue' }} >No Server Response</Button>);
        }
    }








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
                    <br/><Paper><Button id="overviewBtn" type="button" onClick={Sub1} disabled={!count1} ><b>Section-1:</b>Understanding The Problem</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn2" type="button" onClick={Sub2} disabled={!count2}><b>Section-2:</b>Enhance Your Capability</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn3" type="button" onClick={Sub3} disabled={!count3}><b>Section-3:</b>Dealing with Depression</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn4" type="button" onClick={Sub4} disabled={!count4}><b>Section-4:</b>Learn Self Help</Button></Paper><br></br>
                    <Paper><Button id="overviewBtn5" type="button" onClick={Sub5} disabled={!count5}><b>Section-5:</b>Strengthen your Feelings</Button></Paper><br></br>
                    <button className="btn btn-primary" onClick={changePage}>View Your Responses</button>
                    <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection1">
                        <div id="2">

                            <p><strong>STATUS OF COMPLETION:</strong></p>

                                {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}
                            <Checkstatus1/>
                            <Checkstatusskippable1 />


                        </div></div>
                        <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection2">
                            <div id="2">

                                <p><strong>STATUS OF COMPLETION:</strong></p>
                                <Checkstatus2/>
                                <Checkstatusskippable2 />

                                {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}


                            </div></div>
                            <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection3">
                                <div id="2">

                                    <p><strong>STATUS OF COMPLETION:</strong></p>

                                    <Checkstatus3/>
                                    <Checkstatusskippable3 />



                                </div></div>
                                <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection4">
                                    <div id="2">

                                        <p><strong>STATUS OF COMPLETION:</strong></p>

                                        {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}
                                        <Checkstatus4/>
                                        <Checkstatusskippable4 />


                                    </div></div>
                                    <div className="card-body"  style={{display:"none",textAlign:"left"}} id="subsection5">
                                        <div id="2">

                                            <p><strong>STATUS OF COMPLETION:</strong></p>

                                            {/*<Button style={{backgroundColor:'green'}}>Complete</Button><Button style={{backgroundColor:'yellow'}}>Partially Completion</Button><Button style={{backgroundColor:'red'}}>Not Completed</Button>*/}
                                            <Checkstatus5/>
                                            <Checkstatusskippable5 />

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

export default Sessionintro;