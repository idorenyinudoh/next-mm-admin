import { ethers } from "ethers";
import TronWeb from "tronweb";

export async function connectMetaMask() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}

export async function connectTronLink() {
  if (!window.tronWeb || !window.tronWeb.defaultAddress.base58) {
    throw new Error("TronLink is not installed or not logged in");
  }
  const tronWeb = new TronWeb(window.tronWeb.fullNode, window.tronWeb.solidityNode, window.tronWeb.eventServer);
  const address = window.tronWeb.defaultAddress.base58;
  return { tronWeb, address };
}
