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

export default function Accueil() {
  const menu = useContext(menuContext);
  menu.setSelectedMenu("accueil");
  return (
    <div className="pageContainer">
      <Slide left>
        <h1 className="pageTitle">Homepage</h1>
      </Slide>
      <QuizCard quiz={quiz} />
    </div>
  );
}
