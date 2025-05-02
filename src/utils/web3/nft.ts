import { Web3Storage } from 'web3.storage';

const WEB3_STORAGE_TOKEN = 'your-web3-storage-token';
const storage = new Web3Storage({ token: WEB3_STORAGE_TOKEN });

export const generateNFTMetadata = async (
  movieTitle: string,
  showtime: string,
  seats: string[],
  date: string
) => {
  const metadata = {
    name: `${movieTitle} Ticket`,
    description: `Movie ticket for ${movieTitle} on ${date} at ${showtime}. Seats: ${seats.join(', ')}`,
    image: 'https://example.com/ticket-image.png',
    attributes: [
      { trait_type: 'Movie', value: movieTitle },
      { trait_type: 'Date', value: date },
      { trait_type: 'Time', value: showtime },
      { trait_type: 'Seats', value: seats.join(', ') }
    ]
  };

  const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
  const files = [new File([blob], 'metadata.json')];
  const cid = await storage.put(files);
  return `ipfs://${cid}/metadata.json`;
};