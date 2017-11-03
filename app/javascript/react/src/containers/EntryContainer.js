import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import JournalContainer from './JournalContainer'
import GoalsContainer from './GoalsContainer'
import FrontPageComponent from '../components/FrontPageComponent'

class EntryContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     currentUser: {},
     totalEntry: [],
     selectedSection: null,
   }
   this.toggleSectionSelected = this.toggleSectionSelected.bind(this)
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

 toggleSectionSelected(event) {
   if (id === this.state.selectedSection) {
     this.setState({ selectedSection: null })
   } else {
     this.setState({ selectedSection: id })
   }
 }

 render() {

   let journalContainer;
   let userEmotionContainer;
   let goalsContainer;
   let frontPageComponent;
   if (this.state.currentUser) {
     journalContainer = <JournalContainer
       currentUser={this.state.currentUser}
      />
      userEmotionContainer = <UserEmotionContainer
         currentUser={this.state.currentUser}
       />
      goalsContainer = <GoalsContainer
        currentUser={this.state.currentUser}
      />
    } else {
      frontPageComponent = <FrontPageComponent />
    }

    let buttons = [["Set Daily Goals", goalsContainer], ["Journal", journalContainer], ["Rate Your Emotions", userEmotionContainer]]
    let sectionButtons = buttons.map(button => {
      return(
        <div key={button[0]}>
          <div className="row">
            <button type="button" className="large-12 columns side-buttons">{button[0]}</button>
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
          </div>
          <div className="large-3 small-3 columns">
            Latest Entry
          </div>
       </div>
     </div>
   )
 }
}
export default EntryContainer
