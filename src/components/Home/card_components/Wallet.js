import React from "react";
import token from "../../../icons/token.png";

const tokenSize = 40;

const Wallet = ({ onClick }) => {
  return (
    <div className="flex flex-col w-full h-full justify-between items-center py-8">
      <div className="flex items-center gap-4">
        <img src={token} alt="token" width={tokenSize} height={tokenSize} />
        <div className="text-2xl font-bold">130</div>
      </div>
      <button
        className="bg-green rounded px-3 py-1 text-white"
        onClick={onClick}
      >
        Spend Tokens
      </button>
    </div>
  );
};

export default Wallet;
