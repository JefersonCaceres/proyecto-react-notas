import React from "react";
import './TodoCounter.css';
//import  'bootstrap/dist/css/bootstrap.min.css' ;

function TodoCounter({total, completed}){
    
    return (
        <h2 className="TodoCounter" >Has completado {completed} de {total}</h2>
    )
};
export {TodoCounter};