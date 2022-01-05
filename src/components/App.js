import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")

  const displayedTasks = TASKS.filter(task => {
    if (category === "All") {
      return true
    } else {
      return task.category === category
    }
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory} />
      <NewTaskForm />
      <TaskList tasks={displayedTasks} />
    </div>
  );
}

export default App;
