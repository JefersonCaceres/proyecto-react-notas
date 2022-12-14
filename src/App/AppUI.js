import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoCounter} from '../TodoCounter';
import { Modal } from '../Modal';
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import {TodoContext} from "../TodoContext"
import { TodoForm } from "../TodoFrom";
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } =React.useContext(TodoContext);
return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
     
                <TodoList >
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading/>}
                {(!loading && !searchedTodos.length)&& <EmptyTodos/>}
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
             {!!openModal &&(
               <Modal>
               <TodoForm/>
              </Modal>
             )}
        
      <CreateTodoButton 
      setOpenModal={setOpenModal}
      />
              
    </React.Fragment>
);

}


export {AppUI};