import React, { useState } from "react";
import Form from "../form/form";

const SearchPanel = (props) => {
  const {createPoll, searchTerm, searchInputChange} = props;
  const [isOpenModal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <div className="flex justify-center mb-10 sm:mb-16  p-5">
        <input className="w-full" type="search" placeholder="Search..." value={searchTerm} onChange={searchInputChange} />
        <button onClick={openModal} className="py-2 px-4 sm:px-8 ml-2 sm:ml-4 bg-slate-200 rounded-xl font-medium font-fira">
          New
        </button>
      </div>
      {isOpenModal && <Form closeModal={closeModal} createPoll={createPoll}/>}
    </>
  );
};

export default SearchPanel;
