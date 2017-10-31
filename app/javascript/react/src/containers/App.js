import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import UserEmotionContainer from './UserEmotionContainer'
import IndexContainer from './IndexContainer'
import JournalContainer from './JournalContainer'

const App = props => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={IndexContainer} />
        <Route exact path="/journals" component={JournalContainer} />
        <Route exact path='/user_emotions' component={UserEmotionContainer} />
      </div>
    </BrowserRouter>
  )
}

export default App
