import React from "react";
import {  useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../JS/todo";


function Task ({todo}){
    
const dispatch = useDispatch();

const handleToggle = (id) => { 
    dispatch(toggleTask (id))
};
const handleDelete = (id)=> {
    dispatch(deleteTask(id))
};

const handleEdit = (id)=> {
dispatch( editTask (id))
};


return (
    <div> 
        {todo.text}
    <input 
    type = 'checkbox'
   onClick = {()=> handleToggle (todo.id) } defaultChecked = {todo.isDone}/>
   
    <button onClick = {()=> handleDelete (todo.id) } >Delete  </button>
    <button onClick = {()=> handleEdit (todo.id) } >Edit  </button>
        
       
</div>
)};

export default Task;
