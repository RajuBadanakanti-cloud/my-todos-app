import { useNavigate} from 'react-router-dom'
import './index.css'
import { useState } from 'react'


const TodoHome = () => {

    // handle checkbox to start >>>
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxToStart = () => {
        setIsChecked(prev => !prev)
    }

    // Navigate to todo-list page After click this (Start) button
    const navigate = useNavigate()
    const onStartToTodoList = () => {
       navigate("/todos-list", {replace:true})
    }

    // if is checkbox is check now you can able start
    const isAbleToStart = isChecked ? false : true 
    const isDisableStyle = isChecked ? "todo-home-start-button" : "todo-home-start-button-disable"
    

    return (
        <div className='bg-todo-home-container'>
            <div className='todo-home-content-container'>
            <img src='https://res.cloudinary.com/dnh9hnjbx/image/upload/v1751517607/Flat_vector_of_business_task_management_team_working_illustration_concept_teamwork_managing_task____-removebg-preview_p2gsl9.png'
            alt="todo home" 
            className='todo-home-image'/>
            <h1 className="todo-home-header">Simplify Your Day: Your Smart To-Do List</h1>
            <p className='todo-home-discription'>Tackle your tasks with ease. Our intuitive to-do list helps you organize, prioritize, and accomplish everything that matters, so you can focus on what truly counts.</p>
            <div className='todo-home-note-card'>
                <input type="checkbox" className='note-checkbox' onClick={handleCheckboxToStart}/>
                <p className='todo-home-note'>
                Please remember to save all changes without fail. 
                Any modifications made must be saved to ensure no progress is lost.</p>
            </div>
            <button type="button"
            disabled={isAbleToStart}
            className={isDisableStyle} onClick={onStartToTodoList}>Start</button>
        </div>
        </div>
    )
}

export default TodoHome

