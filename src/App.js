
import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
const {v4 : uuidv4} = require('uuid') // for generating random id 

const LOCAL_STORAGE_KEY = 'todoApp.todos'


export default function App() {
  const [todos, setTodos] = useState([])
  // List of empty array got todo list 

  const userInput = useRef();
  // Get user input 

  useEffect(() => {
    // the list will only store in your local storage
    // ANd render to the page only if item list exist

    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos)
      setTodos(storedTodos)
  }, [])

  useEffect(() => {
    // Set the list to the local storage if todos have list 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    // Allow user to tick todo list
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddToDo(e) {
    // To allow user add todo list to the storage
    const title = userInput.current.value
    if (title === '') return
    userInput.current.value = null;
    
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuidv4(),
        name: title,
        complete: false
      }]
    })
  }                
  
  function handleClearTodos() {
    // Allows user to clear the completed list
    const newTodos = todos.filter(
      todo => !todo.complete
    )
    setTodos(newTodos)
  }

  return (
    // Return JSX component
    <>      
      <TodoList todoList = {todos} toggle = {toggleTodo}/>
      <input ref={userInput} type="text"></input>
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>
        {todos.filter(todo => !todo.complete).length} left to do
      </div>
    </>
  )
}













