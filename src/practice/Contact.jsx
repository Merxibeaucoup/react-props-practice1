import React from "react";

const Contact = (props) => {
  console.log(props);
  return (
    <div className="contact">
      <div className="contact-card">
        <img src={props.img} alt="imga" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
