import React, { Component } from 'react';

class UserEmotionContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     happiness: 50,
     sadness: 50,
     excitement: 50,
     anger: 50,
     anxiety: 50,
     peacefulness: 50,
     emotionsPayLoad: []
   }
   this.createPayLoad = this.createPayLoad.bind(this)
   this.handleSliderHappiness = this.handleSliderHappiness.bind(this)
   this.handleSliderSadness = this.handleSliderSadness.bind(this)
   this.handleSliderExcitement = this.handleSliderExcitement.bind(this)
   this.handleSliderAnger = this.handleSliderAnger.bind(this)
   this.handleSliderAnxiety = this.handleSliderAnxiety.bind(this)
   this.handleSliderPeacefulness = this.handleSliderPeacefulness.bind(this)
   this.handleSubmitEmotions = this.handleSubmitEmotions.bind(this)
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

  createPayLoad() {
    this.state.emotionsPayLoad = {
      happiness: this.state.happiness,
      sadness: this.state.sadness,
      excitement: this.state.excitement,
      anger: this.state.anger,
      anxiety: this.state.anxiety,
      peacefulness: this.state.peacefulness
    }
  }

  handleSubmitEmotions(payLoad) {
    fetch(`/api/v1/users/${this.props.currentUser.id}/user_emotions`, {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
    this.clearSliders()
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

    let handleClick = () => { this.createPayLoad(); this.handleSubmitEmotions(this.state.emotionsPayLoad) }

    return(
      <div className="row">
        <div className="large-9 columns">
          <h5>How are you feeling at this moment? Please rate your emotions on a scale of 0 - 100.</h5>

          <p className="happy">Happy</p>
          <input onChange={this.handleSliderHappiness} list="tickmarks" className="small-6 columns" type="range" defaultValue={50} />{this.state.happiness}<br />

          <p className="sad">Sad</p>
          <input onChange={this.handleSliderSadness} className="small-6 columns" type="range" defaultValue={50} />{this.state.sadness}<br />

          <p className="excited">Excited</p>
          <input onChange={this.handleSliderExcitement} className="small-6 columns" type="range" defaultValue={50} />{this.state.excitement}<br />

          <p className="angry">Angry</p>
          <input onChange={this.handleSliderAnger} className="small-6 columns" type="range" defaultValue={50} />{this.state.anger}<br />

          <p className="anxious">Anxious</p>
          <input onChange={this.handleSliderAnxiety} className="small-6 columns" type="range" defaultValue={50} />{this.state.anxiety}<br />

          <p className="peaceful">Peaceful</p>
          <input onChange={this.handleSliderPeacefulness} className="small-6 columns" type="range" defaultValue={50} />{this.state.peacefulness}<br />
        </div>
        <input type="submit" className="button" value="Submit " onClick={handleClick} />

      </div>
    )
  }
}
export default UserEmotionContainer
