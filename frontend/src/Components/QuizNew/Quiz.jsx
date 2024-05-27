import React from "react";
import "./Quiz.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuizResult, postUserResult } from "../../Redux/action.js";
import { Navigate, Link } from "react-router-dom";

export const Quiz = ({ questionArr, num, setNum, set_idx, sel_idx }) => {

  const qsnSize = questionArr.length;
  const data = useSelector((state) => state?.mernQuize?.QuizData);
  //const result = useSelector((state) => state?.mernQuize?.result);
  const userID = useSelector((state) => state?.mernQuize?.userId);
  console.log("data", data)
  const quizID = data[0]._id;
  const dispatch = useDispatch();


  const [ans, setAns] = useState([]);

  const [flag, setFlag] = useState(false);

  var ansCpy;
  var idxcpy;

  const Ref = useRef(null);


  const [timer, setTimer] = useState("10:00:00");

  const getTimeRemaining = (e) => {
    const total =
      Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor(
      (total / 1000 / 60) % 60
    );
    const hours = Math.floor(
      (total / 1000 / 60 / 60) % 24
    );
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } =
      getTimeRemaining(e);
    if (total >= 0) {

      setTimer(
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9
          ? minutes
          : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {

    setTimer("00:15:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 0o0);
    deadline.setMinutes(deadline.getMinutes() + 15);
    deadline.setHours(deadline.getHours() + 0o0);
    return deadline;
  };

  const getAttempted = () => {
    var attempts = 0;
    for (let i = 0; i < qsnSize; i++) {
      if (sel_idx[i] !== 'NA') {
        attempts++;
      }
    }

    return attempts;
  }




  useEffect(() => {
    ansCpy = [];
    idxcpy = [];
    for (let i = 0; i < qsnSize; i++) {
      ansCpy.push('NA');
      idxcpy.push('NA');
    }
    setAns(ansCpy);
    set_idx(idxcpy);
    clearTimer(getDeadTime());
  }, []);



  if (timer === "00:00:00") {

    dispatch(postUserResult(ans));
    const obj = {
      quizId: quizID,
      userId: userID,
      quizResult: ans,
    };
    dispatch(postQuizResult(obj));
    return <Navigate to='/showallanswer'  />

  }

  return (
    <div className=" w-11/12 h-96 pt-5 mt-16 bg-white">
      <div className="w-full shadow-lg  m-4 p-4 ml-12">
        <div className="flex justify-between align-middle">       
          <div className="flex w-4/5 pl-24 ml-12">
            <h1 className="text-2xl m-2 text-black-400/25">{num + 1}</h1>
            <h1 className="text-2xl m-2 text-black-400/25">
              {questionArr[num]?.questions}
            </h1>
          </div>
          <div className="border-teal-500 rounded-2xl absolute right-26 top-32 border-2 mb-8 p-1 pl-2 pr-2 ">
            <h1 className="text-xl font-bold">
              Attempted : {getAttempted() + "/" + questionArr.length}
            </h1>
          </div>
          <div className="border-teal-500 rounded-2xl absolute right-24 top-32 border-2 mb-8 p-1 pl-2 pr-2">
            <h1 className="text-xl font-bold">
              Countdown Timer
            </h1>
            <h2 className="text-xl font-bold self-center">
              {timer}
            </h2>
          </div>
          <div className=" font-serif text-slate-900">
            {/* {num + "/" + (questionArr.length)} */}
          </div>
        </div>
        <ol className=" w-3/5 ml-64">
          {questionArr[num]?.options?.map((answer, index) => (
            <li
              key={index}
              className={
                ((sel_idx[num] !== 'NA') && (index === sel_idx[num]))
                  ? "show border border-gray-300 text-center cursor-pointer m-2 p-2 rounded-lg"
                  : `notshow border border-gray-300 text-center cursor-pointer m-2 p-2 rounded-lg`
              }
              onClick={(e) => {

                idxcpy = sel_idx;
                idxcpy[num] = index;
                set_idx(idxcpy);

                
                ansCpy = ans;
                ansCpy[num] = answer.option;
                setAns(ansCpy);
                setFlag(!flag);



              }}
            >
              {answer.option}
              {/* {sel_idx[num]} {index} */}
            </li>
          ))}
        </ol>
        <div className="grid mt-3 pb-40 items-center">

          {(num === questionArr.length - 1) ? (
            <Link to="/showallanswer">
              {" "}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                onClick={() => {
                  dispatch(postUserResult(ans));
                  const obj = {
                    quizId: quizID,
                    userId: userID,
                    quizResult: ans,
                  };
                  dispatch(postQuizResult(obj));
                }}
              >
                Final Submit
              </button>
            </Link>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
              onClick={() => {
                setNum(num + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
