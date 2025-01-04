import React from 'react';
import Items from './Items';

function ToDoList({ tasks }) {
  return (
    <ol className="todo_list self-center w-[97%] m-w-[455px] flex flex-col items-center my-[27px] gap-[27px]">
      {tasks && tasks.length > 0 ? (
        tasks.map((item, index) => <Items key={index} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default ToDoList;
