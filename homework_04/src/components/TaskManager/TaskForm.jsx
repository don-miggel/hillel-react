import { useState } from "react";

export default function TaskForm({onAdd, formData,  setFormData}) {

  const initialTaskState = {
    title: "",
    tags: "",
    assignee: {
      name: "",
      level: "junior",
    },
    isDone: false,
  } ;

  const handleClearForm =()=>{
      setFormData(initialTaskState);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }

    if (name.startsWith("assignee.")) {
      const field = name.split(".")[1];

      setFormData((prev) => ({
        ...prev,
        assignee: {
          ...prev.assignee,
          [field]: value,
        },
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <fieldset>
        <legend>Add new task</legend>
    <form onSubmit={(e)=>onAdd(e)}>

      <div>
        <label>Title</label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Tags</label>

        <input
          type="text"
          name="tags"
          placeholder="react, hooks"
          value={formData.tags}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Assignee Name</label>

        <input
          type="text"
          name="assignee.name"
          value={formData.assignee.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Assignee Level</label>

        <select
          name="assignee.level"
          value={formData.assignee.level}
          onChange={handleChange}
        >
          <option value="junior">Junior</option>
          <option value="middle">Middle</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div>
        <label>Done</label>

        <input
          type="checkbox"
          name="isDone"
          checked={formData.isDone}
          onChange={handleChange}
        />
      </div>

      <button >
        Create Task
      </button>

      <button type="button" onClick={handleClearForm}>
        Clear Form
      </button>

    </form>
    </fieldset>
  );
}
