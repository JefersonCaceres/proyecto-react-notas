import React from "react";
import './TodoCounter.css';
import {TodoContext} from '../TodoContext'
//import  'bootstrap/dist/css/bootstrap.min.css' ;

function TodoCounter(){
    
    const {totalTodos,completedTodos}=React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos}</h2>
    )
};
export {TodoCounter};