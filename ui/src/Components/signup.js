import {React,useState,useEffect,useRef} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {EmojiPeople} from "@material-ui/icons";
import {Navbar,Container,Nav} from "react-bootstrap";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from './axios';
import {Axios} from "axios";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://localhost:8083/signup';
const Signup=()=>{
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const obj = {username: user, password: pwd,email: email, role: "ROLE_PATIENT"}
            axios.post('http://localhost:8084/signup', {
                username: user,
                email:email,
                password: pwd,
                role: "ROLE_PATIENT"
            })
                .then(function (response) {
                    console.log(response.data);

                    axios.post("http://localhost:8084/addPatientDetails",{
                        username:user,
                        firstname:user,
                        lastname:user,
                        skippable:""
                    })
                        .then(function(response){
                            console.log(response.data);
                            window.location.href="/login";
                    })
                    // let res =  response.data;
                    // if(res.role === "ROLE_PATIENT")
                    // {
                    //     window.location.href = '/dashboard?id=' + res.id ;
                    // }
                    // else {
                    //     window.location.href = '/doctorDashboard?id=' + res.id;
                    // }
                })
                .catch(function (error) {
                    console.log(error);
                });
            // console.log(response?.data);
            // console.log(response?.accessToken);
            // console.log(JSON.stringify(response))
            // setSuccess(true);
            // //clear state and controlled inputs
            // //need value attrib on inputs for this
            // setUser('');
            // setEmail('');
            // setPwd('');
            // setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    const paperStyle={padding :20,height:'88vh',width:280, margin:"20px auto",opacity:0.8}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(<div style={{backgroundImage:"url('https://images.unsplash.com/photo-1613492636024-9430710a84d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b24lMjB0b3AlMjBvZiUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80')" ,backgroundSize: 'cover',
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
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><EmojiPeople/></Avatar>
                    <h2><i>May I know you Please:</i></h2>

                </Grid>
                <TextField
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    label='Your Beautiful Name' placeholder='Enter username' fullWidth required/>
                <TextField
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    label='Email' placeholder='Enter Email' fullWidth required/>
                <TextField
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    label='ConfirmPassword' placeholder='Confirm password' type='password' fullWidth required/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Link to="/preRegister" >   <Button  type='submit' onClick={handleSubmit} variant="contained" style={avatarStyle} fullWidth>Next Step:-></Button></Link>

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
        </Grid></div>
    )
}

export default Signup