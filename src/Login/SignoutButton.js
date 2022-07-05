import React from 'react';
import authStore from "../stores/authStore";
function SignoutButton() {
  return (
    <button onClick={authStore.signout}>
    Logout
    </button>
  );
}

export default SignoutButton;
