import React from "react";
import styled from "styled-components";
import logo from "../Assets/Logo.png";
import { AiOutlinePlus } from "react-icons/ai";

export default function NavBar() {
  function handleClassroom() {
    console.log("clicked");
  }

  return (
    <nav className="flex justify-between items-center p-10 pt-5 pb-0">
      <div>
        <img className="w-40" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <AiOutlinePlus className="font-semibold" onClick={handleClassroom} />
        <div className="bg-black p-5 rounded-full"></div>
      </div>
    </nav>
  );
}

const Container = styled.div``;
