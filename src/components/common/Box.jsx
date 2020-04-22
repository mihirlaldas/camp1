import React from "react";

export default function Box(props) {
  return (
    <div>
      <div
        className="text-center bg-white shadow py-2"
        style={{ maxHeight: "200px" }}
      >
        <img src={props.img} alt={props.alt} className="img-fluid" />
        <p className="mt-3 small">{props.text}</p>
      </div>
    </div>
  );
}
