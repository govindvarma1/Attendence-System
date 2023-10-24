import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../common/Helpers";

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

  return <div>Home</div>;
}
