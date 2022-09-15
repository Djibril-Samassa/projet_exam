import React from "react";
import Style from "./HomeButton.module.css";
import { Link } from "react-router-dom";

export default function CreateButton(props) {
  return (
    <span style={{ height: "fit-content" }}>
      <Link
        to="/auth"
        style={{ display: "flex", alignItems: "flex-end" }}
        className={` yellow link ${Style.button} onHover`}
      >
        Créer votre propre quiz
      </Link>
    </span>
  );
}
