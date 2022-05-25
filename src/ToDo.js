
import React from 'react'

export default function ToDo({ todo, toggle }) {
    // When the list has been render to the page 
    // We handle the checkbox 

    function handleToDoClick() {
        toggle(todo.id)
    }


    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleToDoClick}/>
                {todo.name}
            </label>
        </div>
    )
}
