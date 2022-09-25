/*eslint-disable*/
import { menuContext } from "../App";
import React, { useEffect } from "react";
import Style from "./List.module.css";
import { useState } from "react";
import QuizCard from "../composants/Quiz/QuizCard";
import Slide from "react-reveal/Slide";
import { useContext } from "react";
import { authContext } from "../App";
import InvitToAuth from "../composants/Authentification/InvitToAuth";
import axios from "axios";

export default function List() {
  const menu = useContext(menuContext);
  menu.setSelectedMenu("play");
  const [state, setState] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/quiz")
      .then((res) => {
        setState({ ...state, quizList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="pageContainer">
      <Slide left>
        <h1 className="pageTitle">Nos Quiz</h1>
      </Slide>
      <div className={Style.list}>
        {state.quizList?.map((quiz) => {
          return <QuizCard quiz={quiz} />;
        })}
      </div>
    </div>
  );
}
