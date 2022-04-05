import React from "react";
import Bar from "./bar";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
const Session =()=>{

const paperStyle={padding :20,height:'110vh',width:400, margin:"20px auto"}
     return(
       <> 
               <Paper  elevation={2} style={paperStyle}>
            <Grid >
                <h4><i>Welcome To Exercise Section</i></h4>
      <div><Bar /></div>
      <br/>
      <br/>
      <div style={{backgroundColor:'#d9dfe1'}}><p>Welcome to the Exercise Part.Here,We will going to have lots of fun and will trying to know each other.Just Click on Quiz Button </p></div>
                <a href="/quiz" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"30vw"}} data-toggle="modal" data-target="#showmoreModal">Switch
                    to Quiz</a>
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