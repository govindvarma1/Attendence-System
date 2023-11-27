import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ImageSet from "./Authentication/ImageSet";
import Home from "./Pages/Home";
import ClassRoom from "./Pages/ClassRoom";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
