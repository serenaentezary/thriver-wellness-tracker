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

     latestEntry: {},
     latestEntryId: '',
     latestJournalEntry: '',
     latestGoals: [],
     latestUserEmotions: [],

     randomArticle1: [],
     randomArticle2: [],
     randomArticle3: [],

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
     journalTabClass: 'content',

     goalsClass: '',
     goalsTabClass: 'content active',

     userEmotionsClass: 'hidden',
     userEmotionsTabClass: 'content',

     graphClass: ''
   }

   this.handleJournalChange = this.handleJournalChange.bind(this)
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

   this.tabClickGoalsIndex = this.tabClickGoalsIndex.bind(this)
   this.tabClickJournalIndex = this.tabClickJournalIndex.bind(this)
   this.tabClickUserEmotionsIndex = this.tabClickUserEmotionsIndex.bind(this)

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
   fetch(`/api/v1/users/${this.state.currentUser.id}/entries`, {
     credentials: 'same-origin',
     method: 'GET'
   })
   .then(response => response.json())
   .then(body => {
     let lastEntry = body.entries[0]
     this.setState({
       latestEntry: lastEntry,
       latestEntryId: lastEntry.id,
       latestJournalEntry: lastEntry.journals[0].journal_entry.slice(0, 140),
       latestGoals: lastEntry.goals[4].goal_item,
       latestUserEmotions: lastEntry.user_emotions[0].rating
      })
   })
   fetch(`/api/v1/link_caches/random_articles`, {
     credentials: 'same-origin',
     method: 'GET'
   })
   .then(response => response.json())
   .then(body => {
     this.setState({
       randomArticle1: [body.link_caches[0].link, body.link_caches[0].title],
       randomArticle2: [body.link_caches[1].link, body.link_caches[1].title],
       randomArticle3: [body.link_caches[2].link, body.link_caches[2].title]
     })
   })
 }


 handleJournalChange(event) {
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

 tabClickGoalsIndex() {
   this.setState({
     journalTabClass: "content",
     journalClass: "hidden",

     goalsTabClass: "content active",
     goalsClass: "",

     userEmotionsTabClass: "content",
     userEmotionsClass: "hidden"
   })
 }

 tabClickJournalIndex() {
   this.setState({
     journalTabClass: "content active",
     journalClass: "",

     goalsTabClass: "content",
     goalsClass: "hidden",

     userEmotionsTabClass: "content",
     userEmotionsClass: "hidden"
   })
 }

 tabClickUserEmotionsIndex() {
   this.setState({
     journalTabClass: "content",
     journalClass: "hidden",

     goalsTabClass: "content",
     goalsClass: "hidden",

     userEmotionsTabClass: "content active",
     userEmotionsClass: ""
   })
 }

 tabClickSubmitIndex() {
   this.setState({  journalTabClass: "content",
    journalClass: "hidden",

    goalsTabClass: "content",
    goalsClass: "hidden",

    userEmotionsTabClass: "content",
    userEmotionsClass: "hidden"
  })
 }

 hideGraph() {
   this.setState({ graphClass: 'hidden' })
 }

 render() {

   let handleEntryClick = () => { this.handleTotalEntrySubmit() }

   let latestEntryOnPage = () => { this.createLatestEntry() }

   let handleTabClickGoalsIndex = () => { this.tabClickGoalsIndex() }
   let handleTabClickJournalIndex = () => { this.tabClickJournalIndex() }
   let handleTabClickUserEmotionsIndex = () => { this.tabClickUserEmotionsIndex() }

   let journalContainer;
   let userEmotionContainer;
   let goalsContainer;
   let frontPageComponent;
   let graphContainer;
   let entriesContainer;
   let entryShowContainer;
   let hiddenId;

   if (this.state.currentUser) {
     journalContainer = <JournalContainer
       currentUser={this.state.currentUser}
       journalEntry={this.state.journalEntry}
       handleJournalChange={this.handleJournalChange}
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
      hiddenId = "hidden"
    }

    return(
      <div>
        <div className="row">
          <br />
         <div className="large-9 small-9 columns">
           <ul id={`${hiddenId}`} className="tabs" data-tab>
             <li className="tab-title" onClick={handleTabClickGoalsIndex}><a className="tab-item" href="#panel1">Set Goals</a></li>
             <li className="tab-title" onClick={handleTabClickJournalIndex}><a className="tab-item" href="#panel2">Journal</a></li>
             <li className="tab-title" onClick={handleTabClickUserEmotionsIndex}><a className="tab-item" href="#panel3">Rate Your Emotions</a></li>
             <li id="submit-entry-button" className="tab-title" onClick={handleEntryClick}><a href="#panel4">Submit Entry</a></li>
           </ul>
           {frontPageComponent}
           {userEmotionContainer}
           {goalsContainer}
           {journalContainer}
          </div>
        </div>
        <div className="row">
          <div className="large-5 small-5 columns">
            <h3 className="latest-entry-title">Latest Entry</h3>
            <div className="latest-entry"><a href={`/entries/${this.state.latestEntryId}`}>
              <h5 className="latest-entry-description">Click this box to see your last entry!</h5>
              <div className="latest-journal-entry">Journal: {this.state.latestJournalEntry}...</div><br />
              <p className="dashes">- - - - - - - - -</p>
              <div className="latest-goals-entry">Latest Goal: {this.state.latestGoals}</div>
            </a>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="large-8 columns">
              <h3 className="recent-articles-title">Recent Articles</h3>
              <div className="article-link"><a href={this.state.randomArticle1[0]}>{this.state.randomArticle1[1]}</a></div>
              <div className="article-link"><a href={this.state.randomArticle2[0]}>{this.state.randomArticle2[1]}</a></div>
              <div className="article-link"><a href={this.state.randomArticle3[0]}>{this.state.randomArticle3[1]}</a></div>
            </div>
          </div>
       {graphContainer}
     </div>
    )
  }
}
export default IndexContainer
