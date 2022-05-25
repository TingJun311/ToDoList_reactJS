
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

export default function Index() {
  return (
    <App />
  )
}

ReactDom.render(
  <Index />,
  document.querySelector("#root")
)
