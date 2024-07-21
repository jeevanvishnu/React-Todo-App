import React from 'react'
import './App.css'
import Todo from './Todo'
import Removed from './Removed'
import Checked from './Checked'


function App() {
  return (
    <div >
      <h1 className='text-[50px] text-white text-center mt-10 '>Jeevan Todo App</h1>
      <div className='max-[936px]:flex-col max-[936px]:justify-center max-[936px]:items-center flex-wrap  flex justify-evenly'>
      <Todo/>
     <Removed/>
     <Checked/>
      </div>
      
    </div>
  )
}

export default App
