import React, { useState } from 'react';
import { Showtime } from '../../types/movie';
import { calculateTotal } from '../../utils/booking';
import { useWeb3 } from '../../context/Web3Context';
import { AlertCircle, X } from 'lucide-react';
import { generateNFTMetadata } from '../../utils/web3';
import { NFTTicket } from '../NFTTicket';

interface BookingSummaryProps {
  selectedSeats: string[];
  selectedShowtime: Showtime;
  movieTitle: string;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedSeats,
  selectedShowtime,
  movieTitle,
}) => {
  const { account, connect, isConnecting, error, clearError } = useWeb3();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showNFTTicket, setShowNFTTicket] = useState(false);
  const [nftTokenId, setNftTokenId] = useState<string>('');
  const totalEth = selectedShowtime.price * selectedSeats.length;

  const generateDemoNFT = async () => {
    if (!account) {
      await connect();
      return;
    }

    try {
      setIsProcessing(true);
      setShowNFTTicket(false);

      // Generate a unique demo token ID using timestamp and random number
      const timestamp = Date.now().toString(16);
      const random = Math.floor(Math.random() * 1000000).toString(16);
      const demoTokenId = `0x${timestamp}${random}`;
      
      setNftTokenId(demoTokenId);
      setShowNFTTicket(true);
    } catch (err) {
      console.error('Booking error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mt-8">
      {error && (
        <div className="mb-4 p-4 bg-primary-50 border border-primary-200 rounded-lg relative">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-2" />
            <div className="flex-1">
              <p className="text-primary-700">{error}</p>
            </div>
            <button
              onClick={clearError}
              className="text-primary-400 hover:text-primary-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="text-primary-700">
          {selectedSeats.length} seats selected
          {selectedSeats.length > 0 && (
            <span className="ml-2 text-lg font-semibold text-primary-600">
              Total: {totalEth} ETH
            </span>
          )}
        </div>
        <button
          onClick={generateDemoNFT}
          disabled={selectedSeats.length === 0 || isConnecting || isProcessing}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          {isConnecting ? 'Connecting Wallet...' : 
           isProcessing ? 'Generating Ticket...' : 
           account ? 'Book Tickets' : 'Connect Wallet'}
        </button>
      </div>
      {account && (
        <p className="mt-2 text-sm text-primary-500">
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      )}

      {showNFTTicket && nftTokenId && (
        <NFTTicket
          movieTitle={movieTitle}
          showtime={selectedShowtime.time}
          date={selectedShowtime.date}
          seats={selectedSeats}
          theater={selectedShowtime.theater}
          tokenId={nftTokenId}
          onClose={() => setShowNFTTicket(false)}
        />
      )}
    </div>
  );
};