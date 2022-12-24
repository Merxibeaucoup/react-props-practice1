import React from "react";

const Card = (props) => {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img
        src={`assets/images/${props.coverImg}`}
        alt="img1"
        className="card__img"
      />
      <div className="card__stats">
        <span>❤️‍🔥</span>
        <span>{props.stats.rating} </span>
        <span> ({props.stats.reviewCount})‣ </span>
        <span> {props.location} </span>
      </div>
      <h3>{props.title}</h3>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </section>
  );
};

export default Card;
