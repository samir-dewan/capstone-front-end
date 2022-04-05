import React from "react";
import "./ConnectionCard.scss";

const ConnectionCard = ({ photo, firstName, lastName, nationality, interests }) => {
  return (
    <div className="connection-card__container">
      <img className="connection-card__image" src={photo}/>
      <p className="connection-card__name">{firstName} {lastName}</p>
      <p className="connection-card__nationality">{nationality}</p>
      <p className="connection-card__interests">{interests}</p>
    </div>
  );
};

export default ConnectionCard;