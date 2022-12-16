import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';
import { data } from './dataMock';

function App() {
  
  const {sessions} = data;
  
  
  return (
    <div className='app'>
      <p>this is a test</p>
      <ResponsiveContainer width="100%" height={300}>
        
        <BarChart
          width={500}
          height={300}
          data={sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign='top-right' />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
  );
}

export default App;
