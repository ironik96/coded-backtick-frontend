import Home from "./components/Home/Home";
import NavBar from "./components/shared/NavBar";
import "./App.css";
import Navbar from "./Navbar";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Profile from "./Profile/Profile";
import ResetPassword from "./Login/ResetPassword";
import { Route, Routes, useLocation } from "react-router-dom";
import authStore from "./stores/authStore";
import { observer } from "mobx-react";

function App() {
  const location = useLocation();
  const user = authStore.user;
  const nav = user ? <NavBar /> : <Navbar />;
  return (
    <div className="w-screen h-screen">
      {nav}

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default observer(App);
