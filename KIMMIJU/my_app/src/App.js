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
        setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
    };

    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <div className='input-container'>
                <input
                    type='text'
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder='할 일을 입력해주세요'
                />
                <button onClick={addTodo}>작성하기</button>
            </div>
            <ul className='todo-list'>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                        <div className='buttons'>
                            <button onClick={() => toggleTodo(index)}>{todo.completed ? '완료' : '취소'}</button>
                            <button onClick={() => deleteTodo(index)}>삭제</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='todo-stats'>
                {completedCount} / {todos.length}
            </div>
        </div>
    );
};

export default App;
