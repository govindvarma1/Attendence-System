import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { openClassRoom } from "../Utils/APIRoutes";

export default function ClassRoom() {
  const [classInfo, setClassInfo] = useState(undefined);
  const { ClassRoomId } = useParams();
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch(openClassRoom, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ClassRoomId: ClassRoomId,
            userId: _id,
          }),
        });
        const data = await response.json();
        if (response.status >= 400) {
          console.log(data.msg);
          navigate("/");
        } else {
          setClassInfo(data.classroom);
          console.log(data.classroom);
        }
      } catch (error) {
        console.log("error");
        navigate("/");
      }
    }
    FetchData();
  }, []);

  return (
    <div>
      {classInfo !== undefined && (
        <>
          <NavBar />
          {ClassRoomId}
        </>
      )}
    </div>
  );
}
