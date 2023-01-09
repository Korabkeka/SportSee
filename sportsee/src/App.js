
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
  const [lineChartData, setLineChartData] = useState({});
  const [radarChartData, setRadarChartData] = useState({});
  const [userData, setUserData] = useState({});
  useEffect(()=>{
    async function proceed(){
      let _barChartData = await manager.getBarChartData(12);
      let _lineChartData = await manager.getLineChartData(12);
      let _radarChartData = await manager.getRadarChartData(12);
      let _userData = await manager.getUser(12);
      setBarChartData(_barChartData);
      setLineChartData(_lineChartData);
      setRadarChartData(_radarChartData);
      setUserData(_userData);
    }
    proceed();
  },[]);
  
  return (
    <div className='app'>
      <BarChartCustom data={barChartData}/>
      <LineChartCustom data={lineChartData}/>
      <RadarChart data={radarChartData} />
      <RadialBarCustom data={userData}/>
    </div>
    
  );
}

export default App;
