/*eslint-disable*/

import React from "react";
import Style from "./Header.module.css";
import { useState } from "react";
import { useLongPress } from "use-long-press";

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState();
  const [clickingOn, setClickingOn] = useState();

  return (
    <nav className={Style.header}>
      {selectedMenu === "accueil" ? (
        <li className="selected">Accueil</li>
      ) : (
        <span className={Style.menu}>
          <li
            onClick={() => {
              setSelectedMenu("accueil");
            }}
            onMouseEnter={() => setClickingOn("accueil")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger"
          >
            Accueil
          </li>
          {clickingOn === "accueil" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "create" ? (
        <li className="selected">Créer mon quiz</li>
      ) : (
        <span className={Style.menu}>
          <li
            onClick={() => {
              setSelectedMenu("create");
            }}
            onMouseEnter={() => setClickingOn("create")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger"
          >
            Créer mon quiz
          </li>
          {clickingOn === "create" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "play" ? (
        <li className="selected">Jouer</li>
      ) : (
        <span className={Style.menu}>
          <li
            onClick={() => {
              setSelectedMenu("play");
            }}
            onMouseEnter={() => setClickingOn("play")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger"
          >
            Jouer
          </li>
          {clickingOn === "play" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      <img src="logo.png" className="logo" />
      {selectedMenu === "new" ? (
        <li className="selected">Nouveautés</li>
      ) : (
        <span className={Style.menu}>
          <li
            onClick={() => {
              setSelectedMenu("new");
            }}
            onMouseEnter={() => setClickingOn("new")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger"
          >
            Nouveautés
          </li>
          {clickingOn === "new" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "account" ? (
        <li className="selected">Mon Compte</li>
      ) : (
        <span className={Style.menu}>
          <li
            onClick={() => {
              setSelectedMenu("account");
            }}
            onMouseEnter={() => setClickingOn("account")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger"
          >
            Mon Compte
          </li>
          {clickingOn === "account" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "classement" ? (
        <li className="selected">Classement</li>
      ) : (
        <span className={Style.menu}>
          <li
            onClick={() => {
              setSelectedMenu("classement");
            }}
            onMouseEnter={() => setClickingOn("classement")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger"
          >
            Classement
          </li>
          {clickingOn === "classement" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
    </nav>
  );
}
