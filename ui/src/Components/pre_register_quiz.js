// import React,{ useState } from 'react';
// import { Grid, Paper } from "@material-ui/core";
// import { RatingComponent } from 'react-rating-emoji'
// import Button from 'react-bootstrap/Button'
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import 'react-rating-emoji/dist/index.css'
// import {Container, Nav, Navbar} from "react-bootstrap";
//
// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;
//
// const Forms=()=> {
//     const [inputs, setInputs] = useState({});
//
//     const [textarea, setTextarea] = useState();
//
//     const [rating, setRating] = useState(0);
//
//     const options = ['Monday', 'Tuesday', 'Thursday',
//         'Friday', 'Saturday', 'Sunday']
//
//     const handleRating = (newRating) => {
//         setRating(newRating);
//     }
//
//
//     const handleChange1 = (event) => {
//         setTextarea(event.target.value)
//     }
//
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs);
//     }
//     const paperStyle = {
//         padding: 20,
//         height: "140vh",
//         width: 1400,
//         margin: "50px 50px",
//     };
//
//     return (<div style={{backgroundImage:"url('https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2V8ZW58MHx8MHx8&w=1000&q=80')" ,backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'}}>
//         <Navbar bg="light" variant="light" style={{opacity:0.8}} >
//             <Container >
//                 <Navbar.Brand href="landingpage">
//                     Push-D
//                 </Navbar.Brand>
//                 <Nav className="me-auto" >
//
//                     <Button href="login" variant="outline-success" style={{border:0}} >Login</Button>
//                     <Button href="signup" variant="outline-success" style={{border:0}}>Signup</Button>
//                     <Button href="About" variant="outline-success" style={{border:0}}>About</Button>
//                     <Button href="login" variant="outline-success" style={{border:0}}>ContactUs</Button>
//                     <div className="btn-group">
//                         <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                             Translate
//                         </button>
//                         <ul className="dropdown-menu">
//                             <li><a className="dropdown-item" href="#" >English</a></li>
//                             <li><a className="dropdown-item" href="#" >French</a></li>
//                             <li><a className="dropdown-item" href="#" >Hindi</a></li>
//                         </ul>
//                     </div>
//                 </Nav>
//             </Container>
//         </Navbar>
//         <div style={{opacity:0.8}}>
//             <Paper elevation={7} style={paperStyle}>
//                 <Grid>
//                     <h1><strong>Registration form</strong></h1>
//                     <form onSubmit={handleSubmit}>
//                         <label><h5> Enter your name</h5></label>
//                         <br/>
//                         <input
//                             type="text"
//                             name="username"
//                             value={inputs.username || ""}
//                             onChange={handleChange}
//                         />
//
//                         <br/>
//                         <br/>
//                         <label><h5>Enter your age:</h5></label>
//                         <br/>
//                         <input
//                             type="number"
//                             name="age"
//                             value={inputs.age || ""}
//                             onChange={handleChange}
//                         />
//
//                         <br/>
//                         <br/>
//                         <label><h5>How you are feeling today:</h5></label>
//                         <br/>
//                         <textarea value={textarea} onChange={handleChange1} />
//
//                         <br/>
//                         <div className="radio">
//                             <label><h5>How you are feeling today:</h5></label>
//                             <br/>
//                             <label>
//                                 <input type="radio" value="option1"  />
//                                 Option 1
//                             </label>
//                         </div>
//                         <div className="radio">
//
//                             <label>
//                                 <input type="radio" value="option2" />
//                                 Option 2
//                             </label>
//                         </div>
//                         <div className="radio">
//                             <label>
//                                 <input type="radio" value="option3" />
//                                 Option 3
//                             </label>
//                         </div>
//                         <br/>
//
//
//                         <strong><h4>Rate Your mood</h4></strong>
//                         <RatingComponent rating={rating} onClick={handleRating} style={{alignText:'center'}}/>
//                         <br/>
//
//
//                         <h5>How you are feeling today:</h5>
//
//                         <label>
//                             <input type="radio" value="option1" />
//                             Option 1
//                         </label>
//                         <label>
//                             <input type="radio" value="option1" />
//                             Option 1
//                         </label>
//
//
//                         <br/>
//                         <br/>
//                         <label><h5>Select your choice</h5></label>
//                         <select defaultValue="Choose...">
//                             <option>Choose...</option>
//                             <option>choose1</option>
//                             <option>choose2</option>
//                             <option>choose3</option>
//                         </select>
//                         <br/>
//                         <br/>
//                         <h5>Choose your fav day</h5>
//                         <Autocomplete
//                             multiple
//                             id="checkboxes-tags-demo"
//                             options={options}
//                             renderOption={(option, { selected }) => (
//                                 <React.Fragment>
//                                     <Checkbox
//                                         icon={icon}
//                                         checkedIcon={checkedIcon}
//                                         style={{ marginRight: 8 }}
//                                         checked={selected}
//                                     />
//                                     {option}
//                                 </React.Fragment>
//                             )}
//                             style={{ width: 400 }}
//                             renderInput={(params) => (
//                                 <TextField {...params} variant="outlined"
//                                            label="Checkboxes"
//                                            placeholder="Favorites" />
//                             )}
//                         />
//                         <br/>
//                         <br/>
//                         <Button href='/login' variant="success">Success</Button>
//                         {/* <input type="submit" /> */}
//                     </form>
//                 </Grid>
//             </Paper>
//         </div>
//         </div>
//     )
// }
// export default Forms;

