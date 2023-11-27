import React from "react";
import { GetDate } from "../common/Helpers";

function SinglePost({post}) {
  var date = GetDate(post.createdAt);
  return (
    <main className="flex flex-col w-1/2 gap-2 p-10 border-2 border-black rounded-md">
    <div className="flex gap-2">
      <img className="w-16 rounded-full" src="https://i.stack.imgur.com/pEihy.png" alt="profile" />
      <div>
        <p className="text-lg font-medium">{post.author}</p>
        <p className="text-sm">{date}</p>
      </div>
    </div>
      <p>{post.message}</p>
    </main>
  )
}

export default function ClassRoomPosts({ posts }) {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-6 my-8">
      {posts.map((post, ind) => (
        <SinglePost post={post} key={ind}/>
      ))}
    </main>
  );
}
