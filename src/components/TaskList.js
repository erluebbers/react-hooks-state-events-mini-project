import React, { useState } from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";


function TaskList( {tasks} ) {
  const [updatedTasks, setUpdatedTasks] = useState(tasks)

  function handleDelete(text) {
    const newFormData = tasks.filter(task => task.text !== text)
    setUpdatedTasks(newFormData)
  }


  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task text={task.text} category={task.category} key={uuid()} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
