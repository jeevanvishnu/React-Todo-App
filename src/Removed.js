import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
function Removed({todos,deleteToggle,editTodos}) {
  return (
    <div className='mt-10 w-[420px]  bg-[#352f44] min-h-[600px] ml-3 rounded '>
    <h1 className='text-2xl text-white px-2 py-3 text-center mt-3'>Removed Task</h1>
    
    {todos.map(({id, text , checked, deleted} ) => {
      if(!checked && !deleted ) return null
        if (!deleted) return null;
        return (
          <div className={`todo-row flex  items-center text-white mx-5 my-3  px-2 py-4 rounded-md`}>
            <div className="flex-grow text-center">{text}</div>

             {/* ? Delete funcyion call */}

            <div className='text-[24px]'>
               <RiCloseCircleLine onClick={()=>deleteToggle(id)}/>
            </div>
             {/* ? Delete fnction end */}

               {/* Edit todos starting*/}
            <TiEdit className="text-[24px]" onClick={()=>editTodos(id)}/>
             {/* edit todos end */}
          </div>
        );
      })}
  </div>
  )
}

export default Removed
