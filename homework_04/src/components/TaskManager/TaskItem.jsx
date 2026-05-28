import { useState } from "react";
import './TaskItem.css'

export default function TaskItem({ task, onUpdate, onDelete }) {

  const [isEditing, setIsEditing] = useState(null); 
  const [editedValue, setEditedValue] = useState({});


  const LEVELS = [
    "junior",
    "middle",
    "senior"
  ];

  const startEditing = (id, key, value) => {
    setIsEditing({ id, key });
    setEditedValue(value);

  };

  const saveEdit = () => {

    onUpdate({...task, [isEditing.key]:editedValue});
    setIsEditing(null);
    setEditedValue("");
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditedValue("");
  };

  return (
    <li className="task-card">
       <div className="task-header">
        <h3>Task #{task.id}</h3>
      </div>
      {Object.entries(task).filter(([key]) => key !== 'id').map(([key, value]) => (
        <div key={key} className="task-field">
          <strong className="field-label">
            {key}
          </strong>
          {isEditing?.id === task.id && isEditing?.key === key ? (
            <div className="editor-container">
              {key === "isDone" ? (
                <input
                  type="checkbox"
                  checked={editedValue}
                  onChange={(e) => setEditedValue(e.target.checked)}
                />
              ) : key === "assignee" ? (
                <div className="assignee-editor">
                  <input
                    type="text"
                    value={editedValue.name}
                    onChange={(e) =>
                      setEditedValue({ ...editedValue, name: e.target.value })
                    }
                  />
          <select
              value={editedValue.level}
              onChange={(e) =>
                setEditedValue({
                  ...editedValue,
                  level: e.target.value
                })
              }
            >
              {LEVELS.map(level => (
                <option
                  key={level}
                  value={level}
                >
                  {level}
                </option>
              ))}
          </select>
                </div>
              ) : (
                <input
                  type="text"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
              )}
              <div className="editor-buttons">
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            </div>
          ) : (
            <span  className="field-value" onClick={() => startEditing(task.id, key, value)}>
              {Array.isArray(value)
                ? value.join(", ")
                : typeof value === "object" && value !== null
                ? JSON.stringify(value)
                : String(value)}
            </span>
          )}
        </div>
      ))}
      <button  className="delete-btn" onClick={onDelete}>Delete Task</button>
    </li>
  );
}