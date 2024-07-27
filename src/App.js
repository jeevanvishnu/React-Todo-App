import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import './App.css'
import Todo from './Todo'
import Removed from './Removed'
import Checked from './Checked'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
        return [];
      }
    }
    return [];
  });

  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTask = () => {
    if (newTodo === "") return
    let newTodos = [{ id: Date.now(), text: newTodo, checked: false, deleted: false }, ...todos]
    setTodos(newTodos)
    setNewTodo("")
  }

  const checkToggle = (id) => {
    let newTodos = todos.map(todo => {
      if (id === todo.id) {
          todo.checked = !todo.checked 
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteToggle = (id) => {
    let newTodos = todos.map(todo => {
      if (id === todo.id) {
        todo.deleted = !todo.deleted 
      }
      return todo
    })
    setTodos(newTodos)
  }
   
  const editTodos = async (id) =>{
    const {value:editTask} =await Swal.fire({
      title:'Rename Task',
      input:'text',
      inputValue:todos.find((todo)=>todo.id === id).text,
      inputPlaceholder:'Enter here'
    })

    if(editTask){
      let newTodos = todos.filter((todo)=>{
       if(todo.id === id){
        todo.text=editTask
        
       }
        return todo
       })
      setTodos(newTodos)
    }
  }

  return (
    <div>
      <h1 className='text-[50px] text-white text-center mt-10 '>Jeevan Todo App</h1>
      <div className='max-[936px]:flex-col max-[936px]:justify-center max-[936px]:items-center flex-wrap flex justify-evenly'>
        <Todo addNewTask={addNewTask} todos={todos} checkToggle={checkToggle} setNewTodo={setNewTodo} newTodo={newTodo} deleteToggle={deleteToggle} editTodos={editTodos}/>
        <Checked todos={todos} checkToggle={checkToggle} deleteToggle={deleteToggle} editTodos={editTodos} />
        <Removed todos={todos} deleteToggle={deleteToggle} editTodos={editTodos}/>
      </div>
    </div>
  )
}

export default App

