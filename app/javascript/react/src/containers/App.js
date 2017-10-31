import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import UserEmotionContainer from './UserEmotionContainer'


const App = props => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/user_emotions' component={UserEmotionContainer} />
      </div>
    </BrowserRouter>
  )
}

export default App
