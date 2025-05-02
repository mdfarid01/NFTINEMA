import { ethers } from 'ethers';
import { Web3Error } from '../types/web3';
import { generateNFTMetadata } from './web3/nft';

export const connectToWallet = async (): Promise<string> => {
  if (!window.ethereum) {
    throw { code: Web3Error.NO_METAMASK };
  }

  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return await signer.getAddress();
  } catch (error: any) {
    if (error.code === 4001) {
      throw { code: Web3Error.USER_REJECTED };
    }
    throw { code: Web3Error.UNKNOWN };
  }
};

export const sendPayment = async (amount: number, to: string): Promise<string> => {
  if (!window.ethereum) {
    throw { code: Web3Error.NO_METAMASK };
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  
  try {
    const tx = await signer.sendTransaction({
      to,
      value: ethers.utils.parseEther(amount.toString())
    });
    
    return tx.hash;
  } catch (error: any) {
    if (error.code === 4001) {
      throw { code: Web3Error.USER_REJECTED };
    }
    throw { code: Web3Error.PAYMENT_FAILED };
  }
};

export { generateNFTMetadata };