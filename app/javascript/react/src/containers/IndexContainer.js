import React, { Component } from 'react'
import UserEmotionContainer from './UserEmotionContainer'
import JournalContainer from './JournalContainer'
import GoalsContainer from './GoalsContainer'
import FrontPageComponent from '../components/FrontPageComponent'
import GraphContainer from './GraphContainer'
import EntriesContainer from './EntriesContainer'
import EntryShowContainer from './EntryShowContainer'

class IndexContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     currentUser: {},
     entry_id: '',

     journalEntry: '',

     happiness: 50,
     sadness: 50,
     excitement: 50,
     anger: 50,
     anxiety: 50,
     peacefulness: 50,
     emotionsPayLoad: [],

     goalItem1: '',
     goalItem2: '',
     goalItem3: '',
     goalItem4: '',
     goalItem5: '',
     goalsPayLoad: [],

     entryPayLoad: {},

     journalClass: 'hidden',
     goalsClass: '',
     userEmotionsClass: 'hidden',
     graphClass: ''
   }
   this.handleJournalChange = this.handleJournalChange.bind(this)
   this.handleJournalState = this.handleJournalState.bind(this)
   this.handleClearJournalForm = this.handleClearJournalForm.bind(this)
   this.handleTotalEntrySubmit = this.handleTotalEntrySubmit.bind(this)

   this.createEmotionsPayLoad = this.createEmotionsPayLoad.bind(this)
   this.handleSliderHappiness = this.handleSliderHappiness.bind(this)
   this.handleSliderSadness = this.handleSliderSadness.bind(this)
   this.handleSliderExcitement = this.handleSliderExcitement.bind(this)
   this.handleSliderAnger = this.handleSliderAnger.bind(this)
   this.handleSliderAnxiety = this.handleSliderAnxiety.bind(this)
   this.handleSliderPeacefulness = this.handleSliderPeacefulness.bind(this)

   this.handleGoal1Change = this.handleGoal1Change.bind(this)
   this.handleGoal2Change = this.handleGoal2Change.bind(this)
   this.handleGoal3Change = this.handleGoal3Change.bind(this)
   this.handleGoal4Change = this.handleGoal4Change.bind(this)
   this.handleGoal5Change = this.handleGoal5Change.bind(this)
   this.createGoalsPayLoad = this.createGoalsPayLoad.bind(this)

   this.createEntriesPayLoad = this.createEntriesPayLoad.bind(this)

   this.showJournal = this.showJournal.bind(this)
   this.showGoals = this.showGoals.bind(this)
   this.showEmotions = this.showEmotions.bind(this)
   this.hideGraph = this.hideGraph.bind(this)
 }

 componentDidMount() {
   fetch('/api/v1/users/is_signed_in', {
     credentials: 'same-origin',
     method: 'GET'
   })
   .then(response => response.json())
   .then(body => {
     this.setState({ currentUser: body.user })
   })
 }

 handleJournalChange(event) {
   let newValue = event.target.value
   this.setState({ journalEntry: newValue })
 }

 handleJournalState(event) {
   this.setState({ journalEntry: event.target.value })
 }

 handleClearJournalForm() {
   this.setState({
     journalEntry: ''
   })
 }

 handleSliderHappiness(event) {
   this.setState({ happiness: event.target.value })
 }

 handleSliderSadness(event) {
   this.setState({ sadness: event.target.value })
 }

 handleSliderExcitement(event) {
   this.setState({ excitement: event.target.value })
 }

 handleSliderAnger(event) {
   this.setState({ anger: event.target.value })
 }

 handleSliderAnxiety(event) {
   this.setState({ anxiety: event.target.value })
 }

 handleSliderPeacefulness(event) {
   this.setState({ peacefulness: event.target.value })
 }

 createEmotionsPayLoad(data) {
   this.state.emotionsPayLoad = {
     happiness: this.state.happiness,
     sadness: this.state.sadness,
     excitement: this.state.excitement,
     anger: this.state.anger,
     anxiety: this.state.anxiety,
     peacefulness: this.state.peacefulness,
   }
 }

 handleGoal1Change(event) {
   this.setState({ goalItem1: event.target.value })
 }

 handleGoal2Change(event) {
   this.setState({ goalItem2: event.target.value })
 }

 handleGoal3Change(event) {
   this.setState({ goalItem3: event.target.value })
 }

 handleGoal4Change(event) {
   this.setState({ goalItem4: event.target.value })
 }

 handleGoal5Change(event) {
   this.setState({ goalItem5: event.target.value })
 }

 createGoalsPayLoad() {
   this.state.goalsPayLoad = {
     goalItem1: this.state.goalItem1,
     goalItem2: this.state.goalItem2,
     goalItem3: this.state.goalItem3,
     goalItem4: this.state.goalItem4,
     goalItem5: this.state.goalItem5
   }
 }

 createEntriesPayLoad() {
   this.createEmotionsPayLoad()
   this.createGoalsPayLoad()

   this.state.entryPayLoad = {
     currentUser: this.state.currentUser,

     goalsPayLoad: this.state.goalsPayLoad,

     journalEntry: this.state.journalEntry,

     emotionsPayLoad: this.state.emotionsPayLoad
   }
 }

 handleTotalEntrySubmit() {
   event.preventDefault();
   this.createEntriesPayLoad()
   fetch(`/api/v1/users/${this.state.currentUser.id}/entries`, {
     method: 'POST',
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(this.state.entryPayLoad)
   })
 }

 showJournal() {
   this.setState({ journalClass: '', goalsClass: 'hidden', userEmotionsClass: 'hidden' })
 }

 showGoals() {
  this.setState({ journalClass: 'hidden', goalsClass: '', userEmotionsClass: 'hidden' })
 }

 showEmotions() {
   this.setState({ journalClass: 'hidden', goalsClass: 'hidden', userEmotionsClass: '' })
 }

 hideGraph() {
   this.setState({ graphClass: 'hidden' })
 }

 render() {
   let handleEntryClick = () => { this.handleTotalEntrySubmit() }

   let journalContainer;
   let userEmotionContainer;
   let goalsContainer;
   let frontPageComponent;
   let graphContainer;
   let entriesContainer;
   let entryShowContainer;
   if (this.state.currentUser) {
     journalContainer = <JournalContainer
       currentUser={this.state.currentUser}
       journalEntry={this.state.journalEntry}
       handleJournalChange={this.handleJournalChange}
       handleJournalState={this.handleJournalState}
       handleClearJournalForm={this.handleClearJournalForm}
       journalClass={this.state.journalClass}
      />

     userEmotionContainer = <UserEmotionContainer
       currentUser={this.state.currentUser}
       handleSliderHappiness={this.handleSliderHappiness}
       handleSliderSadness={this.handleSliderSadness}
       handleSliderExcitement={this.handleSliderExcitement}
       handleSliderAnger={this.handleSliderAnger}
       handleSliderAnxiety={this.handleSliderAnxiety}
       handleSliderPeacefulness={this.handleSliderPeacefulness}
       createEmotionsPayLoad={this.createEmotionsPayLoad}
       happiness={this.state.happiness}
       sadness={this.state.sadness}
       excitement={this.state.excitement}
       anger={this.state.anger}
       anxiety={this.state.anxiety}
       peacefulness={this.state.peacefulness}
       userEmotionsClass={this.state.userEmotionsClass}
     />

     goalsContainer = <GoalsContainer
       currentUser={this.state.currentUser}
       goalsClass={this.state.goalsClass}
       goalItem1={this.state.goalItem1}
       goalItem2={this.state.goalItem2}
       goalItem3={this.state.goalItem3}
       goalItem4={this.state.goalItem4}
       goalItem5={this.state.goalItem5}
       handleGoal1Change={this.handleGoal1Change}
       handleGoal2Change={this.handleGoal2Change}
       handleGoal3Change={this.handleGoal3Change}
       handleGoal4Change={this.handleGoal4Change}
       handleGoal5Change={this.handleGoal5Change}
     />

     graphContainer = <GraphContainer
       currentUser={this.state.currentUser}
       graphClass={this.state.graphClass}
       hideGraph={this.hideGraph}
     />

     entriesContainer = <EntriesContainer
       currentUser={this.state.currentUser}
     />

     entryShowContainer = <EntryShowContainer
       currentUser={this.state.currentUser}
     />

    } else {
      frontPageComponent = <FrontPageComponent />
    }
    let buttons = [["Set Daily Goals", this.showGoals], ["Challenges", this.showJournal], ["Journal", this.showJournal], ["Rate Your Emotions", this.showEmotions]]
    let sectionButtons = buttons.map(button => {
      return(
        <div key={button[0]}>
          <div className="row">
            <button type="button" className="large-12 columns side-buttons" onClick={button[1]}>{button[0]}</button>
          </div>
          <br />
        </div>
      )
    })
    return(
      <div>
        <div className="row">
          <br />
         <div className="small-2 large-2 columns side-buttons">
           {sectionButtons}
         </div>
         <div className="large-7 small-7 columns">
           {frontPageComponent}
           {userEmotionContainer}
           {goalsContainer}
           {journalContainer}
           <button type="button" onClick={handleEntryClick}>Submit Entry</button>
          </div>
          <div className="large-2 small-2 columns">
            <h3>Latest Entry</h3>
          </div>
       </div>
       {graphContainer}
     </div>
    )
  }
}
export default IndexContainer
