import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../Assets/Logo.png";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import NewClassRoom from "./NewClassRoom";

export default function NavBar() {
  const navigate = useNavigate();
  const [newClass, setNewClass] = useState(false);

  function handleClassroom() {
    setNewClass(!newClass);
  }

  return (
    <>
      <nav className="sticky top-0 left-0 flex items-center justify-between px-10 py-5 bg-white shadow-md ">
        <div
          onClick={() => {
            navigate("/login");
          }}
        >
          <img className="w-40" src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <AiOutlinePlus onClick={handleClassroom} />
          <div className="p-5 bg-black rounded-full"></div>
        </div>
      </nav>
      {newClass && <NewClassRoom />}
    </>
  );
}

const Container = styled.div``;
