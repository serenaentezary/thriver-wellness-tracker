import React, { Component } from 'react';

class EntryShowContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     entry: [],
     journal: '',
     userEmotions: [],
     goals: []
   }

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
       entry: body.entry,
       journal: body.entry.journals[0].journal_entry,
       userEmotions: body.entry.user_emotions,
       goals: body.entry.goals
     })
   })
 }

 render() {
   debugger;
   let ratings = this.state.userEmotions.map(userEmotion => {
     return(
       <ul>
         <li key={userEmotion.id}>{userEmotion.rating}</li>
       </ul>
     )
   })

   let goalItems = this.state.goals.map(goal => {
     return(
       <ul>
         <li key={goal.id}>{goal.goal_item}</li>
       </ul>
     )
   })

   return(
     <div>

       <li>{this.state.entry.created_at}</li>
       <li>{this.state.journal}</li>
       <li>{ratings}</li>
       <li>{goalItems}</li>

     </div>
   )
  }
}
export default EntryShowContainer
