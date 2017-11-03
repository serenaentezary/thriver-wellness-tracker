import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import IndexContainer from './IndexContainer'


const App = props => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={IndexContainer} />
      </div>
    </BrowserRouter>
  )
}

export default App
