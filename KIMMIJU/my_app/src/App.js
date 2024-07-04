import React, { useState } from 'react';
import './App.css'; // 스타일링을 위한 CSS 파일

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        if (todoText.trim()) {
            setTodos([...todos, { text: todoText, completed: false }]);
            setTodoText('');
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
        setTodos(newTodos);
    };

    const completedTodosCount = todos.filter((todo) => todo.completed).length;

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <div className='input-container'>
                <input
                    type='text'
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder='Enter a todo'
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul className='todo-list'>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div className='todo-stats'>
                Completed Todos: {completedTodosCount} / Total Todos: {todos.length}
            </div>
        </div>
    );
};

export default App;
