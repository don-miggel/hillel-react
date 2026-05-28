import React from 'react'
import { useState, use } from 'react'
import { promiseTasks, API, fetchTasks } from '../../services/tasks'
import TaskList from './TaskList';
import TaskForm from './TaskForm';


export default function TaskBoard() {
    const initialTasks = use(promiseTasks);
    const [tasks, setTasks] = useState(initialTasks);
   
    const initialTaskState = {
        title: "",
        tags: "",
        assignee: {
          name: "",
          level: "junior",
        },
        isDone: false,
      } ;

        
  const [formData, setFormData] = useState(initialTaskState);

  const onAdd = async (e) => {
        e.preventDefault();
    
        const payload = {
          ...formData,
    
          tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
  
        };
   
        try {
          const response = await 
            fetch(API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            throw new Error("Failed to create task");
          }
    
          const createdTask = await response.json();
    
          setFormData(initialTaskState);
          setTasks(prevTasks=>[...prevTasks, createdTask])
    
        } catch (error) {
          console.log(error.message);
        }
      }

      const onDelete = async (id) => {
        try {
          const res = await fetch(`${API}/${id}`, { method: `DELETE` });
          if (!res.ok) throw new Error(`Failed to delete a selected task`);
    
          const deletedTask = await res.json();
          setTasks((prevState) =>
            prevState.filter((task) => task.id !== deletedTask.id),
          );
    
        } catch (error) {
          console.log(error.message);
        }
      };

      const onUpdate = async (task) => {
       
        try {
          const res = await fetch(`${API}/${task.id}`, {
            method: `PUT`,
            body: JSON.stringify(task),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!res.ok) throw new Error(`Failed update task`);
    
          const updatedTask = await res.json();
          setTasks((prevState) =>
            prevState.map((item) => {
              return item.id === updatedTask.id ? updatedTask : item;
            }),
          );
        } catch (error) {
          console.log(error.message);
        }
      };
    

  return (
    <>
    <TaskForm onAdd={onAdd} formData={formData} setFormData={setFormData}/>
    {tasks && <TaskList tasks={tasks} onDelete={onDelete} onUpdate={onUpdate}/> }
    </>
  )
}
