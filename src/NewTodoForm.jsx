import React, { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  };

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div class="input-group mb-3">
  		<input className="form-control" placeholder='Input New item' type="text" id="item" value={newItem} onChange={handleChange} />
          <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}
