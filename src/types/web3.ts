export interface Web3ContextType {
  account: string | null;
  connect: () => Promise<void>;
  isConnecting: boolean;
  error: string | null;
  clearError: () => void;
}

export enum Web3Error {
  USER_REJECTED = 'USER_REJECTED',
  NO_METAMASK = 'NO_METAMASK',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  UNKNOWN = 'UNKNOWN'
}