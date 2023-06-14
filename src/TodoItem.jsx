import React from 'react';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  const handleToggle = (e) => {
    toggleTodo(id, e.target.checked);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        {title}
      </label>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
