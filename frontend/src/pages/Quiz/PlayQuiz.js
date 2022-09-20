/*eslint-disable*/
import { useEffect, useState } from "react";
import quiz from "../../quiz.json";
import React from "react";

export default function PlayQuiz() {
  // récuperer l'id du quiz qui a été sélectionné
  // condition qui verifie si le quiz en props est = a celui enregistrer en local
  const quizLimit = quiz.questions.length - 1;
  const [counter, setCounter] = useState(0);
  const [niveau, setNiveau] = useState(quiz.questions[counter]);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    setNiveau(quiz.questions[counter]);
    console.log(counter);
  }, [counter]);

  const incrementLevel = () => {
    counter < quizLimit ? setCounter(counter + 1) : setFinished(true);
  };

  return (
    <div>
      {!finished ? (
        <>
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
              value="Valider"
              onClick={() => {
                incrementLevel();
              }}
            />
          </form>
        </>
      ) : (
        <h1>Finished</h1>
      )}
    </div>
  );
}
