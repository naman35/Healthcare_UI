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
        { argument: 'Mon', value: 30 },
        { argument: 'Tue', value: 20 },
        { argument: 'Wed', value: 10 },
        { argument: 'Thur', value: 50 },
        { argument: 'Fri', value: 60 },
        { argument: 'Sat', value: 60 },
        { argument: 'Sun', value: 50 },

      ];
      return (
          <Paper>
          <Chart
            data={data}
          >
            <ArgumentAxis />
            <ValueAxis />
        
            <BarSeries valueField="value" argumentField="argument" />
          </Chart>
        </Paper>
      );
}
 export default Bar;