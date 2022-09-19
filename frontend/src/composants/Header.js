/*eslint-disable*/

import React from "react";
import Style from "./Header.module.css";
import { useState } from "react";
import { useContext } from "react";
import { menuContext } from "../App";
import { Link } from "react-router-dom";

export default function Header() {
  const menu = useContext(menuContext);
  const [clickingOn, setClickingOn] = useState();
  const selectedMenu = menu.selectedMenu;
  const setSelectedMenu = menu.setSelectedMenu;

  return (
    <nav className={Style.header}>
      {selectedMenu === "accueil" ? (
        <li to="" className="selected">
          Accueil
        </li>
      ) : (
        <span className={Style.menu}>
          <Link
            to="/"
            onClick={() => {
              setSelectedMenu("accueil");
            }}
            onMouseEnter={() => setClickingOn("accueil")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger link"
          >
            Accueil
          </Link>
          {clickingOn === "accueil" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "creation" ? (
        <li to="creation" className="selected">
          Créer mon quiz
        </li>
      ) : (
        <span className={Style.menu}>
          <Link
            to="creation"
            onClick={() => {
              setSelectedMenu("creation");
            }}
            onMouseEnter={() => setClickingOn("create")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger link"
          >
            Créer mon quiz
          </Link>
          {clickingOn === "creation" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "jouer" ? (
        <li className="selected">Jouer</li>
      ) : (
        <span className={Style.menu}>
          <Link
            to="jouer"
            onClick={() => {
              setSelectedMenu("jouer");
            }}
            onMouseEnter={() => setClickingOn("play")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger link"
          >
            Jouer
          </Link>
          {clickingOn === "jouer" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      <img src="logo.png" className="logo" />
      {selectedMenu === "nouveautes" ? (
        <li className="selected">Nouveautés</li>
      ) : (
        <span className={Style.menu}>
          <Link
            to="new"
            onClick={() => {
              setSelectedMenu("nouveautes");
            }}
            onMouseEnter={() => setClickingOn("new")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger link"
          >
            Nouveautés
          </Link>
          {clickingOn === "nouveautes" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
      {selectedMenu === "profile" ? (
        <li className="selected">Mon Compte</li>
      ) : (
        <span className={Style.menu}>
          <Link
            to="profile"
            onClick={() => {
              setSelectedMenu("profile");
            }}
            onMouseEnter={() => setClickingOn("profile")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger link"
          >
            Mon Compte
          </Link>
          {clickingOn === "profile" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}

      {selectedMenu === "classement" ? (
        <li className="selected">Classement</li>
      ) : (
        <span className={Style.menu}>
          <Link
            to="classement"
            onClick={() => {
              setSelectedMenu("classement");
            }}
            onMouseEnter={() => setClickingOn("classement")}
            onMouseLeave={() => setClickingOn("")}
            className="makeBigger link"
          >
            Classement
          </Link>
          {clickingOn === "classement" ? (
            <span className={Style.underline}></span>
          ) : null}
        </span>
      )}
    </nav>
  );
}
