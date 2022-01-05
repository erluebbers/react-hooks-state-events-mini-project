import React from "react";

function NewTaskForm( {categories, newItem, handleNewItem, newItemCategory, handleNewItemCategory, onTaskFormSubmit} ) {

  const options = categories.filter(category => category !== "All").map(category => {
      return <option key={category}>{category}</option>
    })

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit} >
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
