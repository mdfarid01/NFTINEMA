import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Movie } from '../types/movie';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 border border-primary-100">
        <div className="relative h-[300px]">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{movie.title}</h3>
            <div className="flex items-center space-x-4 text-white mt-2">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-primary-400" />
                <span>{movie.duration} min</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-primary-400" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
          <p className="text-primary-700 text-sm line-clamp-2">{movie.synopsis}</p>
        </div>
      </div>
    </Link>
  );
};