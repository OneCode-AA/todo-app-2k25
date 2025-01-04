import { DeleteOutline, Edit } from '@mui/icons-material';
import React from 'react';

function Items({ item }) {
  return (
    <li id={item?.id} className="task_item flex justify-between items-center h-[70px] w-[100%] m-w-[455px] border border-solid border-[#c2b39a] text-[16px] bg-[#0d0d0d] text-white p-[12px]">
      <button className="task_items_left">
        <svg>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p>{item?.title}</p>
      </button>
      <section className="task_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
         <Edit/>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
         <DeleteOutline/>
        </button>
      </section>
    </li>
  );
}

export default Items;
