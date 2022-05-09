import React, {useState} from 'react'
import { Line,Pie,Doughnut} from 'react-chartjs-2'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import {Navbar,Container,Nav} from "react-bootstrap"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const dataLine = {
    labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
    datasets: [
        {
            label: "Weekly Report",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#a9584d",
            borderColor: "rgb(178,103,80)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(201,76,59)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(126,22,22)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65,35,45,97,1,54],
        },
    ],
};

const Analytics = () => {
    const [compl,setCompl] = useState(1);
    const [ncompl,setNcompl] = useState(5);


    fetch("http://7d77-119-161-98-68.ngrok.io/analytics/23",{
        method:"get"
    })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            setCompl(responseData);
            setNcompl(5 - responseData);
        });

    console.log(compl);
    console.log(ncompl);

    const paperStyle={padding :20,height:'90vh',width:400, margin:"20px auto"}
    const data = {
        labels: ['Completed','Remaining'],
        datasets: [
            {
                label: 'Completed',
                fill: false,
                lineTension: 0.1,
                backgroundColor: ["lightgreen","#e07e71"],
                borderColor: "rgb(178,103,80)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgb(231,129,45)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(148,59,21)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data:[compl,ncompl]
            },
        ],
    };


    return (<div style={{backgroundImage:"url('https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2V8ZW58MHx8MHx8&w=1000&q=80')" ,backgroundSize: 'cover',
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
                    {/*<Button href="patientTracker" variant="outline-warning" style={{backgroundColor:"gainsboro",marginLeft:"10px"}}>Back</Button>*/}
                </Nav>
            </Container>

        </Navbar>
        <div style={{opacity:0.8}}>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <h2>Analytics</h2>

            <Line  data={dataLine}/>
                <Doughnut  data={data}/>

            </Grid>
        </Paper>

        </div></div>
    )
}

export default Analytics