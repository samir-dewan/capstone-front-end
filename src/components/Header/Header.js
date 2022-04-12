import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import mainLogo from "../../assets/Bondo.svg";
import connect from "../../assets/Connect.svg";
import meet from "../../assets/Meet.svg";
import chat from "../../assets/Chat.svg";
import profile from "../../assets/Profile.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">      
        <Link to="/home"><img className="header__logo" src={mainLogo} /></Link>
        <Link to="/connect"><img className="header__tab" src={connect} /></Link>
        <Link to="/meet"><img className="header__tab" src={meet} /></Link>
        <Link to="/chat"><img className="header__tab" src={chat} /></Link>
        <Link to="/user/add"><img className="header__tab" src={profile} /></Link>
      </div>
    </div>
  );
}
