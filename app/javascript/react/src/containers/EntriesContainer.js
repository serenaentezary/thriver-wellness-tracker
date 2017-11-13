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
       <div className="row">
         <div className="large-8 columns">
           <ul key={entry.id} className="entry-container-list">
             <a className="link-to-entry" href={`/entries/${entry.id}`}>See or Edit Entry</a>
             <p key={entry.id}>{entry.created_at}</p>

             <ul className="goals-entries-index">
               <p>Goals:</p>
               <li key={entry.goals[0].goal_item}>{entry.goals[0].goal_item}</li>
               <li key={entry.goals[1].goal_item}>{entry.goals[1].goal_item}</li>
               <li key={entry.goals[2].goal_item}>{entry.goals[2].goal_item}</li>
               <li key={entry.goals[3].goal_item}>{entry.goals[3].goal_item}</li>
               <li key={entry.goals[4].goal_item}>{entry.goals[4].goal_item}</li>
             </ul>
             <p className="journals-entries-index" key={entry.journals[0].id}>Journal: <br /><br />{entry.journals[0].journal_entry}</p>
             <ul>
               <p>Emotion Ratings:</p>
               <li key={entry.user_emotions[0].id}>{entry.user_emotions[0].feeling}, {entry.user_emotions[0].rating}</li>
               <li key={entry.user_emotions[1].id}>{entry.user_emotions[1].feeling}, {entry.user_emotions[1].rating}</li>
               <li key={entry.user_emotions[2].id}>{entry.user_emotions[2].feeling}, {entry.user_emotions[2].rating}</li>
               <li key={entry.user_emotions[3].id}>{entry.user_emotions[3].feeling}, {entry.user_emotions[3].rating}</li>
               <li key={entry.user_emotions[4].id}>{entry.user_emotions[4].feeling}, {entry.user_emotions[4].rating}</li>
               <li key={entry.user_emotions[5].id}>{entry.user_emotions[5].feeling}, {entry.user_emotions[5].rating}</li>
            </ul>
          </ul>
       </div>
     </div>
     )
   })

   return(
     <div>
       <h1 className="past-entries">Past Entries</h1>
       <h3 className="past-entries-explanation">Look back on how you've changed over time, and you can see or edit a specific entry!</h3><br />
       {entries}
     </div>
   )
  }
}
export default EntriesContainer
