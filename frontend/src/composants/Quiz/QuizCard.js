import React from "react";
import axios from "axios";
import Style from "./QuizCard.module.css";

export default function QuizCard() {
  return (
    <div className={Style.container}>
      <img src="./rocket.png" className={Style.image} />
      <div className={Style.title}>
        <h4>L'astronomie</h4>
      </div>
    </div>
  );
}
