import { RadialBarChart, RadialBar } from 'recharts';
import "./RadialBarCustom.css";

function CustomLabel(props){
  const {x, y, fill, value} = props;
  const visibility = props.visibility? props.visibility : "visible";
  return (
    <>
      <text x={x} y={y} dx="-25px" dy="-10px" fontSize="1.5em" fontWeight="bold" visibility={visibility} >
        {`${value} %`}
      </text>
      <text x={x} y={y} dx="-30px" dy="10px" fontSize="1em" fill={fill} visibility={visibility}>
        de votre
      </text>
      <text x={x} y={y} dx="-30px" dy="30px" fontSize="1em" fill={fill} visibility={visibility}>
        objectif
      </text>
      
    </>
  )
}

function RadialBarCustom(props){
  const data = [{ uv: props.data.score, visibility:"visible"}, {uv: 100, visibility: "hidden"}];
  
    return (
        <div className='radial_custom'>
        <p className='radial_custom_title'>Score</p>
        <RadialBarChart width={160} height={160} cx="50%" cy="50%" innerRadius="100%" outerRadius="100%" barSize={10} data={data} title='score' style={{background: "white", borderRadius: "50%"}}>
          <RadialBar
            label={<CustomLabel x="50%" y="50%" fill="grey" value={data.uv} />}
            background={{fill: "#fbfbfb"}}
            clockWise
            dataKey="uv"
            fill='red'
            cornerRadius={5}
          />
        </RadialBarChart>
        </div>
    )
}

export default RadialBarCustom;