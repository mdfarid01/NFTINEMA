import React from 'react';

interface SeatMapProps {
  selectedSeats: string[];
  onSeatSelect: (seatId: string) => void;
}

export const SeatMap: React.FC<SeatMapProps> = ({ selectedSeats, onSeatSelect }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const seatsPerRow = 8;

  const isSeatSelected = (seatId: string) => selectedSeats.includes(seatId);

  return (
    <div className="space-y-6">
      <div className="w-full bg-primary-50 h-8 rounded-t-xl flex items-center justify-center text-primary-700 text-sm">
        Screen
      </div>
      <div className="grid gap-y-4">
        {rows.map((row) => (
          <div key={row} className="flex items-center justify-center gap-2">
            <span className="w-6 text-center text-primary-500">{row}</span>
            {Array.from({ length: seatsPerRow }, (_, i) => {
              const seatId = `${row}${i + 1}`;
              return (
                <button
                  key={seatId}
                  onClick={() => onSeatSelect(seatId)}
                  className={`w-8 h-8 rounded-t-lg ${
                    isSeatSelected(seatId)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 hover:bg-primary-100 text-gray-700'
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
            <span className="w-6 text-center text-primary-500">{row}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-t-sm"></div>
          <span className="text-sm text-primary-700">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary-600 rounded-t-sm"></div>
          <span className="text-sm text-primary-700">Selected</span>
        </div>
      </div>
    </div>
  );
};