import React from "react";
import coin from "./../../../images/stack-coins.webp";

export function RewardItem() {
  return (
    <div className=" grid bg-white w-56 h-64 justify-items-center text-xs rounded-[10px]">
      <h1 className="text-gray h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]">
        10,000BT
      </h1>
      <img alt="coins" className="pt-1 w-24 m-2 " src={coin} />
      <p className="pl-4 wrap">
        Extra feature for those who like to experience more{" "}
      </p>
      <h1 className="bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]">
        Buy
      </h1>
    </div>
  );
}
