import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { fetchPeopleRoute, openClassRoom } from "../Utils/APIRoutes";
import ClassRoomTopBar from "../Components/ClassRoomTopBar";
import ClassRoomPosts from "../Components/ClassRoomPosts";
import ClassRoomPeople from "../Components/ClassRoomPeople";

export default function ClassRoom() {
  const [classInfo, setClassInfo] = useState(undefined);
  const [people, setPeople] = useState(undefined);
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    FetchPeople();
  }, [classInfo]);

  async function FetchPeople() {
    try {
      const response = await fetch(fetchPeopleRoute, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ClassRoomId: classInfo._id }),
      });
      if (response.status >= 400) {
        console.log("some error occured");
      } else {
        const data = await response.json();
        setPeople(data.people);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {classInfo !== undefined && (
        <>
          <ClassRoomTopBar active={active} setActive={setActive} />
          {active === 0 && <ClassRoomPosts posts={classInfo.posts} />}
          {active === 2 && <ClassRoomPeople people={people} />}
        </>
      )}
    </div>
  );
}
