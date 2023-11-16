import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../common/Helpers";
import NavBar from "../Components/NavBar";
import ClassRoomCard from "../Components/ClassRoomCard";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    async function Check() {
      const result = await isLogin();
      if (result === true) {
        console.log("login successfull");
      } else {
        navigate("/login");
      }
    }
    Check();
  }, []);

  const { classrooms } = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="flex flex-wrap justify-between px-20 py-5">
        {classrooms.map((classroom, ind) => (
          <ClassRoomCard key={ind} classroom={classroom} />
        ))}
      </main>
    </div>
  );
}
