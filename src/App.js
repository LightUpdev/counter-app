import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Button from './Button';
import { useState } from 'react';

function App() {
  const [count , setCount] = useState(0);
  const decreaseCount =()=>{
    if(count<=0){
      setCount(0)
    }else{
      setCount(count - 1)
    }
      
  }
  const resetCount =()=>{
      setCount(0)
  }
  const increaseCount =()=>{
      setCount(count + 1)
  }
  return (
    <div className='container'>
      <div className="app-container"> 
        <h1 className='text-center text-white'>
          Counter App
        </h1>
        <h3 className='text-white text-center fw-bold'>{count}</h3>
        <div className="button-container offset-sm-3 py-5">
          <Button className='btn btn-success ms-3' onClick={()=>decreaseCount()} content="decrease" />
          <Button className='btn btn-primary ms-3' onClick={()=>resetCount()} content="reset" />
          <Button className='btn btn-danger ms-3' onClick={()=>increaseCount()} content="increase" />
        </div>
      
      </div>  
    </div>
  );
}

export default App;
