import Home from "./components/Home/Home";
import Navbar from "./components/shared/Navbar";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";
import ResetPassword from "./Login/ResetPassword";
import { Route, Routes } from "react-router-dom";

import { observer } from "mobx-react";
import CreateBoard from "./components/CreateBoard/CreateBoard";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="h-[4rem]">
        <Navbar />
      </div>
      <div className="h-[calc(100%-4rem)] overflow-auto">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/board/:boardSlug" element={<CreateBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default observer(App);
