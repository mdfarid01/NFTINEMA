import { ethers } from 'ethers';
import { Web3Error } from './constants';

export const connectWallet = async () => {
  if (!window.ethereum) {
    throw { code: Web3Error.NO_METAMASK };
  }

  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
  } catch (error: any) {
    console.error('Error connecting to MetaMask:', error);
    if (error.code === 4001) {
      throw { code: Web3Error.USER_REJECTED };
    }
    throw { code: Web3Error.UNKNOWN };
  }
};