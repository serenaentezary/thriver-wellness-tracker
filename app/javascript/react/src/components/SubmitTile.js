import React from 'react';

const SubmitTile = props => {
  return(
    <div className={props.submitClass}>
      <button className="submit-button" onClick={props.handleEntryClick}>Submit Entry!</button>
    </div>
  )

}

export default SubmitTile;
