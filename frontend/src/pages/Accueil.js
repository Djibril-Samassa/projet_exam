/*eslint-disable*/

import React from "react";
import Style from "./Accueil.module.css";
import WelcomeComponent from "../composants/WelcomeComponent";
import { useState } from "react";
import { useContext } from "react";
import { modalContext } from "../App";
import Header from "../composants/Header";

export default function Accueil() {
  const modal = useContext(modalContext);
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      {modal.showModal ? (
        <WelcomeComponent disable={setShowModal} />
      ) : (
        <Header />
      )}
    </div>
  );
}
