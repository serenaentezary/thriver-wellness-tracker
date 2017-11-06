import React, { Component } from 'react'
import UserEmotionContainer from './UserEmotionContainer'
import JournalContainer from './JournalContainer'
import GoalsContainer from './GoalsContainer'
import EntryContainer from './EntryContainer'
import FrontPageComponent from '../components/FrontPageComponent'
import GraphContainer from './GraphContainer'

class IndexContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     selectedSection: null,
     currentUser: {},
     journalEntry: '',

     happiness: 50,
     sadness: 50,
     excitement: 50,
     anger: 50,
     anxiety: 50,
     peacefulness: 50,
     emotionsPayLoad: [],

     journalClass: 'banana',
     goalsClass: '',
     userEmotionsClass: 'banana'
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

   this.showJournal = this.showJournal.bind(this)
   this.showGoals = this.showGoals.bind(this)
   this.showEmotions = this.showEmotions.bind(this)

 }

 componentDidMount() {
   fetch('/api/v1/user/is_signed_in.json', {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => response.json())
   .then(body => {
     this.setState({ currentUser: body.user })
   })
 }

 // toggleSectionSelected(id) {
 //   if (id === this.state.selectedSection) {
 //     this.setState({ selectedSection: null })
 //   } else {
 //     this.setState({ selectedSection: id })
 //   }
 // }

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

 createEmotionsPayLoad() {
   this.state.emotionsPayLoad = {
     happiness: this.state.happiness,
     sadness: this.state.sadness,
     excitement: this.state.excitement,
     anger: this.state.anger,
     anxiety: this.state.anxiety,
     peacefulness: this.state.peacefulness
   }
 }

 handleTotalEntrySubmit() {
   event.preventDefault();

   fetch(`/api/v1/users/${this.state.currentUser.id}/journals`, {
     method: 'POST',
     body: this.state.journalEntry
   })
   this.createEmotionsPayLoad()
   fetch(`/api/v1/users/${this.state.currentUser.id}/user_emotions`, {
     method: 'POST',
     body: JSON.stringify(this.state.emotionsPayLoad)
   })
 }

 showJournal() {
   this.setState({ journalClass: '', goalsClass: 'banana', userEmotionsClass: 'banana' })
 }

 showGoals() {
  this.setState({ journalClass: 'banana', goalsClass: '', userEmotionsClass: 'banana' })
 }

 showEmotions() {
   this.setState({ journalClass: 'banana' })
   this.setState({ goalsClass: 'banana' })
   this.setState({ userEmotionsClass: '' })
 }

 render() {
   let handleEntryClick = () => { this.handleTotalEntrySubmit() }

   let journalContainer;
   let userEmotionContainer;
   let goalsContainer;
   let frontPageComponent;
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
          <div className="large-3 small-3 columns">
            <h3>Latest Entry</h3>
          </div>
       </div>
       <GraphContainer
         currentUser={this.state.currentUser}
       />
     </div>
    )
  }
}
export default IndexContainer
