import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';
import BarChartCustom from './BarChartCustom';
import { data } from './dataMock';
import LineChartCustom from './LineChartCustom';

function App() {
  
  const {sessions} = data;
  
  
  return (
    <div className='app'>
      <p>this is a test</p>
      <BarChartCustom data={sessions}/>
      <LineChartCustom/>
    </div>
    
  );
}

export default App;
