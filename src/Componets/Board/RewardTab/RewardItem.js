import React from "react";
import coin from "./../../../images/stack-coins.webp";
import point from "./../../../images/coin.png";

export function RewardItem({ reward }) {
  const handleBuy = () => {
    console.log("Buy");
  };
  return (
    <div className=" grid bg-white w-56 h-64 justify-items-center text-xs rounded-[10px]">
      <h1 className="text-black h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]">
        {reward.cryptoAmount} BT Crypto
      </h1>
      <img alt="coins" className="pt-1 w-24 m-2" src={coin} />
      {/* <p className="pl-4 wrap">
        Extra feature for those who like to experience more{" "}
      </p> */}
      <button
        onClick={handleBuy}
        className="bg-lightgreen text-green h-8 w-[95%] rounded-[10px] flex items-center justify-center"
      >
        {reward.price} <img alt="points" src={point} className="w-5 h-5" />
      </button>
    </div>
  );
}
