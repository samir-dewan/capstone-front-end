import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import mainLogo from "../../assets/Bondo.svg";
import connect from "../../assets/Connect.svg";
import meet from "../../assets/Meet.svg";
import chat from "../../assets/Chat.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={mainLogo}/>
        <img className="header__tab" src={connect}/>
        <img className="header__tab" src={meet}/>
        <img className="header__tab" src={chat}/>
      </div>
    </div>
  );
}
