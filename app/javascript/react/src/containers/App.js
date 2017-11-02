import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import UserEmotionContainer from './UserEmotionContainer'
import IndexContainer from './IndexContainer'
import JournalContainer from './JournalContainer'

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
