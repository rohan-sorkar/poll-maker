import React, { useEffect, useState } from "react";
import shortid from "shortid";

const initialFormState = { title: "", description: "" };
const initialOptions = [
  { id: "1", value: "", vote: 0 },
  { id: "2", value: "", vote: 0 },
];

const Form = (props) => {
  const { createPoll, closeModal, updatePoll, isUpdate, selectedPoll } = props;
  const [formState, setFormState] = useState({ ...initialFormState });
  const [options, setOption] = useState([...initialOptions]);

  const addOption = () => {
    if (options.length < 5) {
      const newOption = {
        id: shortid.generate(),
        value: "",
        vote: 0,
      };
      setOption([...options, newOption]);
    } else {
      alert("you can not create more than 5 option😕");
    }
  };

  const deleteOption = (optionId) => {
    if (options.length > 2) {
      const filteredOptions = options.filter(
        (option) => option.id !== optionId
      );
      setOption([...filteredOptions]);
    } else {
      alert("you can not delete less than two option😕");
    }
  };

  const optionChangeHandler = (id, event) => {
    const updatedOption = options.find((option) => option.id === id);
    updatedOption.value = event.target.value;
    setOption([...options]);
  };

  const inputChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitToAdd = (event) => {
    event.preventDefault();
    const newPoll = {
      id: shortid.generate(),
      title: formState.title,
      description: formState.description,
      options: [...options],
      opinions: [],
      totalVote: 0,
      createdAt: new Date(),
    };

    const check =
      !formState.title ||
      !formState.description ||
      !options[0].value ||
      !options[1].value;

    if (check) {
      alert("please fill up the input fields🙄");
      return;
    } else {
      createPoll(newPoll);
      setFormState({ ...initialFormState });
      setOption([...initialOptions]);
      closeModal();
    }
  };

  const submitToUpdate = (event) => {
    event.preventDefault();
    const check =
      !formState.title ||
      !formState.description ||
      !options[0].value ||
      !options[1].value;

    if (check) {
      alert("please fill up the input fields🙄");
      return;
    } else {
      const updatedData = { ...selectedPoll };
      updatedData.title = formState.title;
      updatedData.description = formState.description;
      updatedData.options = [...options];

      updatePoll(updatedData.id, updatedData);
      setFormState({ ...initialFormState });
      setOption([...initialOptions]);
      closeModal();
    }
  };

  useEffect(() => {
    if (isUpdate) {
      setFormState({
        title: selectedPoll.title,
        description: selectedPoll.description,
      });
      setOption([...selectedPoll.options]);
    }
  }, [isUpdate]);

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-slate-100">
      <form
        onSubmit={isUpdate ? submitToUpdate : submitToAdd}
        className="border relative p-10 bg-white"
      >
        <h3
          onClick={closeModal}
          className="m-0 absolute top-3 right-5 cursor-pointer text-red-600"
        >
          X
        </h3>
        <h3 className="text-center animate-bounce transition italic">
          Add Poll😎
        </h3>
        <label>title</label>
        <input
          className="w-full mb-4"
          type="text"
          placeholder="title..."
          name="title"
          value={formState.title}
          onChange={inputChangeHandler}
        />
        <label>description</label>
        <textarea
          className="w-full mb-4"
          rows={3}
          placeholder="describe about poll..."
          name="description"
          value={formState.description}
          onChange={inputChangeHandler}
        ></textarea>
        <h6 className="inline">Add options</h6>
        <span
          onClick={addOption}
          className="bg-purple-300 text-purple-600 font-medium rounded-full px-5 py-1 ml-10 cursor-pointer"
        >
          Add option
        </span>

        {options.map((option) => (
          <div key={option.id} className="flex my-5">
            <input
              type="text"
              value={option.value}
              onChange={(event) => optionChangeHandler(option.id, event)}
            />
            <span
              onClick={() => deleteOption(option.id)}
              className={`${
                options.length === 2
                  ? "bg-red-100 text-red-200 cursor-not-allowed"
                  : "bg-red-300 text-red-600"
              } font-medium rounded-xl px-5 py-1 ml-3 cursor-pointer`}
            >
              delete
            </span>
          </div>
        ))}

        <button
          type="submit"
          className="bg-slate-700 text-white  px-4 py-2 font-fira"
        >
          {isUpdate ? "Update poll" : "Create poll"}
        </button>
      </form>
    </div>
  );
};

export default Form;
