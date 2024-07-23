import React, { useState } from 'react'
import './App.css'
import Todo from './Todo'
import Removed from './Removed'
import Checked from './Checked'



function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [newTodo, setNewTodo] = useState('')
  // ? TODOS CODE STARTING

  const addNewTask = () =>{
    if(newTodo==="") return 
     let newTodos=[{id:Date.now(),text:newTodo,status:false},...todos]
     
     setTodos(newTodos)
    localStorage.setItem("todos",JSON.stringify(newTodos))
     console.log(newTodos)
     setNewTodo("")
  }

  // ?TODOS CODE ENDING

  
  return (
    <div >
      <h1 className='text-[50px] text-white text-center mt-10 '>Jeevan Todo App</h1>
      <div className='max-[936px]:flex-col max-[936px]:justify-center max-[936px]:items-center flex-wrap  flex justify-evenly'>
      <Todo addNewTask={addNewTask} setNewTodo={setNewTodo} todos={todos} newTodo={newTodo}/>
     <Removed/>
     <Checked/>
      </div>
      
    </div>
  )
}

export default App

