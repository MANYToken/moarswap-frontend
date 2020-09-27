import React from 'react'
import ReactDOM from 'react-dom'
import initReactFastclick from 'react-fastclick'
import App from './App'
import './index.css'

initReactFastclick()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
