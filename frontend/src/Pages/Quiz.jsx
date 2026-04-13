import axios from "axios";
import React, { useState, useEffect } from "react";
import Question from "../componet/Question";
import Result from "../componet/Result";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswer] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading ,setLoading] = useState(true)
  

  const getData = async () => {
    try {
      setLoading(true)
      const resp = await axios.get("https://my-quiz-app-2hgq.onrender.com/questions");
      setQuestions(resp.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextClick = () => {
    if (!answers[currentQuestion.id]) {
      toast.custom(
        <div className="bg-white border-gray-100 shadow px-6 py-4 rounded text-red-400">
          <FontAwesomeIcon icon={faWarning} className="mr-2" />
           Please select answer to goto next question
        </div>,
      );
      return;
    }
    if (currentQuestionIndex === questions.length - 1) {
      setIsCompleted(true);
      return;
      
    }
    setCurrentQuestionIndex((pre) => pre + 1);
  };
  const handlePreviousClick = () => {
    if (currentQuestionIndex === 0) {
      return;
    }
    setCurrentQuestionIndex((pre) => pre - 1);
  };
  const handleQuestionResult = (id, answer) => {
    setAnswer({ ...answers, [id]: answer });
  };

  const retakeQuiz =()=>{
    setIsCompleted(false)
    setCurrentQuestionIndex(0)
    setAnswer({})
  }

  if(loading){
    return(
    <div className="flex justify-center mt-8">
    <div className="w-6 h-6 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>
      Loading...
    </div>
    )
  }

  return (
    <div>
      {isCompleted ? (
        <Result questions={questions} answers={answers}
        reteke={retakeQuiz} />
      ) : (
        <div>
          {currentQuestion && (
            <Question
              question={currentQuestion}
              handleOnChange={handleQuestionResult}
              answer={answers[currentQuestion.id]}
            />
          )}

          <div className="flex m-8 justify-center">
            <button
              className="rounded bg-blue-300 px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
              onClick={handlePreviousClick}
            >
              Previous
            </button>
            <button
              className="rounded bg-green-300 px-4 py-2 cursor-pointer hover:bg-green-500 hover:text-white ml-20"
              onClick={handleNextClick}
            >
              Save & Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
