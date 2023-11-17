import React from "react";

export default function ClassRoomPosts({ posts }) {
  return (
    <main>
      {posts.map((post, ind) => (
        <div key={ind}>
          <p>{post.author}</p>
          <p>{post.message}</p>
        </div>
      ))}
    </main>
  );
}
