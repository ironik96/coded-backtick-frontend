import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome/Welcome'
import Login from './Login/Login'
import Register from './Login/Register'
import Profile from './Profile/Profile'
import ResetPassword from './Login/ResetPassword'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
