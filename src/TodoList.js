
import React from 'react'
import ToDo from './ToDo'

export default function TodoList({ todoList, toggle }) {
    //  Each list has a specific id  
    return (
        todoList.map(todo => {
            return <ToDo key={todo.id} todo = {todo}  toggle = {toggle}/>
        })
    )
}


