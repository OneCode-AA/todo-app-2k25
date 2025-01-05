import { DeleteOutline, Edit, RadioButtonUnchecked, CheckCircle } from '@mui/icons-material';
import React, { useState } from 'react';

function Items({ item, onToggleComplete, onEdit, onDelete }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  const handleSave = () => {
    onEdit(item.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li
      id={item.id}
      className={`task_item flex justify-between items-center h-[70px] w-full max-w-[455px] border border-solid border-[#c2b39a] text-[16px] bg-[#0d0d0d] text-white p-[12px] ${
        item.is_completed ? 'line-through opacity-50' : ''
      }`}
    >
      <button
        className="task_items_left flex items-center gap-2"
        onClick={() => onToggleComplete(item.id)}
      >
      {item.is_completed ? <CheckCircle /> : <RadioButtonUnchecked />}
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="bg-transparent border-b border-gray-500 focus:outline-none text-white"
          />
        ) : (
          <p>{item.title}</p>
        )}
      </button>
      <section className="task_items_right flex gap-2">
        {isEditing ? (
          <button onClick={handleSave}>
            <span>Save</span>
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <span><Edit className="editBtn" /></span>
          </button>
        )}
        <button onClick={() => onDelete(item.id)}>
          <span><DeleteOutline className="deleteBtn" /></span>
          
        </button>
      </section>
    </li>
  );
}

export default Items;
