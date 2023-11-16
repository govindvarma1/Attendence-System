import React from "react";
import { useNavigate } from "react-router-dom";

export default function ClassRoomCard({ classroom }) {
  const { _id, name, subject, description } = classroom;
  const navigate = useNavigate();

  function handleClick() {
    console.log("clicked");
    navigate(`/class/${_id}`);
  }

  return (
    <div className="p-2 cursor-pointer w-80 bg-slate-300" onClick={handleClick}>
      <h3>{name}</h3>
      <p>{subject}</p>
      <p>{description}</p>
    </div>
  );
}
