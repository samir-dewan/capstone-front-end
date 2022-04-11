import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        {" "}
        I'm Samir Dewan - if you're interested in any of this, connect with me on{" "}
        <a href="https://www.linkedin.com/in/samir-dewan-385b7a149/">
          LinkedIn!
        </a>
      </p>
    </div>
  );
}
