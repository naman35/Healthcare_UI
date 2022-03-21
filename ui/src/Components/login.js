import {React,useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2><i>Hii Buddy:-></i></h2>
                    <h2><i>Welcome Back</i></h2>
                </Grid>
                <TextField  value={username} onChange={(e) => setusername(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField value={password}  onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="green"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit'  variant="contained" style={avatarStyle} fullWidth><b>Login</b></Button>
                <Button type='submit'  variant="contained" style={btnstyle} size="small">Forget Password</Button><br></br>
                <Button type='submit'  variant="contained" style={btnstyle} size="small">SignUp</Button>
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
    )
}

export default Login