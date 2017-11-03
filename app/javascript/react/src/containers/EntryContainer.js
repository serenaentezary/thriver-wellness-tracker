import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import JournalContainer from './JournalContainer'
import GoalsContainer from './GoalsContainer'

class EntryContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     currentUser: {},
     totalEntry: []
   }
 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in.json', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => response.json())
   .then(body => {
     this.setState({ currentUser: body.user })
   })
 }

 render() {
   let journalContainer;
   let userEmotionContainer;
   let goalsContainer;
   if (this.state.currentUser) {
     journalContainer = <JournalContainer
        currentUser={this.state.currentUser}
      />
      userEmotionContainer = <UserEmotionContainer
         currentUser={this.state.currentUser}
       />
      goalsContainer = <GoalsContainer
        currentUser={this.state.currentUser}
      />
    }
   return(
     <div>
       <div className="row">
         <br />
         <div className="small-2 columns">
           <div className="row">
             <button type="button">Set Daily Goals</button>
           </div>
           <div className="row">
             <button type="button">Daily Challenges</button>
           </div>
           <div className="row">
             <button className="small-12 columns" type="button">Journal</button>
           </div>
           <div className="row">
             <button type="button">Rate Your Emotions</button>
           </div>
         </div>
         <div className="small-7 columns">
           {journalContainer}
          </div>
          <div className="small-3 columns">
            Latest Entry
          </div>
       </div>
        {userEmotionContainer}
        {goalsContainer}
     </div>
   )
 }
}
export default EntryContainer
