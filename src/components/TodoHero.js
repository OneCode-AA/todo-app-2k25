import React from 'react';

function TodoHero({ tasks_completed, total_tasks }) {
  return (
    <section className="border border-solid border-emerald-400 flex justify-around items-center w-[90%] max-w-[455px] p-[12px] rounded-[11px]">
      <article>
        <p className="text-[32px]">Tasks Completed</p>
        <p className="text-[24px]">Keep Going!</p>
      </article>
      <article className='bg-emerald-600 w-[150px] h-[150px] rounded-[75px] text-[48px] flex justify-center items-center text-center'>
        <span className="">{tasks_completed}</span>
        /
        <span className="">{total_tasks}</span>
      </article>
    </section>
  );
}

export default TodoHero;
