/*eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../defaultQuizImage.jpg";
import Style from "./QuizCard.module.css";
import appStorage from "../../storage";

export default function QuizCard(props) {
  // niveau back faire un post de l'id du quiz selectionné => PlayQuiz
  const redirect = useNavigate();
  const quiz = props.quiz;
  const redirectToQuiz = () => {
    console.log(quiz);
    appStorage.setItem("selectedQuiz", quiz);
    redirect(`/quiz/play/id:${quiz._id}`);
  };
  const id = quiz?.id;
  console.log(quiz);
  return (
    <div
      className={Style.container}
      onClick={() => {
        redirectToQuiz();
      }}
    >
      <div className={Style.title}>
        <h4>{quiz.title}</h4>
      </div>
    </div>
  );
}
