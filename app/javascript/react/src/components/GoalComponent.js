import React from 'react';

const GoalComponent = props => {
  let goalsList = [
    ["Goal #1", props.handleGoal1Change, props.goalItem1],
    ["Goal #2", props.handleGoal2Change, props.goalItem2],
    ["Goal #3", props.handleGoal3Change, props.goalItem3],
    ["Goal #4", props.handleGoal4Change, props.goalItem4],
    ["Goal #5", props.handleGoal5Change, props.goalItem5]
  ]
  let goalsTiles = goalsList.map(goal => {
    return(
      <div className="row" id="goal-tile-component-container" key={goal[0]}>
        <div className="small-11 large-11 columns" id="goal-tile-component-container-2">
          {goal[0]}
          <textarea
            rows="1"
            cols="40"
            id="goal-tile-component"
            onChange={goal[1]}
            value={goal[2]}
          >
          </textarea>
        </div>
      </div>
    )
  })
  return(
    <div className={props.goalsClass}>
      <div className="row">
        <label>Write up to five goals that you want to set for yourself today. Try to write goals that are reachable within the next 8 - 12 hours. You can cross them off later when you're done!<br />
        </label>
        <div className="goal-tiles">
          {goalsTiles}
        </div>
      </div>
    </div>
  )

}

export default GoalComponent;
