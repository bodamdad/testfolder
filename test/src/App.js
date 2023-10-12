import {useState} from 'react';
import './App.css';

function App() {

  let [입력값, 입력값변경] = useState('');
  return (
    <div className="App">

    <input onChange={(e)=>{ 
      입력값변경(e.target.value) 
      console.log(입력값)
    }} />
    

    {}
    
    </div>
  );
}

export default App;
