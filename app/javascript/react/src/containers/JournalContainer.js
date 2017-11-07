import React, { Component } from 'react';
import JournalComponent from '../components/JournalComponent'

class JournalContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
   }
 }

 render() {
   return(
     <div>
       <JournalComponent
         content={this.props.journalEntry}
         currentUser={this.props.currentUser}
         handleJournalChange={this.props.handleJournalChange}
         journalClass={this.props.journalClass}
      />
     </div>
   )
 }
}
export default JournalContainer
