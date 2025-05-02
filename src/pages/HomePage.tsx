import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { movies } from '../data/movies';
import { Ticket, Shield, Wallet } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredMovies = movies.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000"
            alt="Cinema Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Movie Tickets as
            <span className="text-primary-400"> NFTs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Experience the future of movie ticketing. Book your seats and receive
            unique NFT tickets that you can collect and treasure.
          </p>
          <a
            href="#movies"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Why Choose NFTinema?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-primary-50 rounded-full mb-4">
                <Ticket className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Collectible Tickets
              </h3>
              <p className="text-primary-700">
                Each ticket is a unique NFT that you can keep as a digital
                memorabilia of your movie experience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-primary-50 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Secure & Verifiable
              </h3>
              <p className="text-primary-700">
                Blockchain technology ensures your tickets are authentic and
                cannot be counterfeited.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-primary-50 rounded-full mb-4">
                <Wallet className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Easy to Use
              </h3>
              <p className="text-primary-700">
                Connect your wallet, select your seats, and receive your NFT
                ticket instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Movies Section */}
      <div id="movies" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary-900">
              Featured Movies
            </h2>
            <a
              href="/movies"
              className="text-primary-500 hover:text-primary-600 font-semibold"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your movie tickets now and start your NFT collection.
          </p>
          <a
            href="#movies"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Browse Movies
          </a>
        </div>
      </div>
    </div>
  );
};