import React, { Component } from 'react'
import EntryContainer from './EntryContainer'

class IndexContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     selectedSection: null,
     entrySections: []
   }
 }

 render() {
   return (
     <div>
       <EntryContainer />
     </div>
   )
  // return(
  //     <div>
  //       {entries}
  //     </div>
  //   )
  }
}
export default IndexContainer
