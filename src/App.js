import './App.css';
import { useState } from 'react';
import TodoList from './Todolist';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
      {
        id: Math.random(),
        text: "Learn React",
        isComplated: false
      },
      {
        id: Math.random(),
        text: "Learn Css",
        isComplated: false
      },
      {
        id: Math.random(),
        text: "Watch a movie",
        isComplated: false
      },
    ]);

  return (
    <div className="App">
      <TodoForm onAdd={((text) => {
        setTodos([
          ...todos,
          {
            id: Math.random,
            text: text,
            isComplated: false
          }
        ])
      })}/>
      <TodoList todos = {todos}
      onDelete={(todo)=> {
        setTodos(todos.filter((t) => t.id !== todo.id));
      }}
      onChange={(newTodo) => {
        setTodos(todos.map((item) => {
           if(item.id === newTodo.id) {
             return newTodo
           }
           return item
         }));
       }}
      />
      <TodoFooter todos={todos}
      onClearComplated={() => {
        setTodos(todos.filter((todo)=> !todo.isComplated));
      }}
      />
    </div>
  );
}

export default App;
