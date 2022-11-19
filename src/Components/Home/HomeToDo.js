import React, {useState} from 'react'
import HomeForm from './HomeForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function HomeToDo({todos, completeTodo, removeTodo, updateTodo}) {
  
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '' 
        })
    }

    if(edit.id){
        return <HomeForm edit={edit} onSubmit={submitUpdate}/>
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index} >
            <div onClick={() => completeTodo(todo.id)} style={{padding: '10px', margin: '0px', cursor: 'pointer', width: '80%'}} key={todo.id} >
                {todo.text}
            </div>
            <div className='icons' >
                <RiCloseCircleLine 
                style={{margin:'5px'}}
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                /> 
                <TiEdit 
                style={{margin:'5px'}}
                onClick={() => setEdit({ id: todo.id, value: todo.text})}
                className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default HomeToDo;
