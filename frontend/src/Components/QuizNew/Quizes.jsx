import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuiz } from "../../Redux/action.js";
import { Quiz } from "./Quiz";
import QuizNavigate from "./QuizNavigate.jsx";

export const Quizes = () => {
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const params = useParams();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const questionArr = singleQuiz[0]?.questionArray;
  const [num, setNum] = useState(0);
  const [sel_idx, set_idx] = useState([]);

  useEffect(() => {
    dispatch(getQuiz(params));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return isLoading ? (
    <div className=" w-11/12 h-96 pt-5 mt-16 bg-white">
      <div className="w-full shadow-lg  m-4 p-4 ml-12">
        <h1 className="text-xl text-center font-bold">Please Wait.... The Quiz is being loaded.</h1>
      </div>
    </div>
  ) : (
    <>
      <Quiz questionArr={questionArr} num={num} setNum={setNum} sel_idx={sel_idx} set_idx={set_idx} />
      {questionArr && <QuizNavigate questionArr={questionArr} num={num} setNum={setNum} sel_idx={sel_idx} set_idx={set_idx} />}
    </>
  );
};

