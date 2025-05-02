import React from 'react';
import { format } from 'date-fns';
import { Ticket, Clock, Calendar, MapPin } from 'lucide-react';

interface NFTTicketProps {
  movieTitle: string;
  showtime: string;
  date: string;
  seats: string[];
  theater: string;
  tokenId: string;
  onClose: () => void;
}

export const NFTTicket: React.FC<NFTTicketProps> = ({
  movieTitle,
  showtime,
  date,
  seats,
  theater,
  tokenId,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b23] p-6 rounded-xl max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>

        <div className="flex justify-center mb-6">
          <Ticket className="w-12 h-12 text-primary-500" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 text-primary-400">
          {movieTitle}
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-5 h-5 mr-3 text-primary-500" />
            <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <Clock className="w-5 h-5 mr-3 text-primary-500" />
            <span>{format(new Date(`2024-01-01T${showtime}`), 'h:mm a')}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 mr-3 text-primary-500" />
            <span>{theater}</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-medium text-primary-400 mb-3">Seats</h3>
          <div className="flex flex-wrap gap-2">
            {seats.map((seat) => (
              <span
                key={seat}
                className="px-3 py-1 bg-primary-900/50 rounded-full text-primary-400 text-sm"
              >
                {seat}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-primary-400 mb-2">NFT Token ID</p>
          <p className="font-mono text-gray-300 text-sm break-all">{tokenId}</p>
        </div>
      </div>
    </div>
  );
};