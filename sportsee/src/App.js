import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';
import BarChartCustom from './BarChartCustom';
import { data } from './dataMock';
import LineChartCustom from './LineChartCustom';
import RadarChart from './RadarChartCustom';


function App() {
  
  const {sessions} = data;
  const average = JSON.parse(`{"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":40},{"day":3,"sessionLength":50},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":50},{"day":7,"sessionLength":50}]}`)
  const performance = JSON.parse(`{"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":200,"kind":1},{"value":240,"kind":2},{"value":80,"kind":3},{"value":80,"kind":4},{"value":220,"kind":5},{"value":110,"kind":6}]}`)
  
  return (
    <div className='app'>
      <p>this is a test</p>
      <BarChartCustom data={sessions}/>
      <LineChartCustom data={average}/>
      <RadarChart data={performance} />
    </div>
    
  );
}

export default App;
