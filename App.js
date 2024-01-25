import React, { useState } from 'react'
import Todolist from './todolist';

const App = () => {
  const[task,settask]=useState('')
  const[arrtask,setarrtask]=useState([]);

  const inputevent=(e)=>{
    settask(e.target.value)
  }

  const setarr=()=>{
    setarrtask((prev)=>{
      return [ 
        ...prev ,task
      ]
    })
    settask('')
  }

  const deleteitems=(id)=>{
    setarrtask((prev)=>{
      return prev.filter((item,ind)=>{
             return ind !==id;
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>To Do List :</h1>
          <input type='text' name='task' value={task} placeholder='enter ur task for today' onChange={inputevent} />
          <button onClick={setarr}>+</button>

          <ol>
          {arrtask.map((t,index)=>{
           return <Todolist key={index} id={index} text={t} 
            onSelect={deleteitems}
           />
          }) }
            
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;