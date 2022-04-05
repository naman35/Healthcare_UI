import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
const Bar =()=>{
    const data = [
        { argument: 'Week-1', value: 30 },
        { argument: 'Week-2', value: 20 },
        { argument: 'Week-3', value: 10 },
        { argument: 'Week-4', value: 50 },
        { argument: 'Week-5', value: 40 },
        { argument: 'Week-6', value: 30 },


      ];
    const paperStyle={padding :20,height:'28vh',width:350, margin:"20px auto"}

    return (
          <Paper >

          <Chart
                  data={data}
          >
            <ArgumentAxis />
            <ValueAxis />
        
            <BarSeries valueField="value" argumentField="argument" color="#1bbd7e"/>
          </Chart>
        </Paper>
      );
}
 export default Bar;