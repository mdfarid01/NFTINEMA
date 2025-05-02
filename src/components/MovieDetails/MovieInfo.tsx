import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Movie } from '../../types/movie';
import { GenreTags } from './GenreTags';

interface MovieInfoProps {
  movie: Movie;
}

export const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-900 mb-4">{movie.title}</h1>
      <div className="flex items-center space-x-4 text-primary-600 mb-6">
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-1" />
          <span>{movie.duration} min</span>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 mr-1" />
          <span>{movie.rating}</span>
        </div>
      </div>
      <GenreTags genres={movie.genre} />
      <p className="text-primary-700 mb-8">{movie.synopsis}</p>
    </div>
  );
};