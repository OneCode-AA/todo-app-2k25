"use client";
import React from 'react';
import Header from '@/components/Header';
import Todo from '@/components/Todo';
import TodoHero from '@/components/TodoHero';
import ToDoList from '@/components/ToDoList';

function Home() {
  const [tasks, setTasks] = React.useState([]);

  const toggleTaskCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, is_completed: !task.is_completed } : task
      )
    );
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };


  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const tasksCompleted = tasks.filter((task) => task.is_completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="wrapper flex flex-col sm:w-full w-[70%] m-auto justify-center items-center gap-4">
      <Header />
      <TodoHero tasks_completed={tasksCompleted} total_tasks={totalTasks} />
      <Todo setTask={setTasks} />
      <ToDoList
        tasks={tasks}
        onToggleComplete={toggleTaskCompletion}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default Home;
