import loginimage from "./../images/rafiki.png";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.signin(user);
    if (authStore.user) navigate("/dashboard");
  };

  return (
    <main className="flex justify-around">
      <div className="relative grid content-center gap-3 pt-20">
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleChange}
            className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            onChange={handleChange}
            className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <div className="relative flex justify-around">
            <button
              className="bg-blue text-white font-light py-2 px-20 rounded"
              type="submit"
            >
              LOG IN
            </button>
          </div>
        </form>
        <Link to={`/ResetPassword`}>
          <h1 className="relative flex justify-around font-light">
            Forgot Password?
          </h1>
        </Link>
      </div>
      <div className="pt-20 flex items-stretch">
        <img alt="welcome" className="h-80 w-auto" src={loginimage} />
      </div>
    </main>
  );
}

export default observer(Login);
