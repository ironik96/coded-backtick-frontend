import Home from "./components/Home/Home";
import Navbar from "./components/shared/Navbar";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Profile from "./Profile/Profile";
import Shop from "./Shop/Shop";
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
import Test from "./Shop/Paypal/test"
import io from "socket.io-client";

export const socket = io("http://localhost:8000");

function App() {
  
  const id = authStore.user?._id;
  // const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    userStore.updateUserStore(id);
    authStore.Profile(id);
    notificationStore.fetchNotifications(id);
  }, [id]);
  useEffect(() => {
    socket.on("connection", () => {});
    socket.on("message", (msg) => console.log(msg));

    socket.on("disconnect", () => {
      // setIsConnected(false);
      console.log("disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

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
      <Route path="/Test" element={<Test />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
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
