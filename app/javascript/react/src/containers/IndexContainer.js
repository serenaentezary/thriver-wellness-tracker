import React, { Component } from 'react';

class IndexContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     selectedSection: null,
     entrySections: []
   }
   this.toggleSectionSelect = this.toggleSectionSelect.bind(this)
 }

 toggleSectionSelect(id) {
   if (id === this.state.selectedSection) {
     this.setState({ selectedSection: null })
   } else {
     this.setState({ selectedSection: id })
   }
 }

 render() {
   let sections = this.state.entries.map(entry => {
     let selected;
     if (this.state.selectedSection === section.id) {
       selected = true
     }

    let handleClick = () => { this.toggleSectionSelect(entry.id)}

    return(
      <EntryContainer
         
      />
    )
   })


   return(
     <div>
       <div className="row">
       </div>
       <div className="row">
       </div>
     </div>
   )
 }
}
export default IndexContainer
