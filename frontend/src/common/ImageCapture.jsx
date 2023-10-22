import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export function WebcamCapture({ height, width, setImage }) {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    setImage(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  return (
    <div className="image">
      <Webcam
        audio={false}
        height={360}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}
