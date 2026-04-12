import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    navigate("/question");
  };

  return (
    <div className=" flex justify-center my-25">
      {/* <p>Exam App</p> */}

      <div className="border-2 p-8 rounded-xl border-gray-200  shadow">
        <form onSubmit={handlSubmit}>
          <label htmlFor="name" className="block mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 border-gray-200 py-1 px-2 mt-1 w-80 rounded"
            type="text"
            placeholder="enter name"
            id="name"
            value={name}
            onChange={handleName}
            required
          />
          

          <label htmlFor="email" className="block mt-4 mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 border-gray-200 py-1 px-2 mt-1 w-80 rounded"
            type="email"
            placeholder="Eg-xyz@gmail.com"
            id="email"
            value={email}
            onChange={handleEmail}
            required
          />
<div className="mt-8 flex justify-center" >
          <button
            type="submit"
            className="bg-green-300 rounded py-2 px-4 mx-10 hover:text-white hover:cursor-pointer hover:bg-green-500"
          >
            Start Quiz
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
