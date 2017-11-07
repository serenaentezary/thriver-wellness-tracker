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
      <div className="row" key={goal[0]}>
        <div>
          {goal[0]}
          <textarea
            rows="1"
            cols="12"
            className="small-9 large-9 columns"
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
        <label>Write up to five goals that you want to set for yourself today. Try to write goals that are reachable within the next 8 - 12 hours. You can cross them off when you're done!<br />
          {goalsTiles}
        </label>
      </div>
    </div>
  )

}

export default GoalComponent;
