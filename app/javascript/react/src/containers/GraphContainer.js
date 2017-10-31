import React, { Component } from 'react';
import UserEmotionContainer from './UserEmotionContainer'
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class GraphContainer extends Component{
 constructor(props) {
   super(props);
   this.state = {
     happiness: props.happiness,
     sadness: props.sadness,
     excitement: props.excitement,
     anger: props.anger,
     anxiety: props.anxiety,
     peacefulness: props.peacefulness
   }
 }
 render() {
   let data = ''
   return(
     <div>
       <div className={'emotions_chart'}>
        <div>
          <h2>Check your progress</h2>
          <Chart
            chartType="LineChart"
            data={data}
            options={{}}
            graph_id="LineChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
      </div>
     </div>
   )
 }
}
export default GraphContainer
