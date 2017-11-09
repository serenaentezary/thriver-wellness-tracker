import React, { Component } from 'react';

class EntriesContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     totalEntries: []
   }

 }

 componentDidMount() {
   fetch(`/api/v1/users/${this.props.currentUser}/entries`, {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => response.json())
   .then(body => {
     this.setState({
       totalEntries: body.entries
     })
   })
 }

 render() {
   let entries = this.state.totalEntries.map(entry => {
     return(
       <div>
         <ul>
           <li key={entry.id}>{entry.created_at}</li>

           <li key={entry.journals[0].id}>{entry.journals[0].journal_entry.slice(0, 30)}</li>
           <ul>
             <li key={entry.goals[0].id}>{entry.goals[0].goal_item}</li>
             <li key={entry.goals[1].id}>{entry.goals[1].goal_item}</li>
             <li key={entry.goals[2].id}>{entry.goals[2].goal_item}</li>
             <li key={entry.goals[3].id}>{entry.goals[3].goal_item}</li>
             <li key={entry.goals[4].id}>{entry.goals[4].goal_item}</li>
           </ul>
           <ul>
             <li key={entry.user_emotions[0].id}>{entry.user_emotions[0].feeling}, {entry.user_emotions[0].rating}</li>
             <li key={entry.user_emotions[1].id}>{entry.user_emotions[1].feeling}, {entry.user_emotions[1].rating}</li>
             <li key={entry.user_emotions[2].id}>{entry.user_emotions[2].feeling}, {entry.user_emotions[2].rating}</li>
             <li key={entry.user_emotions[3].id}>{entry.user_emotions[3].feeling}, {entry.user_emotions[3].rating}</li>
             <li key={entry.user_emotions[4].id}>{entry.user_emotions[4].feeling}, {entry.user_emotions[4].rating}</li>
             <li key={entry.user_emotions[5].id}>{entry.user_emotions[5].feeling}, {entry.user_emotions[5].rating}</li>
          </ul>
         </ul>
         <a href={`/entries/${entry.id}`}>See Entry</a>
       </div>
     )
   })

   return(
     <div>
       {entries}
     </div>
   )
  }
}
export default EntriesContainer
