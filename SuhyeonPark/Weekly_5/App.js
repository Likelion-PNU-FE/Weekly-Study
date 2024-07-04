import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [completedCount, setCompletedCount] = useState(0);

    const updateCompletedTodo = (todos) => {
        const count = todos.filter((todo) => todo.completed).length;
        setCompletedCount(count);
    };

    // useEffect 훅 이용 todos 변경시마다 updateCompletedTodo 호출 => setTodos 호출시마다 아래에 updateCompltedTodo를 호출할 필요가 없어짐
    /*
    useEffect(() => {updateCompletedTodo(todos)}, [todos])
    */

    const addTodo = (todo) => {
        const newTodos = todos.concat({ id: Date.now(), text: todo, completed: false });
        setTodos(newTodos);
        updateCompletedTodo(newTodos);
    };

    const removeTodo = (id) => {
        const newTodos = todos.filter((todoNode) => todoNode.id !== id);
        setTodos(newTodos);
        updateCompletedTodo(newTodos);
    };

    const completedTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: todo.text, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        updateCompletedTodo(newTodos);
    };

    return (
        <div className='App'>
            <Title />
            <InputButton addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} completedTodo={completedTodo} />
            <CompletedCount completedCount={completedCount} totalCount={todos.length} />
        </div>
    );
}

function Title() {
    return (
        <h1>
            <b>TodoList</b>
        </h1>
    );
}

function InputButton({ addTodo }) {
    const [topic, setTopic] = useState('');

    const InputChange = (event) => {
        setTopic(event.target.value);
    };

    const handleAddTodo = () => {
        if (topic.trim() === '') {
            alert('값을 입력해주세요!');
            return;
        }

        addTodo(topic);
        setTopic('');
    };

    return (
        <div className='container'>
            <input
                type='text'
                value={topic}
                onChange={InputChange}
                className='input-field'
                placeholder='할 일을 입력해주세요'
            ></input>
            <button onClick={handleAddTodo} className='submit-button'>
                작성하기
            </button>
        </div>
    );
}

function TodoList({ todos, removeTodo, completedTodo }) {
    return (
        <ul id='infoList'>
            {todos.map((todo) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    <b>{todo.text}</b>
                    <br></br>
                    <button onClick={() => completedTodo(todo.id)} className='button'>
                        {todo.completed ? '취소' : '완료'}
                    </button>
                    <button onClick={() => removeTodo(todo.id)} className='button'>
                        삭제
                    </button>
                </li>
            ))}
        </ul>
    );
}

function CompletedCount({ completedCount, totalCount }) {
    return (
        <div id='status'>
            {completedCount} / {totalCount}
        </div>
    );
}

export default App;
