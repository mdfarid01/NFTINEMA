import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import { ShowtimeSelector } from '../components/ShowtimeSelector';
import { SeatMap } from '../components/SeatMap';
import { MovieInfo } from '../components/MovieDetails/MovieInfo';
import { BookingSummary } from '../components/MovieDetails/BookingSummary';
import { Showtime } from '../types/movie';

export const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === id);
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Movie not found</p>
      </div>
    );
  }

  const handleSeatSelect = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <MovieInfo movie={movie} />
              
              <ShowtimeSelector
                showtimes={movie.showtimes}
                selectedShowtime={selectedShowtime}
                onShowtimeSelect={setSelectedShowtime}
              />

              {selectedShowtime && (
                <div className="mt-8">
                  <SeatMap
                    selectedSeats={selectedSeats}
                    onSeatSelect={handleSeatSelect}
                  />
                  <BookingSummary
                    selectedSeats={selectedSeats}
                    selectedShowtime={selectedShowtime}
                    movieTitle={movie.title}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};