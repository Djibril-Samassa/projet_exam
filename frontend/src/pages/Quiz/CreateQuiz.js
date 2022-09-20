import react from "react";
import Style from "./CreateQuiz.module.css";
import Slide from "react-reveal";

export default function CreateQuiz() {
  return (
    <div className="pageContainer">
      <Slide left></Slide>
      <form className={Style.formulaire}>
        <h1 className={Style.formTitle}>Créer votre Quiz ✏️</h1>
        <div className={Style.blocsContainer}>
          <div>
            <label for="title">Titre du Quiz</label>
            <input onChange={(e) => {}} type="text" required />
          </div>
          <span className={Style.line}></span>
          <Slide left>
            <div>
              <h1>Part 2</h1>
            </div>
          </Slide>
        </div>
      </form>
    </div>
  );
}
