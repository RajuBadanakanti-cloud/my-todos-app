import { useState,useEffect } from 'react'
import {v4 as uuidv4} from "uuid"

import TodoListItems from "../TodoListItems"
import './index.css'



const TodosList = () => {
    const [todosList, setTodosList] = useState([])
    const [todoCreateInput,setTodoCreateInput] = useState("")


    const onChangeCreateTodo = (event) =>{
        setTodoCreateInput(event.target.value)
    }


// useEFFECT 
useEffect(()=>{
    const savedTodo = JSON.parse(localStorage.getItem("todo")) || []
    setTodosList(savedTodo)
},[])


    const onClickAddTodoBtn = () => {
    if (todoCreateInput.trim() === "") {
        alert("Enter Valid Text");
        return;
    }
          setTodosList(prev => [...prev,{
            id:uuidv4(),
            todoText:todoCreateInput,
            isChecked:false
        }])
        setTodoCreateInput("")

    }

    // onToggleCheckbox 
    const onToggleCheckbox = (id) => {
        setTodosList(prev => 
            prev.map(item => item.id === id ? {...item,isChecked:!item.isChecked} : item
        ))
    }

    // SAVE 
    const onSaveBtn = () => {
       localStorage.setItem("todo",JSON.stringify(todosList))
       alert("Is it Saving todo..")
    }

    // onDeleteTodoItem 
    const onDeleteTodoItem = (id) => {
        const filteringList = todosList.filter(eachItem => eachItem.id !== id)
        setTodosList(filteringList)
    }


    const able = todosList.length > 0 ? "" : "Add Your Todos"
    return (
        <div className='todos-list-bg-container'>
            <h1 className='todos-list-heading'>TODOS</h1>
            <div className='todos-list-content-container'>
                <h1 className='todo-create-heading'><span className='todo-create-span'>Create </span>Task</h1>
                <input type="text"
                value={todoCreateInput}
                onChange={onChangeCreateTodo}
                 className='todo-input-element' placeholder='whats needs to be done?'/>
                <button type="button" onClick={onClickAddTodoBtn} className='todo-add-task-button'>Add</button>
            {/* adding task list section  */}
            <h1 className='todo-my-task-heading'><span className='todo-my-task-span'>My </span>Tasks</h1>
            <ul className='todos-ul-list-container'>
                <p className='emply-todos-note'>{able}</p>
                {todosList.map(eachItem => <TodoListItems key={eachItem.id} todoDetails={eachItem} 
                onToggleCheckbox={onToggleCheckbox}
                onDeleteTodoItem={onDeleteTodoItem}/>)}
            </ul>
            <button type="button"  className="todo-task-save-button" onClick={onSaveBtn}>Save</button>
            </div>
        </div>
    )
}



export default TodosList
