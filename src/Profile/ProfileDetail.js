import { useState } from "react";
import { Link } from "react-router-dom";
import BoardList from "./BoardList";

export function ProfileDetail({ Walletconnection, LinkWallet }) {
  const [showCreated, setShowCreated] = useState(true);
  const clickCreated = () => setShowCreated(true);
  const clickJoined = () => setShowCreated(false);
  return (
    <div className="flex justify-around m-10 h-1/2">
      <div className="relative content-start w-10/12 h-full rounded-[20px]">
        <div className="w-full flex pt-5 justify-between h-1/6">
          <div className="flex">
            <div className="pr-5">
              <button
                className={`${showCreated && "border-b-2"}`}
                onClick={clickCreated}
              >
                Created
              </button>
            </div>
            <div className="pr-5">
              <button
                className={`${!showCreated && "border-b-2"}`}
                onClick={clickJoined}
              >
                Joined
              </button>
            </div>
          </div>
          <div>
            {Walletconnection === false ? (
              <button
                className="bg-red text-white font-light py-1 px-5 rounded-[10px] mr-2"
                onClick={LinkWallet}
              >
                Link Wallet
              </button>
            ) : (
              <button className="bg-green text-white font-light py-1 px-5 rounded-[10px] mr-2">
                Wallet Connected
              </button>
            )}
            <Link to={"/EditProfile"}>
              <button className="bg-green text-white font-light py-1 px-5 rounded-[10px]">
                Edit profile
              </button>
            </Link>
            {/* <button
           className="bg-green text-white font-light py-1 px-2 rounded-[10px]"
           onClick={() => phantom_balance()}
          >
           Check Sol Balance
          </button>
          <button
           className="bg-green text-white font-light py-1 px-2 rounded-[10px]"
           onClick={() => checkBalance()}
          >
           Check BT Balance
          </button> */}
          </div>
        </div>
        <BoardList showCreated={showCreated}/>
      </div>
    </div>
  );
}
