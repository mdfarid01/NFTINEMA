export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  duration: number;
  genre: string[];
  rating: string;
  synopsis: string;
  showtimes: Showtime[];
}

export interface Showtime {
  id: string;
  time: string;
  date: string;
  theater: string;
  price: number;
}