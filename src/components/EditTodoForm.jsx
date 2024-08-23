// import React, {useState} from "react";


// export const EditForm = ({editTodo, task}) => {
//     const [value, setValue] = useState("");

//     const handleSubmit = e => {
//         e.preventDefault();

//         editTodo(value, task.id);

//         setValue("");
//     }
//     return (
//         <form className="TodoForm" onSubmit={handleSubmit} >
//             <input type="text" className="todo-input" value = {value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)}/>
//             <button type='submit' className="todo-btn">Update Task</button>
//         </form>
//     )
// }


import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => { //EditTodoForm 
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Update Task</button>
  </form>
  )
}