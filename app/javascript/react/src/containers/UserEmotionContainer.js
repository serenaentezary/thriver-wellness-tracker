import React, { Component } from 'react';

class UserEmotionContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {

   }

 }

  render() {

    return(
      <div className={this.props.userEmotionsClass}>
        <div id="sliders" className="row">
          <div className="large-12 columns">
            <div className="wrapping">
              <h5>How are you feeling at this moment? Please rate your emotions on a scale of 0 - 100.</h5>

              <p className="happy">Happy</p>
              <input onChange={this.props.handleSliderHappiness} className="small-6 large-8 columns" type="range" defaultValue={50} />{this.props.happiness}<br />

              <p className="sad">Sad</p>
              <input onChange={this.props.handleSliderSadness} className="small-6 large-8 columns" type="range" defaultValue={50} />{this.props.sadness}<br />

              <p className="excited">Excited</p>
              <input onChange={this.props.handleSliderExcitement} className="small-6 large-8 columns" type="range" defaultValue={50} />{this.props.excitement}<br />

              <p className="angry">Angry</p>
              <input onChange={this.props.handleSliderAnger} className="small-6 large-8 columns" type="range" defaultValue={50} />{this.props.anger}<br />

              <p className="anxious">Anxious</p>
              <input onChange={this.props.handleSliderAnxiety} className="small-6 large-8 columns" type="range" defaultValue={50} />{this.props.anxiety}<br />

              <p className="peaceful">Peaceful</p>
              <input onChange={this.props.handleSliderPeacefulness} className="small-6 large-8 columns" type="range" defaultValue={50} />{this.props.peacefulness}<br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UserEmotionContainer
