import "./TaskForm.css";

export default function TaskForm({
  onAdd,
  formData,
  setFormData
}) {

  const initialTaskState = {
    title: "",
    tags: "",
    assignee: {
      name: "",
      level: "junior",
    },
    isDone: false,
  };

  const handleClearForm = () => {
    setFormData(initialTaskState);
  };

  function handleChange(e) {

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {

      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }

    if (name.startsWith("assignee.")) {

      const field = name.split(".")[1];

      setFormData(prev => ({
        ...prev,
        assignee: {
          ...prev.assignee,
          [field]: value,
        },
      }));

      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <fieldset className="task-fieldset">

      <legend>Add New Task</legend>

      <form
        className="task-form"
        onSubmit={onAdd}
      >

        <div className="form-group">
          <label>Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tags</label>

          <input
            type="text"
            name="tags"
            placeholder="react, hooks"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Assignee Name</label>

          <input
            type="text"
            name="assignee.name"
            value={formData.assignee.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
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

        <div className="checkbox-group">
          <label htmlFor="done-checkbox">
            Done
          </label>

          <input
            id="done-checkbox"
            type="checkbox"
            name="isDone"
            checked={formData.isDone}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">

          <button
            type="submit"
            className="primary-btn"
          >
            Create Task
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={handleClearForm}
          >
            Clear Form
          </button>

        </div>

      </form>

    </fieldset>
  );
}
