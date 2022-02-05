import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const NotFound = () => (
  <div className="notfound-box">
    <h1 className="notfound-box-name">404 - Страницата не е пронајдена</h1>
    <p className="notfound-go-back">
      <Link to="/">Врати се на почетната страница!</Link>
    </p>
  </div>
);

export default NotFound;
