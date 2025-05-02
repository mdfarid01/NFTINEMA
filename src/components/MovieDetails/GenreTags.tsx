import React from 'react';

interface GenreTagsProps {
  genres: string[];
}

export const GenreTags: React.FC<GenreTagsProps> = ({ genres }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {genres.map((genre) => (
        <span
          key={genre}
          className="px-3 py-1 bg-primary-50 rounded-full text-primary-700"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};