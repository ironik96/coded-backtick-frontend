import Home from "./components/Home/Home";
import Navbar from "./components/shared/Navbar";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";
import ResetPassword from "./Login/ResetPassword";
import BoardPage from "./Componets/Board/BoardPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import userStore from "./stores/userStore";
import authStore from "./stores/authStore";
import { useEffect } from "react";
import Loading from "./components/shared/Loading";
import notificationStore from "./stores/notificationStore";

function App() {
  const id = authStore.user?._id;
  useEffect(() => {
    userStore.updateUserStore(id);
    notificationStore.fetchNotifications(id);
  }, [id]);

  const Routes = () => {
    if (!authStore.user) return <AuthRoutes />;
    if (!userStore.user) return <Loading />;
    return <AppRoutes />;
  };
  return (
    <div className="w-screen h-screen select-none">
      <div className="h-[4rem]">
        <Navbar />
      </div>
      <div className="h-[calc(100%-4rem)] overflow-auto">{Routes()}</div>
    </div>
  );
}

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/form/board/:boardSlug" element={<CreateBoard />} />
      <Route path="/board/:boardSlug" element={<BoardPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default observer(App);
