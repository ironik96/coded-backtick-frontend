import registerimage from "./../images/register.png";
import { useState } from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
function Register() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.register(user);
    if (authStore.user) navigate("/dashboard");
  };
  return (
    <main className="flex justify-around">
      <div className="relative grid content-center gap-3 pt-20">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
            id="grid-first-name"
            type="text"
            name="fname"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
            id="grid-first-name"
            type="text"
            name="lname"
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
            id="grid-first-name"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
            id="grid-first-name"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="relative flex justify-around">
            <button
              type="submit"
              className="bg-blue text-white font-light py-2 px-20 rounded"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
      <div className="pt-20 flex items-stretch">
        <img alt="welcome" className="h-80 w-auto" src={registerimage} />
      </div>
    </main>
  );
}

export default observer(Register);
