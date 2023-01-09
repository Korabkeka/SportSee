
import { LineChart, Line, XAxis, Tooltip, YAxis} from 'recharts';
import "./LineChartCustom.css";

function LineChartCustom(props){

    const {data} = props;

    return(
        <div className='line_custom'>
        <p className='line_custom_title'>Durée moyenne des sessions</p>
        <LineChart
          width={258}
          height={263}
          data={data}
          style={{background:"red"}}
        >
          <XAxis dataKey="day" axisLine={false} tick={{stroke: "#fff", textAnchor:"middle"}} tickLine={false} tickMargin={-5} padding={{left:10, right:10}} />
          <YAxis dataKey="sessionLength" domain={["dataMin - 10", "dataMax + 20"]} hide={true}/>
          <Tooltip />
          <Line type="natural" dataKey="sessionLength" stroke="#fff" activeDot={false} dot={false}/>
        </LineChart>
        </div>
    )
}

export default LineChartCustom;