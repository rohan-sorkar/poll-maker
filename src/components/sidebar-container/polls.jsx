import React from "react";
import PollItem from "./pollItem";

const Polls = (props) => {
  const {polls, selectPoll, selectedPoll} = props

  return (
    <div className="p-5 bg-zinc-100">
      {polls.map((poll) => (<PollItem key={poll.id} poll={poll} selectPoll={selectPoll} selectedPoll={selectedPoll} />))}
    </div>
  );
};

export default Polls;
