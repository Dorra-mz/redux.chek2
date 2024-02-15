import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const taskSlice = createSlice ({
    name : 'todos',
    initialState : [ {text : 'Read a book ' , id : uuidv4() , isDone : false},
    {text : 'Go Out ' , id : uuidv4() , isDone : false},
    {text : 'Go to The Gym ' , id : uuidv4() , isDone : false},
],
    
    reducers : {
        addTask : ( state , action )=> {
            const newTodo = {id : uuidv4 () ,
                             isDone : false, 
                             text : action.payload ,
            }
       state.push(newTodo)
                
        },
    
       editTask : (state, action) => {
         const index = state.findIndex ((el)=> el.id ===action.payload)
         state[index].text = prompt ('please update your todo');
       },

       deleteTask : (state , action) =>
       {
        return state.filter(task => task.id !== action.payload)
    
       },

       toggleTask : (state , action)  => {
       //const task = state.find (task => task.id === action.payload)
       //if (task) {
        //task.isDone = !task.isDone 

        return state.map((el) =>{
            if (el.id === action.payload)
            return {...el , isDone : !el.isDone}
            else {return el }
        })
       }},
      
      



}
);

export const { addTask , toggleTask , deleteTask , editTask }= taskSlice.actions;
export default taskSlice.reducer;