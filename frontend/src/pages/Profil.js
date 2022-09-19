import React from "react";
import { useContext } from "react";
import { menuContext } from "../App";
import Style from "./Profil.module.css";

export default function Profile() {
  const menu = useContext(menuContext);
  menu.setSelectedMenu("profile");
  return <h1>Profile</h1>;
}
