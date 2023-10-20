import React, { useState } from "react";
import { WebcamCapture } from "../common/ImageCapture";
import styled from "styled-components";
import { imageSetRoute } from "../Utils/APIRoutes";

export default function ImageSet() {
  const [image, setImage] = useState(undefined);
  function ReTake() {
    setImage(undefined);
  }

  async function SaveImage() {
    try {
      const user = localStorage.getItem("user");
      const response = await fetch(imageSetRoute, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ image: image, _id: user._id }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Image>
      {image === undefined ? <WebcamCapture setImage={setImage} /> : null}
      {image !== undefined ? (
        <div className="image">
          <img src={image} />
          <div className="buttons">
            <button onClick={ReTake}>Retake</button>
            <button onClick={SaveImage}>Save</button>
          </div>
        </div>
      ) : null}
    </Image>
  );
}

const Image = styled.div`
  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 1rem;
    img {
      height: 360px;
      width: 640px;
    }
    .buttons {
      width: 640px;
      display: flex;
      justify-content: space-between;
    }
    button {
      width: fit-content;
      color: white;
      background-color: green;
      border: none;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
