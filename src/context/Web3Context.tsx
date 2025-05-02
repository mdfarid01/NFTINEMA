import React, { createContext, useContext, useState } from 'react';
import { Web3ContextType, Web3Error } from '../types/web3';
import { connectToWallet } from '../utils/web3';

const Web3Context = createContext<Web3ContextType>({
  account: null,
  connect: async () => {},
  isConnecting: false,
  error: null,
  clearError: () => {},
});

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const connect = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      const address = await connectToWallet();
      setAccount(address);
    } catch (err: any) {
      setError(err.code === Web3Error.USER_REJECTED
        ? 'Please accept the connection request to continue.'
        : 'Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Web3Context.Provider value={{ account, connect, isConnecting, error, clearError }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);