/*eslint-disable*/
import { menuContext } from "../App";
import React from "react";
import Style from "./Accueil.module.css";
import { useState } from "react";
import QuizCard from "../composants/Quiz/QuizCard";
import Slide from "react-reveal/Slide";
import { useContext } from "react";
import { authContext } from "../App";
import InvitToAuth from "../composants/Authentification/InvitToAuth";
import quiz from "../quiz.json";

export default function List() {
  const menu = useContext(menuContext);
  menu.setSelectedMenu("play");
  return (
    <div className="pageContainer">
      <Slide left>
        <h1 className="pageTitle">Nos Quiz</h1>
      </Slide>
      <QuizCard quiz={quiz} />
    </div>
  );
}
