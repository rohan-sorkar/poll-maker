function App() {
  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-32 mb-20 flex flex-col items-center md:flex-row md:justify-start px-4 sm:px-10">
      <div className="bg-white rounded-xl border shadow-md shadow-slate-200">
        <div className="flex justify-center mb-10 sm:mb-16  p-5">
          <input className="w-full" type="search" placeholder="Search..." />
          <button className="py-2 px-4 sm:px-8 ml-2 sm:ml-4 bg-slate-200 rounded-xl font-medium font-fira">
            New
          </button>
        </div>
        <div className="p-5 bg-zinc-100">
          <h6 className="text-left cursor-pointer text-slate-600 text-base sm:text-lg border  px-5 py-2 shadow hover:shadow-md bg-slate-100">
            🔋 what is your favorite program...
          </h6>
        </div>
      </div>

      <div className="sm:ml-20 max-w-xl mt-8 sm:mt-0">
        <h3 className="text-xl sm:text-2xl">
          what is your favorite programming language ?
        </h3>
        <p>
          there are a lot of popular programming language available, among them
          what is your favorite
        </p>
        <div className="flex items-center justify-between">
          <h5 className="underline">Options</h5>
          <div>
            <button className="bg-green-200 text-green-600 py-2 px-4 sm:px-8 rounded-xl font-medium">
              Edit
            </button>
            <button className=" bg-red-200 text-red-600 ml-3 py-2 px-4 sm:px-8 rounded-xl font-medium">
              delete
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-lg italic">
              <input
                className="appearance-none checked:bg-purple-500"
                name="optId"
                type="radio"
              />{" "}
              javascript
            </div>
            <div>
              <span className="px-6 py-1 bg-orange-100 text-orange-400">3</span>
              <span className="px-6 py-1 bg-purple-100 text-purple-400 ml-2">
                100 %
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <form>
            <label>Your name..</label>
            <input
              className="w-80"
              type="text"
              placeholder="what is your name..."
              name="name"
            />
            <label className="mt-3">Opinion</label>
            <textarea
              className="w-80"
              placeholder="write your opinion here..."
            ></textarea>
            <button className="btn bg-slate-200 mt-3" type="submit">
              Submit
            </button>
          </form>

          <div>
            <h4 className="italic text-gray-700 font-fira">Total Votes(7)</h4>
            <button className="bg-gray-800 text-white font-semibold px-7 py-2 mt-[-35px] shadow-md shadow-green-200 rounded-sm hover:bg-gray-600 transition">
              See Opinions
            </button>
          </div>
        </div>
      </div>

      {/* <div className="max-w-2xl mt-8 md:-mt-44 sm:pl-12">
        <h3 className="text-xl sm:text-3xl text-slate-600 italic">
          Welcome to our application 😎
        </h3>
        <p className="text-slate-500 font-fira">
          You can create as many poll as you want. Click on the new button to
          create a new poll. To check details of a poll please select from the
          left sidebar.By selecting a poll you can check it's details,
          participate and check others opinion about this poll
        </p>
      </div> */}

      {/* <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-slate-100">
      <form
        
        className="border relative p-10 bg-white"
      >
        <h3
          
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
        />
        <label>description</label>
        <textarea
          className="w-full mb-4"
          rows={3}
          placeholder="describe about poll..."
          name="description"
        ></textarea>
        <h6 className="inline">Add options</h6>
        <span
          className="bg-purple-300 text-purple-600 font-medium rounded-full px-5 py-1 ml-10 cursor-pointer"
        >
          Add option
        </span>
        
          <div className="flex my-5">
            <input
              type="text"
            />
            <span
              className="bg-red-300 text-red-600
              font-medium rounded-xl px-5 py-1 ml-3 cursor-pointer"
            >
              delete
            </span>
          </div>

        <button
          type="submit"
          className="bg-slate-700 text-white  px-4 py-2 font-fira"
        >
          Create poll
        </button>
      </form>
    </div> */}

    {/* <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-white">
      <div className="relative grid grid-cols-3 gap-8 border p-32 shadow-md shadow-purple-100 rounded-lg bg-gray-50">
        <div className="border px-4 rounded-lg pb-2 bg-white">
          <div className="flex items-center gap-4">
          <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
            <h5 className="font-bold text-slate-700">Rohan islam</h5>
          </div>
          <hr className="mt-[-15px] w-52" />
          <p className="p w-64 italic"> <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">Opinion:</strong> hello guys this poll is mind-blowing alright. you guys can play it....</p>
        </div>
        <div className="border px-4 rounded-lg pb-2 bg-white">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
            <h5 className="font-bold text-slate-700">Rohan islam</h5>
          </div>
          <hr className="mt-[-15px] w-52" />
          <p className="p w-64 italic"> <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">Opinion:</strong> hello guys this poll is mind-blowing alright. you guys can play it....</p>
        </div>
        <div className="border px-4 rounded-lg pb-2 bg-white">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
            <h5 className="font-bold text-slate-700">Rohan islam</h5>
          </div>
          <hr className="mt-[-15px] w-52" />
          <p className="p w-64 italic"> <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">Opinion:</strong> hello guys this poll is mind-blowing alright. you guys can play it....</p>
        </div>
        <div className="border px-4 rounded-lg pb-2 bg-white">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
            <h5 className="font-bold text-slate-700">Rohan islam</h5>
          </div>
          <hr className="mt-[-15px] w-52" />
          <p className="p w-64 italic"> <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">Opinion:</strong> hello guys this poll is mind-blowing alright. you guys can play it....</p>
        </div>
        <div className="border px-4 rounded-lg pb-2 bg-white">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
            <h5 className="font-bold text-slate-700">Rohan islam</h5>
          </div>
          <hr className="mt-[-15px] w-52" />
          <p className="p w-64 italic"> <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">Opinion:</strong> hello guys this poll is mind-blowing alright. you guys can play it....</p>
        </div>
        <div className="border px-4 rounded-lg pb-2 bg-white">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src="./avatars/avatar.png" alt="avatar" />
            <h5 className="font-bold text-slate-700">Rohan islam</h5>
          </div>
          <hr className="mt-[-15px] w-52" />
          <p className="p w-64 italic"> <strong className="bg-gray-100 px-2 font-normal pb-1 shadow-sm shadow-green-200">Opinion:</strong> hello guys this poll is mind-blowing alright. you guys can play it....</p>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default App;
