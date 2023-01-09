import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./BarChartCustom.css";

function BarChartCustom(props){
    
    return (
        <div className='bar_custom'>
        <p className='bar_custom_title'>Activité quotidienne</p>
        <BarChart
          width={835}
          height={250}
          data={props.data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" tickLine={false} />
          <YAxis orientation='right' minTickGap={50} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend verticalAlign='top' align='right' iconType={'circle'} iconSize={10} wrapperStyle={{top:0, display:"flex", justifyContent:"space-evenly"}} margin={{right:20}}/>
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </div>
    )
}

export default BarChartCustom;