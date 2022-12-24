import React from "react";

const Jokes = (props) => {
  return (
    <div className="joke">
      {props.setup && <h2>setup: {props.setup}</h2>}
      <p>punchline: {props.punchline}</p>
      <hr />
    </div>
  );
};

export default Jokes;
