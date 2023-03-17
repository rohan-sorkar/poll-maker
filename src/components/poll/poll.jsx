import React, { useState } from "react";
import shortid from "shortid";
import Form from "../form/form";
import OpinionContainer from "./opinionContainer";

const Poll = (props) => {
  const { selectedPoll, updatePoll, deletePoll, submitVote } = props;
  const [optionId, setOptionId] = useState(null);
  const [userOpinion, setUserOpinion] = useState({ name: "", description: "" });
  const [isShownOpinion, setIsShownOpinion] = useState(false);
  const [isEditModalOpen, setModal] = useState(false);

  const changeUserOpinion = (event) => {
    setUserOpinion({
      ...userOpinion,
      [event.target.name]: event.target.value,
    });
  };

  const selectOption = (id) => {
    setOptionId(id);
  };

  const handleSubmit = (pollId, event) => {
    event.preventDefault();
    if (optionId === null || !userOpinion.name || !userOpinion.description) {
      alert("please fill up the form and give a vote properly😕");
      return;
    } else {
      const opinion = { id: shortid.generate(), ...userOpinion };
      submitVote({ pollId, optionId, opinion });
      setOptionId(null);
      setUserOpinion({ name: "", description: "" });
    }
  };

  const showOpinion = () => {
    setIsShownOpinion(true);
  };

  const closeOpinion = () => {
    setIsShownOpinion(false);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="sm:ml-20 max-w-xl mt-8 sm:mt-0">
        <h3 className="text-xl sm:text-2xl">{selectedPoll.title}</h3>
        <p>{selectedPoll.description}</p>
        <div className="flex items-center justify-between">
          <h5 className="underline">Options</h5>
          <div>
            <button
              onClick={openModal}
              className="bg-green-200 text-green-600 py-2 px-4 sm:px-8 rounded-xl font-medium"
            >
              Edit
            </button>
            <button
              onClick={() => deletePoll(selectedPoll.id)}
              className=" bg-red-200 text-red-600 ml-3 py-2 px-4 sm:px-8 rounded-xl font-medium"
            >
              delete
            </button>
          </div>
        </div>

        <div>
          {selectedPoll.options.map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between mb-8"
            >
              <div className="flex items-center gap-2 text-lg italic">
                <input
                  className="appearance-none checked:bg-purple-500"
                  name="optId"
                  type="radio"
                  checked={option.id === optionId}
                  value={option.id}
                  onChange={() => selectOption(option.id)}
                />{" "}
                {option.value}
              </div>
              <div>
                <span className="px-6 py-1 bg-orange-100 text-orange-400">
                  {option.vote}
                </span>
                <span className="px-6 py-1 bg-purple-100 text-purple-400 ml-2">
                  {selectedPoll.totalVote > 0
                    ? Number(
                        (100 / selectedPoll.totalVote) * option.vote
                      ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <form onSubmit={(event) => handleSubmit(selectedPoll.id, event)}>
            <label>Your name..</label>
            <input
              className="w-80"
              type="text"
              placeholder="what is your name..."
              name="name"
              value={userOpinion.name}
              onChange={changeUserOpinion}
            />
            <label className="mt-3">Opinion</label>
            <textarea
              className="w-80"
              placeholder="write your opinion here..."
              name="description"
              value={userOpinion.description}
              onChange={changeUserOpinion}
            ></textarea>
            <button className="btn bg-slate-200 mt-3" type="submit">
              Submit
            </button>
          </form>

          <div>
            <h4 className="italic text-gray-700 font-fira">
              Total Votes({selectedPoll.totalVote})
            </h4>
            <button
              onClick={showOpinion}
              className="bg-gray-800 text-white font-semibold px-7 py-2 mt-[-35px] shadow-md shadow-green-200 rounded-sm hover:bg-gray-600 transition"
            >
              See Opinions
            </button>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <Form
          isUpdate={true}
          updatePoll={updatePoll}
          closeModal={closeModal}
          selectedPoll={selectedPoll}
        />
      )}

      {isShownOpinion && (
        <OpinionContainer
          closeOpinion={closeOpinion}
          opinions={selectedPoll.opinions}
        />
      )}
    </>
  );
};

export default Poll;
