import React from 'react';
import { TodoItem } from './TodoItem.jsx';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  const sortedTodos = todos.slice().sort((a, b) => {
    return a.title.localeCompare(b.title); // Order by title
  });

  return (
    <ul className="list">
      {sortedTodos.length === 0 ? (
        <li>No Todos</li>
      ) : (
        sortedTodos.map((todo) => (
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))
      )}
    </ul>
  );
}
