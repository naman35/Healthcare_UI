import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import {EmojiPeople} from "@material-ui/icons";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><EmojiPeople/></Avatar>
                    <h2><i>May I know you Please:</i></h2>

                </Grid>
                <TextField label='Your Beautiful Name' placeholder='Enter username' fullWidth required/>
                <TextField label='Email' placeholder='Enter Email' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField label='ConfirmPassword' placeholder='Confirm password' type='password' fullWidth required/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Button type='submit'  variant="contained" style={avatarStyle} fullWidth>Next Step:-></Button>

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

export default Signup