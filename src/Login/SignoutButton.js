import React from "react";
import authStore from "../stores/authStore";
import AlertWithButton from "./../components/shared/Alerts/AlertWithButton";
function SignoutButton() {
  const handleLogout = () => {
    AlertWithButton("Log out ?", "warning", null, null, authStore.signout);
  };
  return (
    <button
      className="bg-red text-white font-light rounded-[10px] w-fit px-3 py-1 absolute bottom-5 right-6"
      onClick={handleLogout}
    >
      Log out
    </button>
  );
}

export default SignoutButton;
