import React, { Component } from 'react';
import JournalComponent from '../components/JournalComponent'

class JournalContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     entry: '',
     currentUser: this.props.currentUser
   }
   this.handleChange = this.handleChange.bind(this)
   this.handleState = this.handleState.bind(this)
   this.handleSubmitJournal = this.handleSubmitJournal.bind(this)
 }

 handleChange(event) {
   let formField = event.target.name
   let newValue = event.target.value
   this.setState({ entry: newValue })
 }

 handleState(event) {
   this.setState({ state: event.target.value })
 }

 handleClearForm(event) {
   event.preventDefault();
   this.setState({
     entry: ''
   })
 }

 addNewJournal(entryPayload) {
   fetch(`/api/v1/journals`, {
    method: 'POST',
    body: JSON.stringify(entryPayLoad)
  })
  .then(response => response.json())
  .then(responseData =>{
    this.setState({ entry: responseData.journals })
  })
 }

 handleSubmitJournal(event) {
   event.preventDefault();
   let entryPayload = {
     entry: this.state.entry,
     currentUser: this.currentUser.id
   }
 }

 render() {

   return(
     <div>
       <form className="journal" id="form">
         <JournalComponent
           content={this.state.entry}
           currentUser={this.state.currentUser}
           handleChange={this.handleChange}
           handleState={this.handleState}
           handleSubmitJournal={this.handleSubmitJournal}
        />
      </form>
     </div>
   )
 }
}
export default JournalContainer
