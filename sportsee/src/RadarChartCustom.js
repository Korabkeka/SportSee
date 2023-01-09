import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import "./RadarChartCustom.css";
function RadarChartCustom({data}){
    
    return(
        <div className='radar_custom'>
        <RadarChart outerRadius="60%" width={258} height={263} data={data.data}>
            <PolarGrid stroke='#fff' />
            <PolarAngleAxis dataKey="kind" axisLine={false} tick={{fill: "#fff", fontSize:"12px"}} />
            <PolarRadiusAxis axisLine={false} tick={{fill: "transparent"}} />
            <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
        </div>
    )
}

export default RadarChartCustom;