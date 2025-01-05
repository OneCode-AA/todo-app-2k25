import { DeleteOutline, Edit, RadioButtonUnchecked, CheckCircle } from '@mui/icons-material';
import React from 'react';

function Items({ item, onToggleComplete, onDelete }) {
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
        <p>{item.title}</p>
      </button>
      <section className="task_items_right flex gap-2">
        <button>
          <span><Edit className="editBtn"/></span>
          
        </button>
        <button onClick={() => onDelete(item.id)}>
          <span><DeleteOutline className="deleteBtn" /></span>
          
        </button>
      </section>
    </li>
  );
}

export default Items;
