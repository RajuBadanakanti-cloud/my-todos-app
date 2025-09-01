import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from "uuid"

import { FaHome } from "react-icons/fa";
import TodoListItems from "../TodoListItems"
import './index.css'



const TodosList = () => {
    const [todosList, setTodosList] = useState([]) // todos added in this list
    const [todoCreateInput,setTodoCreateInput] = useState("") // getting a input from user

// ceating a todo from user inputs
    const onChangeCreateTodo = (event) =>{
        setTodoCreateInput(event.target.value)
    }


// saved todos are geting from local storage
useEffect(()=>{
    const savedTodo = JSON.parse(localStorage.getItem("todo")) || []
    setTodosList(savedTodo)
},[])


// ADD TODO BUTTON >>
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

    // SAVE TODO BUTTON >>
    const onSaveBtn = () => {
       localStorage.setItem("todo",JSON.stringify(todosList))
       alert("Is it Saving todo..")
    }

    // onDeleteTodoItem 
    const onDeleteTodoItem = (id) => {
        const filteringList = todosList.filter(eachItem => eachItem.id !== id)
        setTodosList(filteringList)
    }

    // on Back To Home replacing 
    const navigation = useNavigate()
    const onBackToHomeBtn = () => {
        navigation("/", {replace:true})
    }

// cheking note for empty todoslist note
    const able = todosList.length > 0 ? "" : "Add Your Todos"

    return (
        <div className='todos-list-bg-container'>
            <h1 className='todos-list-heading'>TODOS</h1>
            
            <div className='todos-list-content-container'>
                {/* Back to home icon button */}
                <button type='button' className='back-to-home-button' onClick={onBackToHomeBtn}>
                    <FaHome className='home-icon' />
                </button>

                <h1 className='todo-create-heading'><span className='todo-create-span'>Create </span>Task</h1>
                <input type="text"
                value={todoCreateInput}
                onChange={onChangeCreateTodo}
                 className='todo-input-element' placeholder='whats needs to be done?'/>

                {/* todo add button */}
                <button type="button" onClick={onClickAddTodoBtn} className='todo-add-task-button'>Add</button>

                {/* adding task list section  */}
                <h1 className='todo-my-task-heading'><span className='todo-my-task-span'>My </span>Tasks</h1>
                <ul className='todos-ul-list-container'>
                    <p className='emply-todos-note'>{able}</p>
                    {todosList.map(eachItem => <TodoListItems key={eachItem.id} todoDetails={eachItem} 
                        onToggleCheckbox={onToggleCheckbox}
                        onDeleteTodoItem={onDeleteTodoItem}/>
                    )}
                </ul>
        
                {/* save button */}
                <button type="button"  className="todo-task-save-button" onClick={onSaveBtn}>Save</button>
            </div>
        </div>
    )
}



export default TodosList
