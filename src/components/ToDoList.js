import React from 'react';
import Items from './Items';

function ToDoList({ tasks, onToggleComplete, onDelete }) {
  return (
    <ol className="todo_list self-center w-full max-w-[455px] flex flex-col items-center my-[27px] gap-[27px]">
      {tasks && tasks.length > 0 ? (
        tasks.map((item) => (
          <Items
            key={item.id}
            item={item}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-gray-400">Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default ToDoList;
