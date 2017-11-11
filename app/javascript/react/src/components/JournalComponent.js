import React from 'react';

const JournalComponent = props => {
  return(
    <div className={props.journalClass}>
      <div className="row journal-prompt">
        <label>Feel free to write about your day! What were the highs? The lows? What brought you joy today? What are you grateful for? If you had a rough day, what can you do to make it better?<br />
          <textarea rows="20" cols="40"
            id="journal"
            name="journal"
            onChange={props.handleJournalChange}
            className="large-12 columns"
            value={props.content}
          >
          </textarea>
        </label>
      </div>
    </div>
  )

}

export default JournalComponent;
