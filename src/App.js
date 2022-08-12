import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import {TodoCounter} from './TodoCounter';
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";

const defaultodos=[
  {text:'esto es el text1', completed: true},
  {text:'it is the text two', completed: false},
  {text:'it is the text three', completed:false},
  {text:'hola', completed:false}
];

function App() {

const [searchValue,setSearchValue]=React.useState(''); 
 // Estado inicial de nuestros TODOs
 const [todos, setTodos] = React.useState(defaultodos);
 // Cantidad de TODOs completados
 const completedTodos = todos.filter(todo => !!todo.completed).length;
 // Cantidad total de TODOs
 const totalTodos = todos.length;

 let searchedTodos=[];
 if (!searchValue.length>=1){
  searchedTodos=todos;
 }else{
  searchedTodos= todos.filter(todo=>{
    const todoText= todo.text.toLowerCase()
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  
 }

 const completeTodo=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos]; 
    newTodos[todoIndex].completed= true;
    setTodos(newTodos);
 };

 const deleteTodo=(text)=>{
  const todoIndex= todos.findIndex(todo=>todo.text===text);
  const newTodos=[...todos]; 
  newTodos.splice(todoIndex,1)
  setTodos(newTodos);
};

 return (

    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
      <TodoList >
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text ={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
          
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

      );
}

export default App;
