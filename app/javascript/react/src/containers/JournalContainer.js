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
   let newValue = event.target.value
   this.setState({ entry: newValue })
 }

 handleState(event) {
   this.setState({ entry: event.target.value })
   console.log(this.state.entry)
 }

 handleClearForm(event) {
   event.preventDefault();
   this.setState({
     entry: ''
   })
 }

 addNewJournal(entryPayload) {
    fetch('/api/v1/journals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entry: this.state.entry,
        currentUser: this.state.currentUser
      })
    })
     .then(response => response.json())
     .then(responseData =>{
       this.setState({ entry: responseData.entry })
     })
   }

 //   fetch('/api/v1/journals', {
 //    method: 'POST',
 //    body: JSON.stringify(entryPayLoad)
 //  })


 handleSubmitJournal(event) {
   event.preventDefault();
   let entryPayload = {
     entry: this.state.entry,
     currentUser: this.state.currentUser
   }
 }

 render() {

   return(
     <div>
       <JournalComponent
         content={this.state.entry}
         currentUser={this.state.currentUser}
         handleChange={this.handleChange}
         handleState={this.handleState}
         handleSubmitJournal={this.handleSubmitJournal}
      />
     </div>
   )
 }
}
export default JournalContainer
