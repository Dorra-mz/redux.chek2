
import './App.css';
import AddTodo from './Components/AddTask';
import ListTodo from './Components/ListTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTodo/>
     <ListTodo/>
    
    </div>
  );
}

export default App;
