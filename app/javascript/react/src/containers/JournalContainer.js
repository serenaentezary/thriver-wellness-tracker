import React, { Component } from 'react';
import JournalComponent from '../components/JournalComponent'

class JournalContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     entry: '',
   }
   this.handleChange = this.handleChange.bind(this)
   this.handleState = this.handleState.bind(this)
   this.handleSubmitJournal = this.handleSubmitJournal.bind(this)
 }

 handleChange(event) {
   let newValue = event.target.value
   this.setState({ entry: newValue })
 }

 handleState(event) {
   this.setState({ entry: event.target.value })
 }

 handleClearForm() {
   this.setState({
     entry: ''
   })
 }

 handleSubmitJournal(journalEntry) {
   event.preventDefault();
   fetch(`/api/v1/users/${this.props.currentUser.id}/journals`, {
     method: 'POST',
     body: journalEntry
   })
   this.handleClearForm()
  }

 render() {
   let handleClick = () => { this.handleSubmitJournal(this.state.entry) }

   return(
     <div>
       <JournalComponent
         content={this.state.entry}
         currentUser={this.state.currentUser}
         handleChange={this.handleChange}
         handleState={this.handleState}
         handleSubmitJournal={this.handleSubmitJournal}
         handleClick={handleClick}
      />
     </div>
   )
 }
}
export default JournalContainer
