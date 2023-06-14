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
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
