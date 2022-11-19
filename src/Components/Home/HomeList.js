import React, {useState, useEffect} from 'react'
import HomeForm from './HomeForm'
import HomeToDo from './HomeToDo';

function HomeList () {
    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
         setTodos(todos);
        }
      }, []);
        

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }  
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updatedTodos);
    }

    return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <HomeForm onSubmit={addTodo}/>
      <HomeToDo todos={todos} completeTodo={completeTodo} removeTodo=
      {removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default HomeList
