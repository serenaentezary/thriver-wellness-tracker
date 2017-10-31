import React from 'react';

class UserEmotionContainer extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     happiness: 0,
     sadness: 0,
     excitement: 0,
     anger: 0,
     anxiety: 0,
     peacefulness: 0
   }
   this.handleSliderHappiness = this.handleSliderHappiness.bind(this)
   this.handleSliderSadness = this.handleSliderSadness.bind(this)
   this.handleSliderExcitement = this.handleSliderExcitement.bind(this)
   this.handleSliderAnger = this.handleSliderAnger.bind(this)
   this.handleSliderAnxiety = this.handleSliderAnxiety.bind(this)
   this.handleSliderPeacefulness = this.handleSliderPeacefulness.bind(this)
 }


 /*
 componentDidMount() {}
  retrieveValuesToFetch() {

  }
 }
}
 */


 /*
 postValuesToFetch() {

 }
}
 */

  handleSliderHappiness(event) {
    console.log(event.target.value);
    this.setState({ happiness: event.target.value })
    // call a function that posts to fetch api endpoint
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
 // componentDidMount() {
 //   fetch('/api/v1/user/is_signed_in.json', {
 //     credentials: 'same-origin',
 //     method: 'GET',
 //     headers: { 'Content-Type': 'application/json' }
 //   })
 //     .then(response => response.json())
 //     .then(body => {
 //       this.setState({ currentUser: body.user })
 //     })
 //   fetch('http://localhost:3000/api/v1/mountains', {
 //     credentials: 'same-origin',
 //     method: 'GET',
 //     headers: { 'Content-Type': 'application/json' }
 //   })
 //    .then(response => response.json())
 //    .then (body => {
 //      this.setState({ mountains: body.mountains })
 //    })
 // }

 // addNewMountain(payLoad) {
 //   fetch('/api/v1/mountains', {
 //     method: 'POST',
 //     body: JSON.stringify(payLoad)
 //   })
 //   .then(response => response.json())
 //   .then(responseData =>{
 //     this.setState({ mountains: [responseData.mountain, ...this.state.mountains] })
 //   })
 // }

 // handleDeleteMountain(event) {
 //   let id = event.target.name
 //   fetch(`/api/v1/mountains/${id}`, {
 //     method: 'DELETE',
 //     credentials: 'same-origin',
 //     headers: { 'Content-Type': 'application/json' }
 //   })
 //   .then(response => {
 //     if (response.ok) {
 //       return response
 //     } else {
 //       let errorMessage = `${response.status} (${response.statusText})`;
 //       let error = new Error(errorMessage);
 //       throw(error);
 //     }
 //   })
 //   .then(response => response.json())
 //   .then(response => {
 //     this.setState( {mountains: response.mountains} )
 //   })
 // }

  render() {

    return(
      <div className="slider">
        <h3>How are you feeling at this moment? Please rate your emotions on a scale of 0 - 100.</h3>
        <input onChange={this.handleSliderHappiness} type="range" defaultValue={50} /><br />
        <input onChange={this.handleSliderSadness} type="range" defaultValue={50} /><br />
        <input onChange={this.handleSliderExcitement} type="range" defaultValue={50} /><br />
        <input onChange={this.handleSliderAnger} type="range" defaultValue={50} /><br />
        <input onChange={this.handleSliderAnxiety} type="range" defaultValue={50} /><br />
        <input onChange={this.handleSliderPeacefulness} type="range" defaultValue={50} /><br />
      </div>
    )
  }
}
export default UserEmotionContainer
