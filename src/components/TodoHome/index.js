import { useNavigate } from 'react-router-dom'
import './index.css'


const TodoHome = () => {
    const navigate = useNavigate()

    const onStartToTodoList = () => {
        navigate("/todos-list")
        
    }
    return (
        <div className='bg-todo-home-container'>
            <div className='todo-home-content-container'>
            <img src='https://res.cloudinary.com/dnh9hnjbx/image/upload/v1751517607/Flat_vector_of_business_task_management_team_working_illustration_concept_teamwork_managing_task____-removebg-preview_p2gsl9.png'
            alt="todo home" 
            className='todo-home-image'/>
            <h1 className="todo-home-header">Simplify Your Day: Your Smart To-Do List</h1>
            <p className='todo-home-discription'>Tackle your tasks with ease. Our intuitive to-do list helps you organize, prioritize, and accomplish everything that matters, so you can focus on what truly counts.</p>
            <button type="button" className='todo-home-start-button'onClick={onStartToTodoList}>Start</button>
        </div>
        </div>
    )
}

export default TodoHome