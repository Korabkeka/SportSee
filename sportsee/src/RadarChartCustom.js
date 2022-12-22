import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
function RadarChartCustom(props){
    const {data} = props;
    console.log(data)
    return(
        <ResponsiveContainer width="100%" height="300">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey={data.value} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartCustom;