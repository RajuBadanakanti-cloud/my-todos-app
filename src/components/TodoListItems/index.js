import { MdDelete } from "react-icons/md";
import './index.css'

const TodoListItems = (props)=> {
    const {todoDetails,onToggleCheckbox,onDeleteTodoItem} = props
    const {id,todoText,isChecked} = todoDetails


// on checkbox checking >>>>>>>>>>    
const onCheckboxChecking = () => {
    onToggleCheckbox(id)
}

// on delete todo item >>>>>>>>>>>
const onClickTodoItemDelete = () =>{
    onDeleteTodoItem(id)
}

const labelCheckingText = isChecked ? "todo-text-label-checked" : "todo-text-label"

    return(
        <li key={id} className='todo-list-items-container'>
        <input type="checkbox"
        id={id}
        className='todo-checkbox-input'
        checked={isChecked}
        onChange={onCheckboxChecking} />
        <div className='todo-list-item-text-container'>
            <label className={labelCheckingText} htmlFor={id}>{todoText}</label>
            <button type="button" className='todo-item-delete-btn' onClick={onClickTodoItemDelete}>
                <MdDelete className="todo-item-delete-icon"/>
            </button>
        </div>
        </li>
    )

}

export default TodoListItems 

