import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { globalStyles } from './styles/global';

globalStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
