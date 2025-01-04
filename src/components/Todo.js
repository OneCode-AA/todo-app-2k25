import React, { useState } from 'react';

function Todo({ setTask }) {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTask((prev) => [
        ...prev,
        { id: Date.now(), title: newTask, is_completed: false },
      ]);
      setNewTask(''); // Clear the input field after adding the task
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    addTask(); // Call the function to add the task
  };

  return (
    <form 
    className="form w-[97%] m-w-[455px] flex items-center gap-[12px] mt-[38px] self-center" 
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
      <button type="submit" className='w-[10%] h-[50px] bg-[#88ab33] border-none rounded'>
        <span className="">Submit</span>
      </button>
    </form>
  );
}

export default Todo;
