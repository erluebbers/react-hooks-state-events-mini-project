import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState([...TASKS])
  const [newItem, setNewItem] = useState("")
  const [newItemCategory, setNewItemCategory] =useState("Code")

  function onTaskFormSubmit(event) {
    event.preventDefault()
    const addItem = [...tasks, {text: newItem, category: newItemCategory}]
    setTasks(addItem)
  }

  function handleNewItem(event) {
    setNewItem(event.target.value)
  }

  function handleNewItemCategory(event) {
    setNewItemCategory(event.target.value)
  }

  function handleDelete(text) {
    const modArray = tasks.filter(task => task.text !== text)
    setTasks(modArray)
  }

  const displayedTasks = tasks.filter(task => {
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
      <NewTaskForm 
        categories={CATEGORIES}
        newItem={newItem}
        handleNewItem={handleNewItem}
        newItemCategory={newItemCategory}
        handleNewItemCategory={handleNewItemCategory}
        onTaskFormSubmit={onTaskFormSubmit}
        />
      <TaskList tasks={displayedTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
