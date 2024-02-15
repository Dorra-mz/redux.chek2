import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/todo";


const AddTodo = () => {
    const [description , setDescription]= useState ('');
    const dispatch = useDispatch ();

    const handleSubmit = () =>  {
        dispatch (addTask (description)) 
        
    }
        //e.prevenDefault ();
        //if (!description.trim ()) return 
        //dispatch(addTask({
            //id : uuidv4() , 
           //description , isDone : false 
        //))

        //setDescription('');
  


    return ( 
        <div> 
           <input type ="text"
                   placeholder="Enter task description"
                   //value = {description }
                    onChange={ (e)=> setDescription(e.target.value)}/>
                     
                  <button onClick  ={handleSubmit}> Add Task </button>
                  

                  </div>
    )
};
 export default AddTodo;