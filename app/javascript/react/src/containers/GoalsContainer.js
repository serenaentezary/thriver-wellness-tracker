import React, { Component } from 'react';
import GoalComponent from '../components/GoalComponent'

class GoalsContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     goalItem: '',
     goalsPayLoad: []
   }
   this.createGoalsPayLoad = this.createGoalsPayLoad.bind(this)
   this.handleSubmitGoals = this.handleSubmitGoals.bind(this)
   this.handleClearForm = this.handleClearForm.bind(this)
 }

 handleGoalItem(event) {
   this.setState({
     goalItem: event.target.value
   })
 }

 createGoalsPayLoad() {
   this.state.goalsPayLoad = {
     goalItem1: this.state.goalItem1,
     goalItem2: this.state.goalItem2,
     goalItem3: this.state.goalItem3,
     goalItem4: this.state.goalItem4,
     goalItem5: this.state.goalItem5,
   }
 }

 handleSubmitGoals(items) {
   event.preventDefault();
   fetch(`/api/v1/users/${this.props.currentUser.id}/goals`, {
     method: 'POST',
     body: goalItems
   })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      goalItem1: '',
      goalItem2: '',
      goalItem3: '',
      goalItem4: '',
      goalItem5: ''
    })
  }

 render() {
   let handleGoalsClick = () => { createGoalsPayLoad();
     handleSubmitGoals(this.state.goalsPayLoad) }

   return(
     <div>
       <GoalComponent
         content={this.state.entry}
         currentUser={this.props.currentUser}
         goalsClass={this.props.goalsClass}
      />
     </div>
   )
 }
}
export default GoalsContainer
