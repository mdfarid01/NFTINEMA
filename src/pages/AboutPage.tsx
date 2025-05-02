import React from 'react';
import { Wallet, Ticket, Film, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary-900 mb-8">How to Book Movie Tickets</h1>
        
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
            <div className="flex items-center mb-4">
              <Film className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold text-primary-900">1. Select Your Movie</h2>
            </div>
            <p className="text-primary-700 ml-11">
              Browse through our collection of movies and click on the movie you'd like to watch.
              You'll find details about the movie, including synopsis, duration, and available showtimes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
            <div className="flex items-center mb-4">
              <Ticket className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold text-primary-900">2. Choose Showtime & Seats</h2>
            </div>
            <p className="text-primary-700 ml-11">
              Select your preferred showtime from the available options. Then, choose your seats
              from the seating layout. Selected seats will be highlighted in red.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
            <div className="flex items-center mb-4">
              <Wallet className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold text-primary-900">3. Connect Your Wallet</h2>
            </div>
            <div className="ml-11">
              <p className="text-primary-700 mb-4">
                Click the "Connect Wallet" button to connect your Web3 wallet. We support multiple wallets:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-primary-700">
                  <ArrowRight className="w-4 h-4 mr-2 text-primary-600" />
                  <span className="font-medium">MetaMask:</span>
                  <span className="ml-2">Most popular Ethereum wallet browser extension</span>
                </li>
                <li className="flex items-center text-primary-700">
                  <ArrowRight className="w-4 h-4 mr-2 text-primary-600" />
                  <span className="font-medium">BitGet Wallet:</span>
                  <span className="ml-2">Multi-chain crypto wallet with DeFi features</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-primary-100 p-6 rounded-lg border border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-primary-800">
              <li>Each ticket will be minted as a unique NFT in your wallet</li>
              <li>Make sure you have enough funds to cover the ticket price plus gas fees</li>
              <li>Keep your wallet connected until the transaction is complete</li>
              <li>Your NFT ticket will be viewable in your connected wallet after purchase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};