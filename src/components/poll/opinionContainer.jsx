import React from "react";
import OpinionItem from "./opinionItem";

const OpinionContainer = ({opinions, closeOpinion}) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-white">
      <div className="relative grid grid-cols-3 gap-8 border p-32 shadow-md shadow-purple-100 rounded-lg bg-gray-50">
        {
          opinions.map((opinion) => (<OpinionItem key={opinion.id} opinion={opinion} />))
        }
      </div>
      <button onClick={closeOpinion} className="bg-gray-800 text-white font-semibold px-7 py-2 mt-[-35px] shadow-md shadow-green-200 rounded-sm transition ml-16">Go Back</button>
    </div>
  );
};

export default OpinionContainer;
