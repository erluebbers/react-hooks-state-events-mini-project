import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const [newItem, setNewItem] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Code")

  const options = categories.filter(category => category !== "All").map(category => {
      return <option key={category}>{category}</option>
    })

  function handleNewItem(event) {
    setNewItem(event.target.value)
  }

  function handleNewItemCategory(event) {
    setNewItemCategory(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({category: newItemCategory, text: newItem})
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit} >
      <label>
        Details
        <input type="text" name="text" value={newItem} onChange={handleNewItem}/>
      </label>
      <label>
        Category
        <select name="category" value={newItemCategory} onChange={handleNewItemCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
