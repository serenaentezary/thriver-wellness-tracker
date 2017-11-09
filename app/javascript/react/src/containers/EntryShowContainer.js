import React, { Component } from 'react';

class EntryShowContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     entry: []
   }

 }

 componentDidMount() {
   debugger;
   fetch(`/api/v1/users/${this.props.currentUser}/entries/${this.props.match.params.id}`, {
     credentials: 'same-origin',
     method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   })
   .then(response => response.json())
   .then(body => {
     this.setState({
       entry: body.entry
     })
   })
 }



 render() {

   return(
     <div>

       <li>{this.state.entry.created_at}</li>

     </div>
   )
  }
}
export default EntryShowContainer
