import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import JournalContainer from './JournalContainer'

class EntryContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     currentUser: [],
     totalEntry: []
   }
 }

 componentDidMount() {
   fetch('/api/v1/users/is_signed_in.json', {
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

   return(
     <div>
       <JournalContainer
         currentUser={this.state.currentUser}
       />
       <UserEmotionContainer
         currentUser={this.state.currentUser}
       />
     </div>
   )
 }
}
export default EntryContainer
