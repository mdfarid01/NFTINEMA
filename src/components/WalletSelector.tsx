import React from 'react';
import { Wallet } from 'lucide-react';

interface WalletOption {
  id: string;
  name: string;
  icon: string;
}

interface WalletSelectorProps {
  onSelect: (walletId: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

const walletOptions: WalletOption[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg'
  },
  {
    id: 'bitget',
    name: 'BitGet Wallet',
    icon: 'https://www.bitget.com/assets/logo/bitget_wallet_icon.svg'
  }
];

export const WalletSelector: React.FC<WalletSelectorProps> = ({
  onSelect,
  onClose,
  isOpen
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Wallet className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Connect Wallet</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => onSelect(wallet.id)}
              className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-600 transition-colors"
            >
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-8 h-8 mr-3"
              />
              <span className="font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>
        
        <p className="mt-4 text-sm text-gray-500 text-center">
          New to Web3? Visit our About page for wallet setup instructions
        </p>
      </div>
    </div>
  );
};