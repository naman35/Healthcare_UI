import React from 'react'
import { Line,Pie,Doughnut} from 'react-chartjs-2'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
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
const paperStyle={padding :20,height:'95vh',width:400, margin:"20px auto"}
const data = {
    labels: ['Completed','Remaining'],
    datasets: [
        {
            label: "Session Completed",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#e07e71",
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
            data: [65,35],
        },
    ],
};
const Analytics = () => {
    return (
        <div>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <h2>Analytics</h2>

            <Line  data={dataLine}/>
                <Doughnut  data={data}/>

            </Grid>
        </Paper>

        </div>
    )
}

export default Analytics