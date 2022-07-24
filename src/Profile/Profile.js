import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { useState } from "react";
import * as solanaWeb3 from "@solana/web3.js";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileDetail } from "./ProfileDetail";

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
    <main className="h-full">
      <ProfileHeader user={user} />
      <ProfileDetail
        Walletconnection={Walletconnection}
        LinkWallet={LinkWallet}
      />
    </main>
  );
}

export default observer(Profile);
