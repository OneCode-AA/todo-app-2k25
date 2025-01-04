"use client";
import Header from '@/components/Header'
import Todo from '@/components/Todo'
import TodoHero from '@/components/TodoHero'
import ToDoList from '@/components/ToDoList'
import React from 'react';


function Home() {
  const [task, setTask] = React.useState([
    { 
      id: 1,
      title: "Some task",
      is_completed: false },
    // add other dummy data
  ]);
  const tasks_completed = task.filter(
    (task) => task.is_completed === true
  ).length;
  const total_tasks = task.length;

  return (
    <div className='wrapper flex flex-col sm:w-full w-[70%] m-auto justify-center items-center gap-1'>
         <Header/>
        <TodoHero tasks_completed={tasks_completed} total_tasks={total_tasks} />
   
      <Todo setTask={setTask}/>
      <ToDoList tasks={task}/>

       
       
    </div>
  )
}

export default Home