import React, { Component } from 'react';
import GoalsComponent from '../components/GoalsComponent'

class GoalsContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     goals: '',
     currentUser: this.props.currentUser
   }
   this.handleChangeGoals = this.handleChangeGoals.bind(this)
   this.handleStateGoals = this.handleStateGoals.bind(this)
   this.handleSubmitGoals = this.handleSubmitGoals.bind(this)
 }

 handleChangeGoals(event) {
   let newValue = event.target.value
   this.setState({ goals: newValue })
 }

 handleStateGoals(event) {
   this.setState({ goals: event.target.value })
 }

 handleClearForm(event) {
   event.preventDefault();
   this.setState({
     goals: ''
   })
 }

 addNewGoals(entryPayload) {
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
       <form className="goals" id="form">
         <GoalsComponent
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
export default GoalsContainer
