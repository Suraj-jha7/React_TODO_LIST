import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
    <div>
      { <h4>
        {todo.title}
      </h4> }
      <p>
        {todo.Desc}
      </p>
      
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr></hr>
    </div>
    </div>
  )
}



