import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './todo';


const store = configureStore ({
    reducer : {
        todos : taskReducer
    }
});

export default store ;