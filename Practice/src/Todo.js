import React from 'react'
import Todo from './Todo'

export default function Todo( { todos }) {
  return (
    <div>
        <label>
            <input type="checkbox" checked={todos.complete} />
            {todo.name}
        </label>
    </div>
  )
}
