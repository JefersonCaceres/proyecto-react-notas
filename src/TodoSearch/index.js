import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';



function TodoSearch (){
/**
 * # creamos un estado que guardamos en searchValue
 * y tenemos una funcion que nos actualice el estado
 * # creamos otra funcion que nos va actualizando lo que escribimos en el input
 */
const {searchValue, setSearchValue}= React.useContext(TodoContext);

   
    const onSearchValue=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
     
    return(
<input className="TodoSearch"
       placeholder="Search"
       value={searchValue}
       onChange={onSearchValue}
/>
)};

export {TodoSearch};