import React from 'react';
import { format } from 'date-fns';
import { Showtime } from '../types/movie';
import { Clock } from 'lucide-react';

interface ShowtimeSelectorProps {
  showtimes: Showtime[];
  selectedShowtime: Showtime | null;
  onShowtimeSelect: (showtime: Showtime) => void;
}

export const ShowtimeSelector: React.FC<ShowtimeSelectorProps> = ({
  showtimes,
  selectedShowtime,
  onShowtimeSelect,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary-900">Select Showtime</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {showtimes.map((showtime) => (
          <button
            key={showtime.id}
            onClick={() => onShowtimeSelect(showtime)}
            className={`p-4 rounded-lg border ${
              selectedShowtime?.id === showtime.id
                ? 'border-primary-600 bg-primary-50'
                : 'border-gray-200 hover:border-primary-600'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-500">{showtime.theater}</span>
            </div>
            <div className="text-center">
              <div className="font-semibold text-primary-900">
                {format(new Date(showtime.date + 'T' + showtime.time), 'h:mm a')}
              </div>
              <div className="text-sm text-primary-500">
                {format(new Date(showtime.date), 'MMM d, yyyy')}
              </div>
              <div className="mt-2 text-primary-600 font-medium">
                ${showtime.price.toFixed(2)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};