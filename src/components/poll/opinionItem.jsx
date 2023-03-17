import React from "react";

const OpinionItem = ({opinion}) => {
  return (
    <div className="border px-4 rounded-lg pb-2 bg-white">
      <div className="flex items-center gap-4">
        <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
        <h5 className="font-bold text-slate-700">{opinion.name}</h5>
      </div>
      <hr className="mt-[-15px] w-52" />
      <p className="p w-64 italic">
        {" "}
        <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">
          Opinion:
        </strong>{" "}
        {opinion.description}....
      </p>
    </div>
  );
};

export default OpinionItem;
