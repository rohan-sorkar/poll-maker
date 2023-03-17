import React, { useState } from "react";
import Poll from "../poll/poll";
import SidebarContainer from "../sidebar-container";
import Welcome from "../welcome";
import AppLayout from "./appLayout";
import { fakePolls } from "../../constants";

const AppContainer = () => {
  const [polls, setPoll] = useState([...fakePolls]);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const createPoll = (poll) => {
    setPoll([poll, ...polls]);
  };

  const selectPoll = (pollId) => {
    const findPoll = polls.find((poll) => poll.id === pollId);
    setSelectedPoll({ ...findPoll });
  };

  const searchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = (polls) => {
    const searchedData = polls.filter((poll) => {
      return (
        poll.title.toLowerCase().includes(searchTerm) ||
        poll.description.toLowerCase().includes(searchTerm)
      );
    });
    return searchedData;
  };

  const searchedPolls = performSearch(polls);

  const deletePoll = (pollId) => {
    const filteredPolls = polls.filter((poll) => poll.id !== pollId);
    setPoll([...filteredPolls]);
    setSelectedPoll(null);
  };

  const submitVote = ({ pollId, optionId, opinion }) => {
    const updatePoll = polls.find((poll) => poll.id === pollId);
    const updateOption = updatePoll.options.find(
      (poll) => poll.id === optionId
    );
    updateOption.vote += 1;
    updatePoll.totalVote += 1;
    updatePoll.opinions = [opinion, ...updatePoll.opinions];
    setPoll([...polls]);
    setSelectedPoll(updatePoll);
  };

  const updatePoll = (updateId, updatedPoll) => {
    console.log(updateId, updatedPoll);
    const pollToBeUpdate = polls.find((poll) => poll.id === updateId);
    pollToBeUpdate.title = updatedPoll.title;
    pollToBeUpdate.description = updatedPoll.description;
    pollToBeUpdate.options = updatedPoll.options;
    setPoll([...polls]);
    setSelectedPoll({ ...updatedPoll });
  };

  return (
    <AppLayout>
      <SidebarContainer
        createPoll={createPoll}
        polls={searchedPolls}
        selectPoll={selectPoll}
        selectedPoll={selectedPoll}
        searchTerm={searchTerm}
        searchInputChange={searchInputChange}
      />
      {selectedPoll ? (
        <Poll
          selectedPoll={selectedPoll}
          updatePoll={updatePoll}
          deletePoll={deletePoll}
          submitVote={submitVote}
        />
      ) : (
        <Welcome />
      )}
    </AppLayout>
  );
};

export default AppContainer;
