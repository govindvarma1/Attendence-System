import React from "react";

export default function ClassRoomPeople({ people }) {
  const { teachers, students } = people;
  return (
    <main>
      <div>
        <h3>Teachers</h3>
        {teachers.map((teacher, ind) => (
          <div key={ind}>
            <p>{teacher.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Students</h3>
        {students.map((student, ind) => (
          <div key={ind}>
            <p>{student.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
