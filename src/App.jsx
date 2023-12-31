import React, { useEffect, useState } from 'react';
import { NewTodoForm } from './NewTodoForm.jsx';
import { TodoList } from './TodoList';
import NavBar from './components/NavBar'
import Loader from './components/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setLoading(false)
  }, []);


  const addTodo = (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <>
      {loading ? <Loader /> : ''}
      <div className='container'>
        <NavBar className="mb-5" />
        <NewTodoForm onSubmit={addTodo} />
        <h1 className="header">Todo List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}
