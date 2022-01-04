import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  
  const catTasks = TASKS.filter(task => {
    if (category === "All") {
      return task
    } else {
    return task.category === category
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory}/>
      <NewTaskForm />
      <TaskList tasks={catTasks} />
    </div>
  );
}

export default App;
