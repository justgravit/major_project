import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css"

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="mt-10 mb-10">
      <div className="justify-self-center ml-96">
        <h1 className="font-bold text-2xl ml-44 pl-12">Available Quizzes</h1>
      </div>
      <div className="grid grid-cols-3">
        <article class="card">
          <div class="card-content">
            <h1 class="card-header">HTML</h1>
            <a href="/" class="card-cta">
              {userId ? (
                <Link to="/quiz/html">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              ) : (
                <Link to="/register">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              )}
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H8.58579L0.292893 10.2929C-0.0976315 10.6834 -0.0976315 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L10 3.41421V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <div class="card-content">
            <h1 class="card-header">CSS</h1>
            <a href="/" class="card-cta">
              {userId ? (
                <Link to="/quiz/css">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              ) : (
                <Link to="/register">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              )}
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H8.58579L0.292893 10.2929C-0.0976315 10.6834 -0.0976315 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L10 3.41421V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <div class="card-content">
            <h1 class="card-header">JavaScript</h1>
            <a href="/" class="card-cta">
              {userId ? (
                <Link to="/quiz/javascript">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              ) : (
                <Link to="/register">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              )}
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H8.58579L0.292893 10.2929C-0.0976315 10.6834 -0.0976315 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L10 3.41421V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <div class="card-content">
            <h1 class="card-header">React</h1>
            <a href="/" class="card-cta">
              {userId ? (
                <Link to="/quiz/react">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              ) : (
                <Link to="/register">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              )}
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H8.58579L0.292893 10.2929C-0.0976315 10.6834 -0.0976315 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L10 3.41421V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <div class="card-content">
            <h1 class="card-header">Redux</h1>
            <a href="/" class="card-cta">
              {userId ? (
                <Link to="/quiz/redux">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              ) : (
                <Link to="/register">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              )}
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H8.58579L0.292893 10.2929C-0.0976315 10.6834 -0.0976315 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L10 3.41421V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <div class="card-content">
            <h1 class="card-header">MongoDB</h1>
            <a href="/" class="card-cta">
              {userId ? (
                <Link to="/quiz/mongodb">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              ) : (
                <Link to="/register">
                  {" "}
                  <span> Take Quiz </span>
                </Link>
              )}
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H8.58579L0.292893 10.2929C-0.0976315 10.6834 -0.0976315 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L10 3.41421V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0Z"
                    fill="#292929"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
      <ToastContainer />
    </div>
  );
};
