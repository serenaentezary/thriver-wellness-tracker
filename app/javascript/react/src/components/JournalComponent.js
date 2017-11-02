import React from 'react';

const JournalComponent = props => {
  return(
    <div className="row">

      <label className="large-9 columns">Feel free to write about your day! What were the highs? The lows? What brought you joy today? If you had a rough day, what can you do to make it better?<br />
        <textarea rows="20" cols="40"
          id="journal"
          name="journal"
          className="large-12 columns"
          onChange={props.handleChange}
          value={props.content}
        >
        </textarea>
      </label>
      <input type="button" className="button" value="Submit " onClick={props.handleClick} />
    </div>

  )

}

export default JournalComponent;
