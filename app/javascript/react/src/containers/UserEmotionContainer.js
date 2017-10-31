import React, { Component } from 'react';

class UserEmotionContainer extends Component{
 constructor(props) {
   super(props);
   this.state = {
     happiness: 0,
     sadness: 0,
     excitement: 0,
     anger: 0,
     anxiety: 0,
     peacefulness: 0,
     currentUser: [],
     payLoad: []
   }
   this.handleSliderHappiness = this.handleSliderHappiness.bind(this)
   this.handleSliderSadness = this.handleSliderSadness.bind(this)
   this.handleSliderExcitement = this.handleSliderExcitement.bind(this)
   this.handleSliderAnger = this.handleSliderAnger.bind(this)
   this.handleSliderAnxiety = this.handleSliderAnxiety.bind(this)
   this.handleSliderPeacefulness = this.handleSliderPeacefulness.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
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

 handleSliderHappiness(event) {
    console.log(event.target.value);
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

  createPayLoad() {

  }

  handleSubmit(payLoad) {
    fetch('/api/v1/user_emotions', {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ payLoad: [responseData.payLoad, ...this.state.payLoad] })
    })
  }


  retrieveValues() {
    fetch('/api/v1/user_emotions'), {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    .then(response => response.json())
    .then (body => {
      this.setState({ happiness: body.happiness })
    })
  }

  // <GraphContainer
  //   happiness={}
  //   sadness={}
  //   excitement={}
  //   anger={}
  //   anxiety={}
  //   happiness={}
  //   currentUser={this.state.currentUser}
  // />
  render() {

    return(
      <div>
        <div className="slider">
          <h3>How are you feeling at this moment? Please rate your emotions on a scale of 0 - 100.</h3>

          <p className="happy">Happy</p>
          <input onChange={this.handleSliderHappiness} type="range" defaultValue={50} /><br />

          <p className="sad">Sad</p>
          <input onChange={this.handleSliderSadness} type="range" defaultValue={50} /><br />

          <p className="excited">Excited</p>
          <input onChange={this.handleSliderExcitement} type="range" defaultValue={50} /><br />

          <p className="angry">Angry</p>
          <input onChange={this.handleSliderAnger} type="range" defaultValue={50} /><br />

          <p className="anxious">Anxious</p>
          <input onChange={this.handleSliderAnxiety} type="range" defaultValue={50} /><br />

          <p className="peaceful">Peaceful</p>
          <input onChange={this.handleSliderPeacefulness} type="range" defaultValue={50} /><br />
        </div>


      </div>
    )
  }
}
export default UserEmotionContainer
