import React from 'react';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
const handleToggle = (e) => {
toggleTodo(id, e.target.checked);
};

const handleDelete = () => {
deleteTodo(id);
};

return (
<li className='list-group-item d-flex justify-content-between align-items-start'>
<div className="ms-2 me-auto">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id={id} checked={completed} onChange={handleToggle} />
    <label className="form-check-label" htmlFor={id}> {title}</label>
    
  </div>
  </div>
  <button onClick={handleDelete}  className="btn btn-danger rounded-pill">x</button>
</li>
);
}