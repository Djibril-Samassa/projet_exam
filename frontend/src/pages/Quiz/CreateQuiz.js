/*eslint-disable*/
import react, { useEffect, useState } from "react";
import Style from "./CreateQuiz.module.css";
import Slide from "react-reveal";

export default function CreateQuiz() {
  const [question, setQuestion] = useState({});
  const [state, setState] = useState({});
  const [choosen, setChoosen] = useState();
  const file = document.querySelector("#file");
  window.addEventListener("change", (e) => {
    // Get the selected file
    const [file] = e.target.files;
    // Get the file name and size
    const { name: fileName, size } = file;
    // Convert size in bytes to kilo bytes
    const fileSize = (size / 1000).toFixed(2);
    // Set the text content
    const fileNameAndSize = `${fileName}`;
    document.querySelector(".file-name").textContent = fileNameAndSize;
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log(question);
  }, [question]);

  const handleCheckResponses = (reponse) => {
    setQuestion({
      ...question,
      bonneReponse: reponse,
    });
    setChoosen(reponse);
    console.log(reponse);
  };
  return (
    <div className="pageContainer">
      <Slide left></Slide>
      <form className={Style.formulaire}>
        <h1 className={Style.formTitle}>Créer votre Quiz ✏️</h1>
        <div className={Style.blocsContainer}>
          <div className={Style.spanContainer}>
            <span>
              <label for="title">Titre du Quiz</label>
              <input
                className={Style.input}
                onChange={(e) => setState({ ...state, title: e.target.value })}
                type="text"
                required
              />
            </span>

            <span>
              <label for="title">Sujet du Quiz</label>
              <input
                className={Style.input}
                onChange={(e) => setState({ ...state, about: e.target.value })}
                type="text"
                required
              />
            </span>

            <span>
              <label for="title">Description</label>
              <textarea
                className={Style.descriptionInput}
                onChange={(e) =>
                  setState({ ...state, description: e.target.value })
                }
                type="textarea"
                required
              />
            </span>

            <span className={Style.pdpInput}>
              {" "}
              <label for="imgInput">+ Choisir une photo de profil</label>
              <input
                onChange={(e) => setState({ ...state, image: e.target.value })}
                type="file"
                required
                id="imgInput"
                accept="image/png, image/gif, image/jpeg"
              />
              <p class="file-name"></p>
            </span>
          </div>
          <span className={Style.line}></span>
          <Slide left>
            <div className={Style.secondContainer}>
              <span className={Style.question}>
                <label for="title">Question</label>
                <input
                  className={Style.input}
                  onChange={(e) =>
                    setQuestion({ ...question, question: e.target.value })
                  }
                  type="text"
                  required
                />
              </span>
              <div className={Style.questionContainer}>
                <span>
                  <label for="title">Réponse A</label>
                  <input
                    className={Style.input}
                    onChange={(e) =>
                      setQuestion({ ...question, reponseA: e.target.value })
                    }
                    type="text"
                    required
                  />
                </span>
                <span>
                  <label for="title">Réponse B</label>
                  <input
                    className={Style.input}
                    onChange={(e) =>
                      setQuestion({ ...question, reponseB: e.target.value })
                    }
                    type="text"
                    required
                  />
                </span>
                <span>
                  <label for="title">Réponse C</label>
                  <input
                    className={Style.input}
                    onChange={(e) =>
                      setQuestion({ ...question, reponseC: e.target.value })
                    }
                    type="text"
                    required
                  />
                </span>
                <span>
                  <label for="title">Réponse D</label>
                  <input
                    className={Style.input}
                    onChange={(e) =>
                      setQuestion({ ...question, reponseD: e.target.value })
                    }
                    type="text"
                    required
                  />
                </span>
              </div>
              {question.question &&
              question.reponseA &&
              question.reponseB &&
              question.reponseC &&
              question.reponseD ? (
                <span className={Style.reponseSelector}>
                  <h3>Quelle est la bonne réponse ?</h3>
                  {choosen === question.reponseA ? (
                    <span className={Style.selected}>Réponse A</span>
                  ) : (
                    <span
                      className={Style.notSelected}
                      onClick={() => {
                        setChoosen(question.reponseA);
                        handleCheckResponses(question.reponseA);
                      }}
                    >
                      Réponse A
                    </span>
                  )}
                  {choosen === question.reponseB ? (
                    <span className={Style.selected}>Réponse B</span>
                  ) : (
                    <span
                      className={Style.notSelected}
                      onClick={() => {
                        handleCheckResponses(question.reponseB);
                      }}
                    >
                      Réponse B
                    </span>
                  )}
                  {choosen === question.reponseC ? (
                    <span className={Style.selected}>Réponse C</span>
                  ) : (
                    <span
                      className={Style.notSelected}
                      onClick={() => {
                        handleCheckResponses(question.reponseC);
                      }}
                    >
                      Réponse C
                    </span>
                  )}

                  {choosen === question.reponseD ? (
                    <span className={Style.selected}>Réponse D</span>
                  ) : (
                    <span
                      className={Style.notSelected}
                      onClick={() => {
                        handleCheckResponses(question.reponseD);
                      }}
                    >
                      Réponse D
                    </span>
                  )}
                </span>
              ) : null}
            </div>
          </Slide>
        </div>
      </form>
    </div>
  );
}
