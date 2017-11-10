import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import JournalContainer from './JournalContainer'
import GoalsContainer from './GoalsContainer'
import GraphContainer from './GraphContainer'
import EntryShowContainer from './EntryShowContainer'

class EntryEditContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     oldEntry: [],
     oldJournal: '',
     oldUserEmotions: [],
     oldGoals: []
   }
   this.handleEntryUpdateSubmit = this.handleEntryUpdateSubmit.bind(this)
 }

 componentDidMount() {
   fetch(`/api/v1/users/${this.props.currentUser}/entries/${this.props.match.params.id}`, {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => response.json())
   .then(body => {
     this.setState({
       oldEntry: body.entry,
       oldJournal: body.entry.journals[0].journal_entry,
       oldUserEmotions: body.entry.user_emotions,
       oldGoals: body.entry.goals
     })
   })
 }

 

 handleEntryUpdateSubmit() {
   event.preventDefault();
   this.createEntriesPayLoad()
   fetch(`/api/v1/users/${this.state.currentUser.id}/entries`, {
     method: 'PATCH',
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(this.state.entryPayLoad)
   })
 }

 render() {
   let ratings = this.state.oldUserEmotions.map(userEmotion => {
     return(
       <ul>
         <li key={userEmotion.id}>{userEmotion.rating}</li>
       </ul>
     )
   })

   let goalItems = this.state.oldGoals.map(goal => {
     return(
       <ul>
         <li key={goal.id}>{goal.goal_item}</li>
       </ul>
     )
   })

   return(
     <div>

     </div>
   )
  }
}
export default EntryEditContainer
