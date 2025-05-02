export const calculateTotal = (price: number, quantity: number): string => {
  return (price * quantity).toFixed(2);
};

export const formatSeatList = (seats: string[]): string => {
  return seats.sort().join(', ');
};