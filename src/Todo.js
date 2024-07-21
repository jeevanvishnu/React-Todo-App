import React from 'react'
function Todo() {
  return (
    <div className='mt-10 w-[420px]  bg-[#352f44] min-h-[600px] ml-3 rounded'>
      <h1 className='text-2xl text-white px-2 py-3 text-center mt-3'>What is your plan for Today?</h1>
      <div>
        <input className=' mt-3 w-[320px] flex-wrap px-2 py-2 mr-0 ml-2 outline-none bg-[#352f44] border-[2px] border-[#5d0cff] caret-white text-white ' type="text" placeholder='Add Todo' />
        <button className=' cursor-pointer px-2 py-2 mr-2 ml-0 outline-none bg-[#5d0cff] border-[2px] border-[#5d0cff] caret-white text-white bg-gradient-to-r from-[rgba(93, 12, 255, 1) 0%] rgba(93, 12, 255, 1) 0%] '>Add Task</button>

      </div>
    </div>
    
  )
 
}

export default Todo
