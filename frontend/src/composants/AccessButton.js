import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Style from "./HomeButton.module.css";
import { useContext } from "react";
import { haveAccountcontext } from "../App";

export default function Accessbutton() {
  const accountState = useContext(haveAccountcontext);
  const [deroll, setDeroll] = useState(false);
  return (
    <div
      onMouseEnter={() => setDeroll(true)}
      onMouseLeave={() => setDeroll(false)}
      style={{ maxWidth: "350px" }}
    >
      <span className={`${Style.rollbutton} yellow`}>
        <span className={`  ${Style.button} `}>Accéder à la plateforme</span>
        <Icon style={{ marginRight: "1em" }} icon="akar-icons:chevron-down" />
      </span>
      {deroll ? (
        <div className={Style.additionnalButtons}>
          <Link
            onClick={() => {
              accountState.setHaveAccount(true);
            }}
            to={"/auth"}
            className={`button yellow ${Style.button} link onHover`}
          >
            Se connecter
          </Link>
          <Link
            onClick={() => {
              accountState.setHaveAccount(false);
            }}
            to={"/auth"}
            className={`button yellow ${Style.button} link onHover`}
          >
            S'inscrire
          </Link>
        </div>
      ) : null}
    </div>
  );
}
