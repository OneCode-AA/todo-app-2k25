import React, { useState } from 'react';

function Todo({ setTask }) {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTask((prev) => [
        ...prev,
        { id: Date.now(), title: newTask, is_completed: false },
      ]);
      setNewTask(''); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addTask(); 
  };

  return (
    <form 
    className="form w-[97%] m-w-[455px] flex items-center gap-[12px] mt-[38px] self-center max-sm:flex-col" 
    onSubmit={handleSubmit}
    >
      <label className='w-[90%]'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          name="todo"
          id="todo"
          className='w-[100%] bg-[#1f2937] text-white h-[50px] outline-none border-none p-[12px] text-center rounded'
          placeholder="Write your next task"
        />
      </label>
      <button type="submit" className='w-[10%] max-sm:w-[30%] h-[50px] bg-teal-700 border-none rounded hover:transition-all hover:ease-in-out hover:duration-500 duration-500 hover:scale-[1.0921]'>
        <span className="">Submit</span>
      </button>
    </form>
  );
}

export default Todo;
