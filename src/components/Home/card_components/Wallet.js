import React from "react";
import token from "../../../icons/token.png";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "../../../stores/authStore";
import { useState } from "react";
const tokenSize = 40;
const Wallet = () => {
  const [user, setUser] = useState(authStore.profile);
  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;
      if (provider?.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };
  const provider = getProvider(); // see "Detecting the Provider"

  const LinkWallet = async () => {
    try {
      const resp = await provider.connect();
      const wallet = resp.publicKey.toString();
      checkBalance(wallet);
    } catch (err) {
      console.log(err);
    }
  };
  const checkBalance = async (wallet) => {
    var body = {
      public_key: wallet,
      network: "mainnet-beta",
      mint_address: "FUDyPRvxaXpS6wiQVY8a5q3ZwgojRFua475gSNeMeXfK",
    };
    const rawResponse = await fetch("https://api.blockchainapi.com/v1/solana/wallet/balance", {
      method: "POST",
      type: "application/json",
      headers: {
        "Content-Type": "application/json",
        APIKeyID: "QQoNUxIBBk7dHYu",
        APISecretKey: "FLmtZ2PGN5sTpeo",
      },
      body: JSON.stringify(body),
    })
    const content = await rawResponse.json();
    await authStore.UpdateProfile({ ...user, backtick: content.balance, walletId: wallet  });
    setUser({ ...user, backtick: content.balance, walletId: wallet  })
  };
  return user.backtick == null ? (
    <div className="flex w-full h-full justify-center items-center">
    <button onClick={() => LinkWallet()} className="bg-green rounded px-3 py-1 text-white" > Link Wallet</button>    
    </div>
  ) : (
    <LinkedWallet backtick={user.backtick} />
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
    <Link className="bg-green rounded px-3 py-1 text-white" to={"/shop"}>
      {text}
    </Link>
  );
};

export default observer(Wallet);
