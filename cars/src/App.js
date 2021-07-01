
import './styles/App.css';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';
function App() {
  const [data, setData] = useState(null)
  return (
    <div data-testid = 'app'  className="App">
      <Header  setData = {setData}/>
      {
        data && <List data = {data}/>
      }
     
    </div>
  );
}

export default App;
