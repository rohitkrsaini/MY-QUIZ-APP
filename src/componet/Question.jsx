import React from "react";

const Question = ({ question, handleOnChange, answer }) => {
  return (
    <div className="m-8 p-4 border border-gray-400 rounded bg-gray-100">
      <p className="mb-4 font-bold">
        Q.{question.qno} {question.text}
      </p>

      {question.options.map((opt) => (
        <div className="my-4" key={opt}>
          <label
            className="ml-1 pl-1 cursor-pointer"
            htmlFor={`q${question.id}-${opt}`}
          >
            <input
              className="cursor-pointer"
              type="radio"
              name={`q-${question.id}`}
              id={`q${question.id}-${opt}`}
              value={opt}
              onChange={() => handleOnChange(question.id, opt)}
              checked={answer===opt}
            />{" "}
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;
