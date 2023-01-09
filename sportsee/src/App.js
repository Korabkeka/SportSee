
import './App.css';
import BarChartCustom from './BarChartCustom';
//import { data } from './dataMock';
import LineChartCustom from './LineChartCustom';
import RadarChart from './RadarChartCustom';
import RadialBarCustom from './RadialBarCustom';
import {manager} from './apimanager';
import { useEffect, useState } from 'react';


function App() {
  const [barChartData, setBarChartData] = useState({});
  useEffect(()=>{
    async function proceed(){
      let _barChartData = await manager.getBarChartData(12);
      setBarChartData(_barChartData);
    }
    proceed()
  },[]);
  manager.getUser(12);
  console.log("bar chart", barChartData)
  manager.getLineChartData(12);
  manager.getRadarChartData(12);
  //const {sessions} = barChartData;
  const average = JSON.parse(`{"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":40},{"day":3,"sessionLength":50},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":50},{"day":7,"sessionLength":50}]}`)
  const performance = JSON.parse(`{"data":[{"value":200,"kind":"cardio"},{"value":240,"kind":"energy"},{"value":80,"kind":"endurance"},{"value":80,"kind":"strength"},{"value":220,"kind":"speed"},{"value":110,"kind":"intensity"}]}`)
  
  return (
    <div className='app'>
      <p>this is a test</p>
      <BarChartCustom data={barChartData}/>
      <LineChartCustom data={average}/>
      <RadarChart data={performance} />
      <RadialBarCustom/>
    </div>
    
  );
}

export default App;
