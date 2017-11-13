import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import IndexContainer from './IndexContainer'
import EntriesContainer from './EntriesContainer'
import EntryShowContainer from './EntryShowContainer'
import JournalsIndexContainer from './JournalsIndexContainer'


const App = props => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={IndexContainer} />
        <Route exact path='/entries' component={EntriesContainer}/>
        <Route exact path='/entries/:id' component={EntryShowContainer}/>
        <Route exact path='/journals' component={JournalsIndexContainer}/>
        
      </div>
    </BrowserRouter>
  )
}

export default App
