export const THEATER_WALLET = '0x1234567890123456789012345678901234567890';

export enum Web3Error {
  USER_REJECTED = 'USER_REJECTED',
  NO_METAMASK = 'NO_METAMASK',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  UNKNOWN = 'UNKNOWN'
}

export const getWeb3ErrorMessage = (error: Web3Error): string => {
  switch (error) {
    case Web3Error.USER_REJECTED:
      return 'Connection request was rejected. Please try again to continue with the booking.';
    case Web3Error.NO_METAMASK:
      return 'MetaMask is not installed. Please install MetaMask to continue.';
    case Web3Error.PAYMENT_FAILED:
      return 'Payment transaction failed. Please try again.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};