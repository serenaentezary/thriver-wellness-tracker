import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      options: {
        title: "Track your progress over time!",
        hAxis: { title: "Time" },
        vAxis: { title: "Rating" }
      }
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.currentUser.id}/user_emotions/graph_data`, {
      credentials: 'same-origin',
      method: 'GET'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ data: body.user_emotions })
    })
  }

  render() {

    return (
      <div className="graph">
        <div className={'google-chart'}>
          <div>
            <Chart
              chartType="LineChart"
              data={this.state.data}
              options={this.state.options}
              graph_id="LineChart"
              width="100%"
              height="400px"
              legend_toggle
            />
          </div>
        </div>
    </div>
    );
  }
}

export default GraphContainer
