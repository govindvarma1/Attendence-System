import React from "react";

export default function ClassRoomTopBar({ active, setActive }) {
  return (
    <div className="flex gap-5 px-5 py-3">
      <p onClick={() => setActive(0)}>Stream</p>
      <p onClick={() => setActive(1)}>Classwork</p>
      <p onClick={() => setActive(2)}>People</p>
    </div>
  );
}
