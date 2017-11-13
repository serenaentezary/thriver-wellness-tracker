import React, { Component } from 'react';

class EntryShowContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     entry: [],
     userId: '',

     journal: '',

     happiness: '',
     sadness: '',
     excitement: '',
     anger: '',
     anxiety: '',
     peacefulness: '',
     updatedEmotionsPayLoad: {},

     goal1: '',
     goal2: '',
     goal3: '',
     goal4: '',
     goal5: '',
     updatedGoalsPayLoad: {},

     goalsClass: '',
     journalClass: 'hidden',
     userEmotionsClass: 'hidden',

     updatedEntryPayLoad: {},

     goalsTabClass: "content active",
     journalTabClass: "content",
     userEmotionsTabClass: "content"

   }
   this.handleEntryUpdateSubmit = this.handleEntryUpdateSubmit.bind(this)

   this.handleUpdatedJournalChange = this.handleUpdatedJournalChange.bind(this)

   this.handleSliderUpdatedHappiness = this.handleSliderUpdatedHappiness.bind(this)
   this.handleSliderUpdatedSadness = this.handleSliderUpdatedSadness.bind(this)
   this.handleSliderUpdatedExcitement = this.handleSliderUpdatedExcitement.bind(this)
   this.handleSliderUpdatedAnger = this.handleSliderUpdatedAnger.bind(this)
   this.handleSliderUpdatedAnxiety = this.handleSliderUpdatedAnxiety.bind(this)
   this.handleSliderUpdatedPeacefulness = this.handleSliderUpdatedPeacefulness.bind(this)
   this.createUpdatedEmotionsPayLoad = this.createUpdatedEmotionsPayLoad.bind(this)

   this.handleUpdateGoal1Change = this.handleUpdateGoal1Change.bind(this)
   this.handleUpdateGoal2Change = this.handleUpdateGoal2Change.bind(this)
   this.handleUpdateGoal3Change = this.handleUpdateGoal3Change.bind(this)
   this.handleUpdateGoal4Change = this.handleUpdateGoal4Change.bind(this)
   this.handleUpdateGoal5Change = this.handleUpdateGoal5Change.bind(this)
   this.createUpdatedGoalsPayLoad = this.createUpdatedGoalsPayLoad.bind(this)

   this.createUpdatedEntryPayLoad = this.createUpdatedEntryPayLoad.bind(this)

   this.tabClickGoals = this.tabClickGoals.bind(this)
   this.tabClickJournal = this.tabClickJournal.bind(this)
   this.tabClickUserEmotions = this.tabClickUserEmotions.bind(this)

 }

 componentDidMount() {
   fetch(`/api/v1/users/${this.props.currentUser}/entries/${this.props.match.params.id}`, {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => response.json())
   .then(body => {
     this.setState({
       entry: body.entry,
       userId: body.entry.user_id,

       journal: body.entry.journals[0].journal_entry,

       happiness: body.entry.user_emotions[0].rating,
       sadness: body.entry.user_emotions[1].rating,
       excitement: body.entry.user_emotions[2].rating,
       anger: body.entry.user_emotions[3].rating,
       anxiety: body.entry.user_emotions[4].rating,
       peacefulness: body.entry.user_emotions[5].rating,

       goal1: body.entry.goals[0].goal_item,
       goal2: body.entry.goals[1].goal_item,
       goal3: body.entry.goals[2].goal_item,
       goal4: body.entry.goals[3].goal_item,
       goal5: body.entry.goals[4].goal_item
     })
   })
 }

 handleUpdatedJournalChange(event) {
   this.setState({ journal: event.target.value })
 }

 handleSliderUpdatedHappiness(event) {
   this.setState({ happiness: event.target.value })
 }

 handleSliderUpdatedSadness(event) {
   this.setState({ sadness: event.target.value })
 }

 handleSliderUpdatedExcitement(event) {
   this.setState({ excitement: event.target.value })
 }

 handleSliderUpdatedAnger(event) {
   this.setState({ anger: event.target.value })
 }

 handleSliderUpdatedAnxiety(event) {
   this.setState({ anxiety: event.target.value })
 }

 handleSliderUpdatedPeacefulness(event) {
   this.setState({ peacefulness: event.target.value })
 }

 createUpdatedEmotionsPayLoad(data) {
   this.state.updatedEmotionsPayLoad = {
     happiness: this.state.happiness,
     sadness: this.state.sadness,
     excitement: this.state.excitement,
     anger: this.state.anger,
     anxiety: this.state.anxiety,
     peacefulness: this.state.peacefulness,
   }
 }

 handleUpdateGoal1Change(event) {
   this.setState({ goal1: event.target.value })
 }

 handleUpdateGoal2Change(event) {
   this.setState({ goal2: event.target.value })
 }

 handleUpdateGoal3Change(event) {
   this.setState({ goal3: event.target.value })
 }

 handleUpdateGoal4Change(event) {
   this.setState({ goal4: event.target.value })
 }

 handleUpdateGoal5Change(event) {
   this.setState({ goal5: event.target.value })
 }

 createUpdatedGoalsPayLoad() {
   this.state.updatedGoalsPayLoad = {
     goal1: this.state.goal1,
     goal2: this.state.goal2,
     goal3: this.state.goal3,
     goal4: this.state.goal4,
     goal: this.state.goal5
   }
 }

 createUpdatedEntryPayLoad() {
   this.createUpdatedEmotionsPayLoad()
   this.createUpdatedGoalsPayLoad()

   this.state.updatedEntryPayLoad = {
     userId: this.state.userId,

     updatedGoalsPayLoad: this.state.updatedGoalsPayLoad,

     journal: this.state.journal,

     updatedEmotionsPayLoad: this.state.updatedEmotionsPayLoad
   }
 }

 handleEntryUpdateSubmit() {
   event.preventDefault();
   this.createUpdatedEntryPayLoad()
   fetch(`/api/v1/users/${this.state.userId}/entries/${this.state.entry.id}`, {
     method: 'PATCH',
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(this.state.updatedEntryPayLoad)
   })
   .then(response => { return response.json() })
   .then(data => { console.log(data)} )
 }

 tabClickGoals() {
   this.setState({
     journalTabClass: "content",
     journalClass: "hidden",

     goalsTabClass: "content active",
     goalsClass: "",

     userEmotionsTabClass: "content",
     userEmotionsClass: "hidden"
   })
 }

 tabClickJournal() {
   this.setState({
     journalTabClass: "content active",
     journalClass: "",

     goalsTabClass: "content",
     goalsClass: "hidden",

     userEmotionsTabClass: "content",
     userEmotionsClass: "hidden"
   })
 }

 tabClickUserEmotions() {
   this.setState({
     journalTabClass: "content",
     journalClass: "hidden",

     goalsTabClass: "content",
     goalsClass: "hidden",

     userEmotionsTabClass: "content active",
     userEmotionsClass: ""
   })
 }

 render() {
   let handleEntryUpdateClick = () => { this.handleEntryUpdateSubmit() }
   let handleTabClickGoals = () => { this.tabClickGoals() }
   let handleTabClickJournal = () => { this.tabClickJournal() }
   let handleTabClickUserEmotions = () => { this.tabClickUserEmotions() }

   let arrayOfUserEmotionRatingsAndMethods = [
     ["Happy", this.state.happiness, this.handleSliderUpdatedHappiness],
     ["Sad", this.state.sadness, this.handleSliderUpdatedSadness],
     ["Excited", this.state.excitement, this.handleSliderUpdatedExcitement],
     ["Angry", this.state.anger, this.handleSliderUpdatedAnger],
     ["Anxious", this.state.anxiety, this.handleSliderUpdatedAnxiety],
     ["Peaceful", this.state.peacefulness, this.handleSliderUpdatedPeacefulness]
   ]

   let updateRatings = arrayOfUserEmotionRatingsAndMethods.map(userEmotion => {
     return(
       <div key={userEmotion[0]}>
         <p>{userEmotion[0]}</p>
         <input onChange={userEmotion[2]} className="small-6 large-8 columns" type="range" value={userEmotion[1]} />{userEmotion[1]}<br />
     </div>
     )
   })

   let updatedGoalsList = [
     ["Goal #1", this.handleUpdateGoal1Change, this.state.goal1],
     ["Goal #2", this.handleUpdateGoal2Change, this.state.goal2],
     ["Goal #3", this.handleUpdateGoal3Change, this.state.goal3],
     ["Goal #4", this.handleUpdateGoal4Change, this.state.goal4],
     ["Goal #5", this.handleUpdateGoal5Change, this.state.goal5]
   ]

   let updatedGoals = updatedGoalsList.map(goal => {
     return(
       <div className="row" key={goal[0]}>
         <div>
           {goal[0]}
           <textarea
             rows="1"
             cols="12"
             className="small-9 large-9 columns"
             onChange={goal[1]}
             value={goal[2]}
           >
           </textarea>
         </div>
       </div>
     )
   })

   return(
     <div>
       <div className="row">
         <br />
         <div className="large-11 small-11 columns">
           <ul className="tabs" data-tab>
             <li className="tab-title" onClick={handleTabClickGoals}><a className="tab-panel-1" href="#panel1">Edit Goals</a></li>
             <li className="tab-title" onClick={handleTabClickJournal}><a className="tab-panel-2" href="#panel2">Edit Journal</a></li>
             <li className="tab-title" onClick={handleTabClickUserEmotions}><a className="tab-panel-3" href="#panel3">Edit Emotion Ratings</a></li>
             <li id="submit-button-entry" className="tab-title" onClick={handleEntryUpdateClick}><a href="#panel4">Submit Updated Entry</a></li>
           </ul>
           <div className={this.state.goalsTabClass}>
             <div className={this.state.goalsClass}>
               <div className="goals-wrapper">
                 <div className="row">
                   <div className="large-11 columns">
                     <label>Edit your five goals that you set for yourself today. Try to write goals that are reachable within the next 8 - 12 hours. You can cross them off later when you're done!<br />
                     </label>
                     {updatedGoals}
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className={this.state.journalTabClass}>
             <div className={this.state.journalClass}>
               <div className="row journal-prompt">
                 <label>Feel free to edit how your day was! What were the highs? The lows? What brought you joy today? If you had a rough day, what can you do to make it better?<br />
                   <textarea rows="20" cols="40"
                     id="journal"
                     name="journal"
                     onChange={this.handleUpdatedJournalChange}
                     className="large-12 columns"
                     value={this.state.journal}
                   >
                   </textarea>
                 </label>
               </div>
             </div>
           </div>
           <div className={this.state.userEmotionsTabClass}>
             <div className={this.state.userEmotionsClass}>
               <div className="sliders-wrapper">
                 <h5>How were you actually feeling at the previous time when you submitted the entry? Please feel free to edit and rate your emotions on a scale of 0 - 100.</h5>
                 <div id="sliders" className="row">
                   <div className="large-12 columns">
                     <div className="wrapping">
                       {updateRatings}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   )
  }
}
export default EntryShowContainer
