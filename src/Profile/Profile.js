import coin from "./../images/coin.png";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { Link } from "react-router-dom";
import Logout from "./../Login/SignoutButton";
import { useState } from "react";
import * as solanaWeb3 from "@solana/web3.js";

function Profile() {
  const checkBalance = () => {
    var body = {
      public_key: "2zVTHKsJDCThcxGeDNzSMLRXQYVTVTqEKjpY9KJWvMXJ",
      network: "mainnet-beta",
      mint_address: "Gy1cp1GHpdWYz9UCA6McGVRjeeRwPwQbGdFWtFJ6zPKa",
    };
    fetch("https://api.blockchainapi.com/v1/solana/wallet/balance", {
      method: "POST",
      type: "application/json",
      headers: {
        "Content-Type": "application/json",
        APIKeyID: "QQoNUxIBBk7dHYu",
        APISecretKey: "FLmtZ2PGN5sTpeo",
      },
      body: JSON.stringify(body),
    }).then((response) => console.log(response));
  };
  // (async () => {
  //   const solana = new solanaWeb3.Connection("https://api.mainnet-beta.solana.com");

  // //the public solana address
  //   const accountPublicKey = new solanaWeb3.PublicKey(
  //     "2zVTHKsJDCThcxGeDNzSMLRXQYVTVTqEKjpY9KJWvMXJ"
  //   );

  // //mintAccount = the token mint address
  //   const mintAccount = new solanaWeb3.PublicKey(
  //     "Gy1cp1GHpdWYz9UCA6McGVRjeeRwPwQbGdFWtFJ6zPKa"
  //   );
  //   const account = await solana.getTokenAccountsByOwner(accountPublicKey, {
  //       mint: mintAccount});

  //       console.log(account.value[0].pubkey.toString());
  //       getTokenAccountBalance(account.value[0].pubkey.toString())
  // })();
  const user = authStore.profile;
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
  const [Walletconnection, setWalletconnection] = useState(
    provider.isConnected
  );
  async function phantom_balance() {
    // alt window.solana
    const phantom = getProvider();
    console.log("Wallet Connected: " + phantom.isConnected);
    if (phantom.isConnected !== false) {
      const wallet = phantom.publicKey;
      const wallet_b58 = phantom.publicKey.toString();

      // connect to the cluster
      console.log("Connecting Cluster");
      var connection = new solanaWeb3.Connection(
        //mainnet-beta not devnet
        solanaWeb3.clusterApiUrl("mainnet-beta"),
        "confirmed"
      );

      // remember, do not use base 58 encoded key with getBalance();
      console.log("Getting Balance: " + wallet_b58);
      let _balance = await connection
        .getBalance(wallet)
        .then(function (data) {
          console.log(
            "Wallet Balance: " + parseFloat(data) / solanaWeb3.LAMPORTS_PER_SOL
          );
          return data;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
    }
  }
  const LinkWallet = async () => {
    try {
      const resp = await provider.connect();
      const wallet = resp.publicKey.toString();
      authStore.UpdateProfile({ ...user, walletId: wallet });
    } catch (err) {
      console.log(err);
    }
    setWalletconnection(provider.isConnected);
  };
  return (
    <main>
      <div className="relative flex justify-around">
        <div className="absolute top-3 right-[5%] z-10">
          <Logout />
        </div>
        <div className="relative grid content-center gap-3 w-9/12 h-56 rounded-[20px] bg-yellow">
          <div className="w-full flex justify-between">
            <img
              alt="profile"
              className="absolute h-36 left-6 bottom-[-25px] bg-white rounded-[100px] ml-5 w-36 object-fill"
              src={user.image}
            />
            <h1 className="absolute left-52 bottom-5 text-[27px] font-bold text-white">{`${user.fname} ${user.lname}`}</h1>
            <div className="absolute right-6 top-5 py-2 px-4 h-10 rounded-[70px] bg-white text-coingray">
              <div className="flex justify-between">
                <h1 className="mr-1">{user.backtick}</h1>
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
            <div className="flex">
              <div className="pr-5">
                <button className="border-b-2">Created</button>
              </div>
              <div className="pr-5">
                <button className="">Shared</button>
              </div>
            </div>
            <div>
              {Walletconnection === false ? (
                <button
                  className="bg-red text-white font-light py-1 px-5 rounded-[10px] mr-2"
                  onClick={() => LinkWallet()}
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
              <button
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
              </button>
            </div>
          </div>
          <div className="flex justify-around w-auto mt-3 h-full overflow-hidden rounded-[20px] bg-softgray">
            <div className="relative grid gap-3 w-full mt-4 h-56 ">
              <div className="w-full flex-wrap flex justify-start">
                {/* itme one  */}
                <div className="grid bg-white ml-4 w-56 h-28 justify-items-center text-xs rounded-[10px]">
                  <h1 className="bg-lightgreen text-green h-8 w-[95%] pt-2 font- m-2 text-center rounded-[10px]">
                    FullStack Board
                  </h1>
                  <p className="pl-4 overflow-hidden wrap">
                    Extra feature for those who like to experience more{" "}
                  </p>
                  <button className=" text-viewgray relative bottom-1 left-20">
                    view
                  </button>
                </div>
                {/* itme two  */}
                <div className="grid bg-white ml-4 w-56 h-28 justify-items-center text-xs rounded-[10px]">
                  <h1 className="bg-lightgreen text-green h-8 w-[95%] pt-2 font- m-2 text-center rounded-[10px]">
                    FullStack Board
                  </h1>
                  <p className="pl-4 overflow-hidden wrap">
                    Extra feature for those who like to experience more{" "}
                  </p>
                  <button className=" text-viewgray relative bottom-1 left-20">
                    view
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default observer(Profile);
