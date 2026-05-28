import { useState } from "react";

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
    <li>
      {Object.entries(task).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong>{" "}
          {isEditing?.id === task.id && isEditing?.key === key ? (
            <>
              {key === "isDone" ? (
                <input
                  type="checkbox"
                  checked={editedValue}
                  onChange={(e) => setEditedValue(e.target.checked)}
                />
              ) : key === "assignee" ? (
                <>
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
                </>
              ) : (
                <input
                  type="text"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
              )}
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <span onClick={() => startEditing(task.id, key, value)}>
              {Array.isArray(value)
                ? value.join(", ")
                : typeof value === "object" && value !== null
                ? JSON.stringify(value)
                : String(value)}
            </span>
          )}
        </div>
      ))}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}