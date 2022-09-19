/*eslint-disable*/
import React from "react";
import quiz from "../../quiz.json";
import { useNavigate } from "react-router-dom";
import Style from "./QuizCard.module.css";
import PlayQuiz from "../../pages/PlayQuiz";

export default function QuizCard(props) {
  // niveau back faire un post de l'id du quiz selectionné => PlayQuiz
  const redirect = useNavigate();
  const redirectToQuiz = async () => {
    console.log(quiz);
    await localStorage.setItem("selectedQuiz", quiz.title);
    redirect("/playQuiz");
  };
  const Quiz = props.quiz;
  return (
    <div
      className={Style.container}
      onClick={() => {
        redirectToQuiz();
      }}
    >
      <img alt="phooto" src="./rocket.png" className={Style.image} />
      <div className={Style.title}>
        <h4>L'astronomie</h4>
      </div>
    </div>
  );
}
