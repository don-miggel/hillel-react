import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks=[], onUpdate, onDelete}) {
  return (
    <ul>
      {  tasks.map((task) =>(
        <TaskItem key = {task.id} task = {task} 
        onUpdate={(updatedTask)=>onUpdate(updatedTask)}
        onDelete={()=>onDelete(task.id)} />
      ))
      }
    </ul>
  )
}
