import {React,useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Navbar,Container,Nav} from "react-bootstrap";
import Dashboard from "./dashboard";
import axios from "axios";
const Login=()=>{
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }


    const sub = async(e) => {
        e.preventDefault();
        let hardcodedCred = {
            username: 'Sanphire',
            password: 'Sanphire@015'
        }
        let hardcodedCred1 = {
            username: 'Suchi',
            password: 'Suchi@015'
        }

        if ((username == hardcodedCred.username) && (password == hardcodedCred.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;

            window.location.href="/dashboard";
        }

        else if ((username == hardcodedCred1.username) && (password == hardcodedCred1.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;

            window.location.href="/doctordashboard";
        }
        else {
            //bad combination
            alert('Wrong Username or Password Combination');
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8084/login', {
            username: username,
            password: password,
            role: "ROLE_PATIENT"
        })
            .then(function (response) {
                console.log(response);
                if(response.status == 200)
                {
                    let res=response.data.id
                    let role=response.data.role;
                    console.log("res="+res);
                    axios.post('http://localhost:8084/addLoginTimestamp', {
                        userId:res
                    })
                        .then(function (response) {
                            localStorage.setItem("id",response.data.userId);
                            console.log(response.data);
                            if(role === "ROLE_PATIENT")
                            {
                                window.location.href = '/dashboard?id='+res ;
                            }
                            else {
                                window.location.href = '/doctorDashboard?id='+res;
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
                else
                {
                    alert("Invalid Credentials");
                    return;
                }
            })
            .catch(function (error) {
                alert("Invalid Credentials");
                return;
            });

     };

    const paperStyle={padding :20,height:'88vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(<>
        <div style={{backgroundImage:"url('https://wallpaperaccess.com/full/3910193.jpg')" ,backgroundSize: 'cover',
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
        <Grid style={{opacity:0.8}}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2><i>Hii Buddy:</i></h2>
                    <h2><i>Welcome Back</i></h2>
                </Grid>
                <TextField  value={username} onChange={(e) => setusername(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <br></br><TextField value={password}  onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <br></br><FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="green"
                        />
                    }
                    label="Remember me"
                /><br></br><br></br>
                <Button type='submit' onClick={handleSubmit} variant="contained" style={avatarStyle} fullWidth><b>Login</b></Button>
                <Link to="/forgotPassword" > <Button type='submit'  variant="contained" style={btnstyle} size="small">Forget Password</Button><br></br></Link>
                <Link to="/signup" >  <Button type='submit'  variant="contained" style={btnstyle} size="small">SignUp</Button></Link>
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
        </div></>
    )
}

export default Login