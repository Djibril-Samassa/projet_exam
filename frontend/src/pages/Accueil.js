/*eslint-disable*/
import { menuContext } from "../App";
import React from "react";
import Style from "./Accueil.module.css";
import Slide from "react-reveal/Slide";
import { useContext } from "react";

export default function Accueil() {
  const menu = useContext(menuContext);
  menu.setSelectedMenu("accueil");
  return (
    <div className="pageContainer">
      <Slide left>
        <h1 className="pageTitle">Accueil</h1>
      </Slide>
    </div>
  );
}
