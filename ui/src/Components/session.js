import React from "react";
import Bar from "./bar";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
const Session =()=>{

const paperStyle={padding :20,height:'134vh',width:400, margin:"20px auto"}
     return(
       <> 
               <Paper elevation={10} style={paperStyle}>
            <Grid style={{margin:"20px auto"}}>
      <div><Bar/></div>
      <br/>
      <br/>
      <div style={{backgroundColor:'#1bbd7e'}}><p>Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.</p></div>
      <br/>
      <br/>
      <div>
      
      </div>
      </Grid>
      </Paper>
      </>
     
     );
 };
 export default Session;