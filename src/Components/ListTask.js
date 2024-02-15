import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTodo = () => {
    const todos =  useSelector (state=> state.todos);
    console.log('todos',todos)
 


    return ( <div>
        <h2> taks list </h2>
       <ul>
        {todos.map((el, index )=>(<Task key = {index} todo = {el}/>))}
        </ul>

        
    </div>

    )   };
    export default ListTodo;
