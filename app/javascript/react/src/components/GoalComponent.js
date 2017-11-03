import React from 'react';

const GoalComponent = props => {
  return(
    <div className="row">

      <label>Write up to five goals that you want to set for yourself today. Try to write goals that are reachable within the next 8 - 12 hours. You can cross them off when you're done!<br />
        <textarea rows="2" cols="12"
          id="goals"
          name="goals"
          className="large-9 columns"
          onChange={props.handleChange}
          value={props.content}
        >
        </textarea>
      </label>
      <input type="button" className="button" value="Enter Goal " onClick={props.handleClick} />
    </div>

  )

}

export default GoalComponent;
