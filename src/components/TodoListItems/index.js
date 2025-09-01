import { MdDelete } from "react-icons/md";
import './index.css'

const TodoListItems = (props) => {
    const {todoDetails,onToggleCheckbox,onDeleteTodoItem} = props // data getting from todos-list via Props
    const {id,todoText,isChecked} = todoDetails // destructure 


// on checkbox checking >>>>>>>>>>    
const onCheckboxChecking = () => {
    onToggleCheckbox(id)
}

// on delete todo item >>>>>>>>>>>
const onClickTodoItemDelete = () =>{
    onDeleteTodoItem(id)
}

// if checked a todos text (label) changing the style of text
const labelCheckingText = isChecked ? "todo-text-label-checked" : "todo-text-label"

    return(
        <li key={id} className='todo-list-items-container'>
        {/* checkbox */}
        <input type="checkbox"
        id={id}
        className='todo-checkbox-input'
        checked={isChecked}
        onChange={onCheckboxChecking} />
        <div className='todo-list-item-text-container'>
            <label className={labelCheckingText} htmlFor={id}>{todoText}</label>
            {/* Delete todo Button */}
            <button type="button" className='todo-item-delete-btn' onClick={onClickTodoItemDelete}>
                <MdDelete className="todo-item-delete-icon"/>
            </button>
        </div>
        </li>
    )

}

export default TodoListItems 

