import React from "react";

export default function ClassRoomTopBar({ active, setActive }) {
  return (
    <div className="sticky left-0 flex gap-5 px-5 py-3 bg-white top-20 drop-shadow-md">
      <p className="cursor-pointer" onClick={() => setActive(0)}>Stream</p>
      <p className="cursor-pointer" onClick={() => setActive(1)}>Classwork</p>
      <p className="cursor-pointer" onClick={() => setActive(2)}>People</p>
    </div>
  );
}
