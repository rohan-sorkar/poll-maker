import React from "react";
import Polls from "./polls";
import SearchPanel from "./searchPanel";

const SidebarContainer = (props) => {
  const {createPoll, polls, selectPoll, searchTerm, searchInputChange, selectedPoll} = props

  return (
    <>
      <div className="bg-white rounded-xl border shadow-md shadow-slate-200">
        <SearchPanel createPoll={createPoll} searchTerm={searchTerm} searchInputChange={searchInputChange} />
        <Polls polls={polls} selectPoll={selectPoll} selectedPoll={selectedPoll} />
      </div>
    </>
  );
};

export default SidebarContainer;
