import React, { useState } from "react";

const PollItem = (props) => {
  const {poll, selectPoll, selectedPoll} = props
  const [pollId, setPollId] = useState(poll?.id)

  return (
    <h6 onClick={() => selectPoll(poll?.id)} className={`text-left cursor-pointer text-slate-600 text-base sm:text-lg border  px-5 py-2 shadow hover:shadow-md ${selectedPoll?.id === pollId ? 'bg-slate-200': ''}`}>
      🔋 {poll?.title.slice(0, 30)}...
    </h6>
  );
};

export default PollItem;