import React,{useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
// import 'react-rating-emoji/dist/index.css';
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core';
import { RatingComponent } from 'react-rating-emoji';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Navbar,Container,Nav} from "react-bootstrap";
import Dashboard from "./dashboard";
import axios from "axios";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const Forms=()=>{
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState();

    const [rating, setRating] = useState(0);

    const options = ['Monday', 'Tuesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday']

    const handleRating = (newRating) => {
        setRating(newRating);
    }


    const handleChange1 = (event) => {
        setTextarea(event.target.value)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }




    const paperStyle={padding :20,height:'140vh',width:400, margin:"20px auto"}
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
                            <Button href="landingpage" variant="outline-success" style={{border:0}}>Back</Button>
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
                <div style={{opacity:0.8}}>
                              <Paper elevation={7} style={paperStyle}>
                                  <Grid>
                                      <h1><strong>Registration form</strong></h1>
                                      <form onSubmit={handleSubmit}>
                                           <label><h5> Enter your name</h5></label>
                                          <br/>
                                            <input
                                                type="text"
                                                name="username"
                                                value={inputs.username || ""}
                                                onChange={handleChange}
                                            />

                                            <br/>
                                            <br/>
                                            <label><h5>Enter your age:</h5></label>
                                            <br/>
                                            <input
                                                type="number"
                                                name="age"
                                                value={inputs.age || ""}
                                                onChange={handleChange}
                                            />

                                            <br/>
                                            <br/>
                                            <label><h5>How you are feeling today:</h5></label>
                                            <br/>
                                            <textarea value={textarea} onChange={handleChange1} />

                                            <br/>
                                            <div className="radio">
                                                <label><h5>How you are feeling today:</h5></label>
                                                <br/>
                                                <label>
                                                    <input type="radio" value="option1"  />
                                                    Option 1
                                                </label>
                                            </div>
                                            <div className="radio">

                                                <label>
                                                    <input type="radio" value="option2" />
                                                    Option 2
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" value="option3" />
                                                    Option 3
                                                </label>
                                            </div>
                                            <br/>
                                            <h5>How you are feeling today:</h5>

                                            <label>
                                                <input type="radio" value="option1" />
                                                Option 1
                                            </label>
                                            <label>
                                                <input type="radio" value="option1" />
                                                Option 1
                                            </label>


                                            <br/>
                                            <br/>
                                            <label><h5>Select your choice</h5></label>
                                            <select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>choose1</option>
                                                <option>choose2</option>
                                                <option>choose3</option>
                                            </select>
                                            <br/>
                                            <br/>
                                            <h5>Choose your fav day</h5>
                                            <Autocomplete
                                                multiple
                                                id="checkboxes-tags-demo"
                                                options={options}
                                                renderOption={(option, { selected }) => (
                                                    <React.Fragment>
                                                        <Checkbox
                                                            icon={icon}
                                                            checkedIcon={checkedIcon}
                                                            style={{ marginRight: 8 }}
                                                            checked={selected}
                                                        />
                                                        {option}
                                                    </React.Fragment>
                                                )}
                                                style={{ width: 400 }}
                                                renderInput={(params) => (
                                                    <TextField {...params} variant="outlined"
                                                               label="Checkboxes"
                                                               placeholder="Favorites" />
                                                )}
                                            />
                                            <br/>
                                            <br/>
                                            <Button href='/login' variant="success">Success</Button>
                                            {/* <input type="submit" /> */}
                                        </form>
                                    </Grid>
                                </Paper>
                            </div>

            </div></>
    )
}

export default Forms