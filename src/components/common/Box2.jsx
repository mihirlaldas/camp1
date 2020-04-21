import React from "react";

export default function Box2(props) {
  return (
    <div>
      <div className="card bg-transparent " style={{ width: "250px" }}>
        <img src={props.img} className="card-img-top w-25" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text opac">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
