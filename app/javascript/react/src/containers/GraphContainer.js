import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.currentUser.id}/entries/${this.props.entry_id}/user_emotions/graph_data`, {
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
      <div className={'google-chart'}>
        <div>
          <h2>Track your progress over time!</h2>
          <Chart
            chartType="LineChart"
            data={this.state.data}
            options={{}}
            graph_id="LineChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
      </div>
    );
  }
}

export default GraphContainer
