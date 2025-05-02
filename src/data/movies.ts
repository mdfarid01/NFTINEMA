import { Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600',
    duration: 148,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 'PG-13',
    synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    showtimes: [
      {
        id: 'st1',
        time: '14:30',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      },
      {
        id: 'st2',
        time: '18:00',
        date: '2024-03-20',
        theater: 'Theater 2',
        price: 0.01
      }
    ]
  },
  {
    id: '2',
    title: 'The Dark Knight',
    posterUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600',
    duration: 152,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 'PG-13',
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    showtimes: [
      {
        id: 'st3',
        time: '15:00',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      },
      {
        id: 'st4',
        time: '19:30',
        date: '2024-03-20',
        theater: 'Theater 3',
        price: 0.01
      }
    ]
  },
  {
    id: '3',
    title: 'Interstellar',
    posterUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600',
    duration: 169,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 'PG-13',
    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    showtimes: [
      {
        id: 'st5',
        time: '16:30',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      },
      {
        id: 'st6',
        time: '20:00',
        date: '2024-03-20',
        theater: 'Theater 2',
        price: 0.01
      }
    ]
  },
  {
    id: '4',
    title: 'Dune',
    posterUrl: 'https://images.unsplash.com/photo-1547499417-61a435d27cb3?auto=format&fit=crop&w=600',
    duration: 155,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 'PG-13',
    synopsis: 'Feature adaptation of Frank Herbert\'s science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.',
    showtimes: [
      {
        id: 'st7',
        time: '17:00',
        date: '2024-03-20',
        theater: 'Theater 3',
        price: 0.01
      },
      {
        id: 'st8',
        time: '21:30',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      }
    ]
  },
  {
    id: '5',
    title: 'The Matrix',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600',
    duration: 136,
    genre: ['Action', 'Sci-Fi'],
    rating: 'R',
    synopsis: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free from the system.',
    showtimes: [
      {
        id: 'st9',
        time: '15:30',
        date: '2024-03-20',
        theater: 'Theater 2',
        price: 0.01
      },
      {
        id: 'st10',
        time: '20:30',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      }
    ]
  },
  {
    id: '6',
    title: 'Blade Runner 2049',
    posterUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=600',
    duration: 164,
    genre: ['Action', 'Drama', 'Sci-Fi'],
    rating: 'R',
    synopsis: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who\'s been missing for thirty years.',
    showtimes: [
      {
        id: 'st11',
        time: '16:00',
        date: '2024-03-20',
        theater: 'Theater 3',
        price: 0.01
      },
      {
        id: 'st12',
        time: '21:00',
        date: '2024-03-20',
        theater: 'Theater 2',
        price: 0.01
      }
    ]
  },
  {
    id: '7',
    title: 'Arrival',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600',
    duration: 116,
    genre: ['Drama', 'Mystery', 'Sci-Fi'],
    rating: 'PG-13',
    synopsis: 'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
    showtimes: [
      {
        id: 'st13',
        time: '14:00',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      },
      {
        id: 'st14',
        time: '18:30',
        date: '2024-03-20',
        theater: 'Theater 3',
        price: 0.01
      }
    ]
  },
  {
    id: '8',
    title: 'Ex Machina',
    posterUrl: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=600',
    duration: 108,
    genre: ['Drama', 'Sci-Fi', 'Thriller'],
    rating: 'R',
    synopsis: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.',
    showtimes: [
      {
        id: 'st15',
        time: '17:30',
        date: '2024-03-20',
        theater: 'Theater 2',
        price: 0.01
      },
      {
        id: 'st16',
        time: '22:00',
        date: '2024-03-20',
        theater: 'Theater 1',
        price: 0.01
      }
    ]
  }
];