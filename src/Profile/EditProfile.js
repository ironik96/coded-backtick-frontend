import coin from "./../images/coin.png";
import edit from "./../images/edit.png";
import { useState } from "react";
import authStore from "../stores/authStore";
import userStore from "../stores/userStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import TextInput from "./../components/shared/TextInput";
function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(authStore.profile);
  const [avatar, setAvatar] = useState(user.image);
  const [image, setImage] = useState({});
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.UpdateProfile(user);
    navigate("/profile");
  };
  const handleImage = async (event) => {
    setImage(event.target.files[0]);
    sendimage(event);
    authStore.UpdateProfile({ ...user, image: `http://localhost:8000/images/${user._id}-avatar.jpg?${new Date().getSeconds()}`});
  };
  const sendimage = async (event) => {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0], `${user._id}-avatar.jpg`);
    fetch("http://localhost:8000/profile", {
      method: "POST",
      type: "image/png",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) =>
        setAvatar(
          `http://localhost:8000/images/${data}?${new Date().getSeconds()}`
        )
      );
  };
  return (
    <main onSubmit={handleSubmit}>
      <form>
        <div className="flex justify-around">
          <div className="relative grid content-center gap-3 w-9/12 h-56 rounded-[20px] bg-yellow">
            <div className="w-full flex justify-between">
              <img
                alt="profile"
                className="absolute h-36 left-6 bottom-[-25px] bg-white rounded-[100px] ml-5 w-36 object-fill"
                src={avatar}
              />
              <img
                alt="edit"
                className="absolute h-20 left-14 bottom-[-3px] rounded-[100px] ml-5 w-20 object-fill"
                src={edit}
              />
              <div className="absolute h-36 left-6 bottom-[-25px] rounded-[100px] ml-5 w-36">
                <input
                  type="file"
                  className="file:py-14 file:h-36 file:px-4 file:rounded-full file:border-transparent file:w-36 hover:file:bg-transparent file:text-transparent file:bg-gray-300/[.6] text-transparen w-36"
                  onChange={handleImage}
                  accept="image/png, image/jpeg"
                  name="avatar"
                />
              </div>
              <input
                onChange={handleChange}
                name={"fname"}
                className="absolute w-40 left-52 bottom-5 text-[27px] font-bold border-2 border-viewgray rounded-md bg-transparent text-white"
                value={user.fname}
              />
              <input
                onChange={handleChange}
                name={"lname"}
                className="absolute w-40 left-96 bottom-5 text-[27px] font-bold border-2 border-viewgray rounded-md bg-transparent text-white"
                value={user.lname}
              />
              <div className="absolute right-6 top-5 py-2 px-4 h-10 rounded-[70px] bg-white text-coingray">
                <div className="flex justify-between">
                  <h1 className="mr-1">300</h1>
                  <img
                    alt="profile"
                    className="bg-white rounded-[100px] w-[25px]  h-[25px]"
                    src={coin}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around m-10">
          <div className="relative grid content-center w-9/12  rounded-[20px]">
            <div className="w-full flex pt-5 justify-between">
              <div></div>
            </div>
            <div className="flex justify-around w-auto mt-3 h-full overflow-hidden rounded-[20px] bg-softgray">
              <div className="relative w-full mt-4 h-56 ">
                <div className="w-full m-4 flex-wrap flex justify-start">
                  {/* itme one  */}
                  <div className="ml-4 w-[45%] justify-items-start text-xs rounded-[10px]">
                    <TextInput
                      placeholder={"Bio"}
                      name={"bio"}
                      value={user.bio == null ? "" : user.bio}
                      inputClass="bg-white"
                      handleChange={handleChange}
                    />
                  </div>
                  {/* itme two  */}
                  <div className="ml-4 w-[45%] justify-items-start text-xs rounded-[10px]">
                    <TextInput
                      value={user.email == null ? "" : user.email}
                      placeholder={"Email"}
                      name={"email"}
                      handleChange={handleChange}
                      inputClass="bg-white"
                    />
                  </div>
                </div>
                <div className="w-full m-4 flex-wrap flex justify-start">
                  {/* itme one  */}
                  <div className="ml-4 w-[45%] justify-items-start text-xs rounded-[10px]">
                    <TextInput
                      value={
                        user.birthday == null
                          ? ""
                          : user.birthday.length === 24
                          ? user.birthday.slice(0, user.birthday.length - 14)
                          : user.birthday
                      }
                      placeholder={"Birthday"}
                      type={"date"}
                      name={"birthday"}
                      handleChange={handleChange}
                      inputClass="bg-white"
                    />
                  </div>
                  {/* itme two  */}
                  <div className=" ml-4 w-[45%] justify-items-start text-xs rounded-[10px]">
                    <TextInput
                      value={user.walletId == null ? "" : user.walletId}
                      placeholder={"Wallet ID"}
                      name={"walletId"}
                      handleChange={handleChange}
                      inputClass="bg-white"
                    />
                  </div>
                </div>
                <div className="relative flex justify-around">
                  <button
                    type="submit"
                    className="bg-green text-white font-light py-2 px-20 rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default observer(Profile);
