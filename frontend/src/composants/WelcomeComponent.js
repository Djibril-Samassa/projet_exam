/*eslint-disab  le*/
import { react, useState } from "react";
import Style from "./WelcomeComponent.module.css";
import { Link } from "react-router-dom";
import Accessbutton from "./AccessButton";
import motion from "framer-motion"
import CreateButton from "./Createbutton";

export default function WelcomeComponent(props) {
  const [unrollMenu, setUnrollMenu] = useState(false);
  return (
    <div className={`fullscreen ${Style.container}`}>
      <span className={Style.tandl}>
        <h1 className={Style.websitename}>NOM DU PROJET</h1>
        <img src="/logo.png" className="logo2" />
      </span>
      <div className={Style.buttonContainer}>
        <Accessbutton />
        <CreateButton props={props.setShowModal} />
      </div>
    </div>
  );
}
