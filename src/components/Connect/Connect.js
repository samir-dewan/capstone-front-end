import axios from "axios";
import React, { useState, useEffect } from "react";
import ConnectionList from "./ConnectionList/ConnectionList";
import ProfileMap from "./ProfileMap/ProfileMap";

import { Route, Link, Redirect } from "react-router-dom";
import "./Connect.scss";

export default function Connect() {
  return (
    <div className="connect">
      <ProfileMap />
    </div>
  )
}
