import React from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

export default function TaskList({tasks=[], onUpdate, onDelete}) {
  return (
    <ul className="task-list">
      {  tasks.map((task) =>(
        <TaskItem key = {task.id} task = {task} 
        onUpdate={(updatedTask)=>onUpdate(updatedTask)}
        onDelete={()=>onDelete(task.id)} />
      ))
      }
    </ul>
  )
}
