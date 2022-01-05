import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";


function TaskList( {tasks, handleDelete} ) {
  
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task text={task.text} category={task.category} key={uuid()} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
