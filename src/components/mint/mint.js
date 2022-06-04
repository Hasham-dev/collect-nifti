import React, { useEffect, useState } from "react";
import "./mint.css";
import { ethers } from "ethers";

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}
const Mint = () => {
  const [address, setaddress] = useState(0);

  const handleLinkSite = (link) => {
    window.open(link, "_self");
  };

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const add = await signer.getAddress();
    setaddress(add);
  };

  useEffect(() => {
    checkIfWalletIsConnected(setaddress);
  }, []);

  if (isMobileDevice()) {
    const dappUrl = "https://collect.niftigram.io/"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <div style={{ position: "relative" }}>
        <div className="MintButtonContainer">
          <button
            onClick={() => handleLinkSite("https://mint.niftigram.io/")}
            className="MintButton"
          >
            <span>Mint NIFTI's</span>
          </button>
          <button onClick={connect} className="MintButton">
            <a href={metamaskAppDeepLink}>
              <span>
                {address === 0
                  ? "Connect Wallet"
                  : `${address.slice(0, 8)}....`}
              </span>
            </a>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="MintButtonContainer">
        <button
          onClick={() => handleLinkSite("https://NiFTigram.io")}
          className="MintButton"
        >
          <span>Mint NIFTI's</span>
        </button>
        <button onClick={connect} className="MintButton">
          <span>
            {address === 0 ? "Connect Wallet" : `${address.slice(0, 8)}....`}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Mint;
