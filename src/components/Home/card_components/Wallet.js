import React from "react";
import token from "../../../icons/token.png";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import userStore from "../../../stores/userStore";

const tokenSize = 40;

const Wallet = () => {
  const { backtick } = userStore.user;

  return backtick == null ? (
    <div className="flex w-full h-full justify-center items-center">
      <Button text={"Link your wallet"} />
    </div>
  ) : (
    <LinkedWallet backtick={backtick} />
  );
};

const LinkedWallet = ({ backtick }) => {
  return (
    <div className="flex flex-col w-full h-full justify-between items-center py-8">
      <div className="flex items-center gap-4">
        <img src={token} alt="token" width={tokenSize} height={tokenSize} />
        <div className="text-2xl font-bold">{backtick}</div>
      </div>
      <Button text={"Spend Tokens"} />
    </div>
  );
};

const Button = ({ text }) => {
  return (
    <Link className="bg-green rounded px-3 py-1 text-white" to={"/Profile"}>
      {text}
    </Link>
  );
};

export default observer(Wallet);
