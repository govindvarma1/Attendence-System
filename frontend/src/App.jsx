import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ImageSet from "./Authentication/ImageSet";
import Home from "./Pages/Home";
import ClassRoom from "./Pages/ClassRoom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/imageverify" element={<ImageSet />} />
          <Route path="/" element={<Home />} />
          <Route path="class/:ClassRoomId" element={<ClassRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
