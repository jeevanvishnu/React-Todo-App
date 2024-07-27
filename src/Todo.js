import React from "react";
import "./index.css";
import { TiEdit } from "react-icons/ti";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { RiCloseCircleLine } from "react-icons/ri";
function Todo({ addNewTask, newTodo, setNewTodo, todos,  checkToggle , deleteToggle, editTodos }) {
  return (
    <div className="mt-10 w-[420px]  bg-[#352f44] min-h-[600px] ml-3 rounded">
      <h1 className="text-2xl text-white px-2 py-3 text-center mt-3">
        What is your plan for Today?
      </h1>
      <div>
        <input
          className=" mt-3 w-[320px] flex-wrap px-2 py-2 mr-0 ml-2 outline-none bg-[#352f44] border-[2px] border-[#5d0cff] caret-white text-white "
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button
          className=" cursor-pointer px-2 py-2 mr-2 ml-0 outline-none bg-[#5d0cff] border-[2px] border-[#5d0cff] caret-white text-white bg-gradient-to-r from-[rgba(93, 12, 255, 1) 0%] rgba(93, 12, 255, 1) 0%] "
          onClick={addNewTask}
        >
          Add Task
        </button>
      </div>
      {todos.map(({id, text , checked, deleted} ) => {
        if(checked) return null
        if (deleted) return null;
        return (
          <div className={`todo-row flex  items-center text-white mx-5 my-3  px-2 py-4 rounded-md`}>
            <div className=" flex-shink-0" onClick={()=>checkToggle(id)}>
            {checked ? <ImCheckboxChecked/> : <ImCheckboxUnchecked />}
            </div>
            <div className="flex-grow text-center">{text}</div>

             {/* ? Delete funcyion call */}

            <div className="text-[24px]">
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
  );
}

export default Todo;





