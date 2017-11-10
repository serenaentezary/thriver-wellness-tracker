import React, { Component } from 'react';
import GoalComponent from '../components/GoalComponent'

class GoalsContainer extends Component {
   constructor(props) {
     super(props);
     this.state = {

     }
     // this.handleClearForm = this.handleClearForm.bind(this)

   }

   render() {

     return(
       <div className="goals-entry">
         <GoalComponent
           goalItem1={this.props.goalItem1}
           goalItem2={this.props.goalItem2}
           goalItem3={this.props.goalItem3}
           goalItem4={this.props.goalItem4}
           goalItem5={this.props.goalItem5}
           handleGoal1Change={this.props.handleGoal1Change}
           handleGoal2Change={this.props.handleGoal2Change}
           handleGoal3Change={this.props.handleGoal3Change}
           handleGoal4Change={this.props.handleGoal4Change}
           handleGoal5Change={this.props.handleGoal5Change}
           currentUser={this.props.currentUser}
           goalsClass={this.props.goalsClass}
         />
      </div>
    )
  }
}
export default GoalsContainer
