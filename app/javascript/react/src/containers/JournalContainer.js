import React, { Component } from 'react';

class JournalContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     entry: '',
     currentUser: ''
   }
   this.handleChange = this.handleChange.bind(this)
   this.handleState = this.handleState.bind(this)
   this.handleSubmitJournal = this.handleSubmitJournal.bind(this)
 }

 handleChange(event) {
   let formField = event.target.name
   let newValue = event.target.value
   this.setState({ [field]: newValue })
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

 handleSubmitJournal(event) {
   event.preventDefault();
   let entryPayload = {
     entry: this.state.entry
     currentUser: this.currentUser.id
   }
 }

 render() {

   return(
     <div>
       <form className="callout" id="site-form">
         <JournalComponent
           entry="entry"
           content={this.state.journal}
           handler={this.handleChange}
        />

        <input type="submit" className="button" value="Submit " onClick={handleSubmitJournal} />
      </form>
     </div>
   )
 }
}
export default JournalContainer
