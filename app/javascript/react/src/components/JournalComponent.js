import React from 'react';

const JournalComponent = props => {
  return(

    <div>
      <label>Feel free to write about your day! What were the highs? The lows? What brought you joy today? If you had a rough day, what can you do to make it better?</label><br />
      <input type="textarea"
        id="journal"
        value={props.content}
        name="journal"
        onChange={props.handleChange} />
    </div>

  )

}

export default JournalComponent;
