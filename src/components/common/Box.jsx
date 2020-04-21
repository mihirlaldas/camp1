import React from "react";

export default function Box(props) {
  return (
    <div>
      <div className="text-center bg-white py-2 shadow">
        <img src={props.img} alt={props.alt} />
        <p className="mt-3">{props.text}</p>
      </div>
    </div>
  );
}
