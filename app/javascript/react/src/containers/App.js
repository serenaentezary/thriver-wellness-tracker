import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

const Header = props => {
  return(
    <h1>
      Thriver: A Mental Health Log
    </h1>
  )
}

const App = props => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
      </div>
    </BrowserRouter>
  )
}

export default App
