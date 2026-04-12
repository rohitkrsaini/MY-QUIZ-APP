import React from "react";
import ReactConfetti from "react-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faSadCry } from "@fortawesome/free-solid-svg-icons";

const Result = ({ questions, answers, reteke }) => {
  const total = () => {
    const rightAns = questions.filter((question) => {
      return question.answer === answers[question.id];
    });
    console.log("rightAns", rightAns);
    return rightAns.length;
  };

  const isPassingScore = () => {
    let totalRight = total();
    let totalQust = questions.length;
    let totalPracentage = (totalRight / totalQust) * 100;
    return totalPracentage > 60;
  };

  return (
    <div className="p-8">
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            className="my-8 p-4 border border-gray-400 rounded"
          >
            <p className="font-bold">
              {question.qno}. {question.text}
            </p>
            <div className="flex justify-between my-4">
              <span>
                Your Answer: <b>{answers[question.id]}</b>{" "}
              </span>
              <span>
                Correct Answer: <b>{question.answer}</b>
              </span>
              <span>
                Marks: <b>{question.answer === answers[question.id] ? 1 : 0}</b>
              </span>
            </div>
          </div>
        );
      })}
      <div>
        <p>
          <b>CORRECT ANSWER : {total()}</b>
        </p>
        <div className="flex items-center  flex-col ">
          {isPassingScore() ? (
            <FontAwesomeIcon
              className="text-8xl text-green-400"
              icon={faSmile}
            />
          ) : (
            <FontAwesomeIcon
              className="text-8xl text-red-400"
              icon={faSadCry}
            />
          )}
          <div className="inline">
            {isPassingScore() ? (
              "Congratulations! you have passed the quiz"
            ) : (
              <span>
                {" "}
                Oops! try again <br />
                <button
                  className="rounded bg-green-400 p-3 ml-4 my-2 hover:cursor-pointer hover:bg-green-500 hover:text-white"
                  onClick={reteke}
                >
                  Try again{" "}
                </button>
              </span>
            )}
          </div>
        </div>
        {isPassingScore() && <ReactConfetti />}
      </div>
    </div>
  );
};

export default Result;
