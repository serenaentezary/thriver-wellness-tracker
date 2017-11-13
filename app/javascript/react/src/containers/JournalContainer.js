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
     <div className="journal-entry-page">
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
