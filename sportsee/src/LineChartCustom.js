import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';

function LineChartCustom(props){

    const {data} = props;
  
      let values = [];
      data.sessions.forEach(element => {
        values.push(element.sessionLength)
      });
      let total = values.reduce((prev, current)=>prev+current, 0);
      let _average = Math.round(total/7);

    return(
        <>
        <ResponsiveContainer width="100%" height={300} >
        <LineChart
          width={500}
          height={300}
          data={data.sessions}
          style={{background:"red"}}
        >
          <XAxis dataKey="day" />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" dot={false}/>
        </LineChart>
        </ResponsiveContainer>
        </>
    )
}

export default LineChartCustom;