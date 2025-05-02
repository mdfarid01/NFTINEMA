import { ethers } from 'ethers';
import { Web3Error } from './constants';

export const initiatePayment = async (amount: number, to: string) => {
  if (!window.ethereum) {
    throw { code: Web3Error.NO_METAMASK };
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const fromAddress = await signer.getAddress();

  try {
    // Convert amount to Wei (1 ETH = 10^18 Wei)
    const amountInWei = ethers.utils.parseEther(amount.toString());
    
    // Create transaction object with proper hex values
    const tx = {
      from: fromAddress,
      to: to,
      value: amountInWei.toHexString(),
      gasLimit: '0x186A0', // 100000 in hex
    };

    // Send transaction to MetaMask
    const txResponse = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });

    return txResponse;
  } catch (error: any) {
    console.error('Payment error:', error);
    if (error.code === 4001) {
      throw { code: Web3Error.USER_REJECTED };
    }
    throw { code: Web3Error.PAYMENT_FAILED };
  }
};