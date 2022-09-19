/*eslint-disable*/
import { useState } from "react";
import quiz from "../quiz.json";
import React from "react";

export default function PlayQuiz() {
  // récuperer l'id du quiz qui a été sélectionné
  // condition qui verifie si le quiz en props est = a celui enregistrer en local
  const quizLimit = quiz.questions.length;
  const [counter, setCounter] = useState(0);
  const [niveau, setNiveau] = useState(quiz.questions[counter]);
  return (
    <div>
      <h1>Play quiz</h1>
      <p>{niveau.question}</p>
      <form>
        {niveau.reponses.map((item) => {
          return (
            <>
              <label for="reponse">{item.choix}</label>
              <input type="radio" name="reponse" />
            </>
          );
        })}
        <input
          type="button"
          onClick={() => {
            setCounter(counter + 1);
            setNiveau(quiz.questions[counter]);
            console.log(counter);
          }}
        />
      </form>
    </div>
  );
}
